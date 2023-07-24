import { createBuiltMeshHTTPHandler } from '../src/meshrc/.mesh';
import express from 'express';

const app = express();
app.use('/graphql', createBuiltMeshHTTPHandler());

app.listen(4000, () => {
    console.log('Mesh running');
});
