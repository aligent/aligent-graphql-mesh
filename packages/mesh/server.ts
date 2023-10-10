import 'module-alias/register';
import { createBuiltMeshHTTPHandler } from './.mesh';
import express from 'express';
import cors from 'cors';
import cachableObjects from './cache';

const app = express();

let allowedOrigins: (string | RegExp)[] = [
    new RegExp('.*.dev.aligent.consulting$'),
    new RegExp('.*.local.pwadev$'),
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

app.use((req, res, next) => {
    res.setHeader(
        'Vary',
        `Origin,Accept-Encoding,Store,Content-Currency,Authorization`
    );

    if (req.method == 'GET' 
        && /^\/graphql/.test(req.path)
        && !req.header('Authorization')) {
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
                console.log('rule matched');
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
app.use('/graphql', createBuiltMeshHTTPHandler());

/**
 * Load Balancer health check
 */
app.use('/healthcheck', (_req, res) => {
    return res.send('ok');
});

app.listen(4000, () => {
    console.log(`Mesh listening on port 4000`);
});
