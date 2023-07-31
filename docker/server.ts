import { createBuiltMeshHTTPHandler } from './.mesh';
import express from 'express';

const app = express();
app.use('/graphql', createBuiltMeshHTTPHandler());
app.use('/healthcheck', (_req, res) => {
    return res.send('ok');
});

app.listen(4000, () => {
    console.log(`Mesh listening on port 4000`);
});
