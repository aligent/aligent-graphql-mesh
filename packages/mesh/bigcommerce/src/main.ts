import express from 'express';
import cors from 'cors';
import http from 'http';
import https from 'node:https';
import { createYoga } from 'graphql-yoga';
import { useGraphQLModules } from '@envelop/graphql-modules';
import application from './application';
import { readFileSync } from 'node:fs';
import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';
import Keyv from 'keyv';
import cachableObjects from './cache';
import { customerImpersonationPlugin } from '@aligent/bigcommerce-graphql-module';
import { addIpAddressToAxiosHeaders } from '@aligent/bigcommerce-graphql-module';
import * as xray from 'aws-xray-sdk';
import * as aws from 'aws-sdk';

const DEV_MODE = process.env?.NODE_ENV == 'development';
const redisDb = process.env?.REDIS_DATABASE || '0';
const redisUri = `redis://${process.env.REDIS_ENDPOINT}:${process.env.REDIS_PORT}/${redisDb}`;

const cache = DEV_MODE
    ? new Keyv({ namespace: 'application' })
    : new Keyv(redisUri, { namespace: 'application' });

const yoga = createYoga({
    graphiql: DEV_MODE,
    logging: DEV_MODE ? 'info' : 'warn',
    landingPage: false,
    cors: false,
    context: async ({ request }) => {
        // Convert the headers object to a Record so we can maintain
        // the same headers references in the resolvers
        const headers: Record<string, string> = {};
        request.headers.forEach((value, key) => {
            headers[key] = value;
        });

        return {
            headers,
            cache,
        };
    },
    plugins: [
        useGraphQLModules(application),
        customerImpersonationPlugin,
        addIpAddressToAxiosHeaders,
        EnvelopArmorPlugin({
            maxAliases: {
                n: 70,
                allowList: [],
            },
            maxDepth: {
                n: 15000,
            },
            costLimit: {
                maxCost: 50000, //@TODO: Being updated to get staging working OTF-277
            },
        }),
    ],
});

const app = express();

let allowedOrigins: (string | RegExp)[] = [
    new RegExp('.*.dev.aligent.consulting(:\\d{4})?$'),
    new RegExp('.*.local.pwadev(:\\d{4})?$'),
    new RegExp('.*-\\w+-\\d+.pwa.aligent.com.au'), // TF feature envs
];

if (process.env.ORIGINS) {
    const origins = process.env.ORIGINS.split(',');
    allowedOrigins = allowedOrigins.concat(origins);
}

/*
 * Configure CORS and add middleware for use on all routes
 */
const corsConfiguration: cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Content-Currency',
        'preview-version',
        'x-recaptcha',
        'mesh-token',
        'store',
    ],
};
app.use(cors(corsConfiguration));

/*
 * Respond to all OPTIONS requests with CORS headers
 */
app.options('*', cors(corsConfiguration));

/**
 * Load Balancer health check
 */
app.use('/healthcheck', (_req, res) => {
    return res.send('ok');
});

/*
 * Configure AWS X-Ray Tracing
 */
xray.captureAWS(aws);
xray.captureHTTPsGlobal(http);
xray.captureHTTPsGlobal(https);

app.use(xray.express.openSegment('Mesh'));

/**
 * Add cache headers for cloudfront
 */
app.use((req, res, next) => {
    res.setHeader('Vary', `Origin,Accept-Encoding,Store,Content-Currency,Authorization`);

    if (req.method == 'GET' && /^\/graphql/.test(req.path) && !req.header('Authorization')) {
        if (
            typeof req.query.operationName === 'string' &&
            Object.prototype.hasOwnProperty.call(
                cachableObjects.operations,
                req.query.operationName
            )
        ) {
            res.setHeader(
                'Cache-Control',
                `s-maxage=${cachableObjects.operations[req.query.operationName]}`
            );
            return next();
        }

        for (const rule of cachableObjects.rules) {
            if (rule.pattern.test(req.url)) {
                res.setHeader('Cache-Control', `s-maxage=${rule.maxAge}`);
                return next();
            }
        }
    }

    return next();
});

/**
 * Add GraphQL Mesh route
 */
app.use(yoga.graphqlEndpoint, yoga);

app.use(xray.express.closeSegment());

// Disable powered by header
app.disable('x-powered-by');

const port = 4000 || process.env.PORT;
if (DEV_MODE) {
    const server = https.createServer(
        {
            key: readFileSync('./certificates/cert.key'),
            cert: readFileSync('./certificates/cert.crt'),
        },
        app
    );

    server.listen(port, () => {
        console.log(`Mesh listening at https://localhost:${port}/graphql`);
    });
} else {
    app.listen(port, () => {
        console.log(`Mesh listening at https://localhost:${port}/graphql`);
    });
}