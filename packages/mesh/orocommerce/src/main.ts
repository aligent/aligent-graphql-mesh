import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { useGraphQLModules } from '@envelop/graphql-modules';
import application from './application';

const yoga = createYoga({ plugins: [useGraphQLModules(application)], graphiql: true });
const server = createServer(yoga);
const port = 4000 || process.env.PORT;

server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
