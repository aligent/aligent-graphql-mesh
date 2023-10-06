import express from 'express';
import cors from 'cors';
import https from 'node:https';
import { createYoga } from 'graphql-yoga';
import { useGraphQLModules } from '@envelop/graphql-modules';
import application from './application';
import { readFileSync } from 'node:fs';

const DEV_MODE = process.env?.NODE_ENV == 'development';

const yoga = createYoga({
    plugins: [useGraphQLModules(application)],
    graphiql: DEV_MODE,
    logging: DEV_MODE ? 'info' : 'warn',
    landingPage: false,
});

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
    allowedHeaders: ['Content-Type', 'Authorization', 'preview-version', 'x-recaptcha', 'store'],
};
app.use(cors(corsConfiguration));

/*
 * Respond to all OPTIONS requests with CORS headers
 */
app.options('*', cors(corsConfiguration));

/**
 * Add GraphQL Mesh route
 */
app.use(yoga.graphqlEndpoint, yoga);

/**
 * Load Balancer health check
 */
app.use('/healthcheck', (_req, res) => {
    return res.send('ok');
});

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
