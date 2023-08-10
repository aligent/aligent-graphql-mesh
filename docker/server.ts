import { createBuiltMeshHTTPHandler } from './.mesh';
import express from 'express';
import cors from 'cors';

const app = express();

const allowedOrigins: (string | RegExp)[] = [
    new RegExp('.*\.dev\.aligent\.consulting$'),
    new RegExp('.*\.local\.pwadev$'),
];

if (process.env.ORIGIN) {
    allowedOrigins.push(process.env.ORIGIN);
}

/*
* Configure CORS and add middleware for use on all routes
*/
const corsConfiguration: cors.CorsOptions  = {
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'preview-version',
        'x-recaptcha',
        'mesh-token'
    ]
};
app.use(cors(corsConfiguration));

/*
* Respond to all OPTIONS requests with CORS headers
*/
app.options('*', cors(corsConfiguration));

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
