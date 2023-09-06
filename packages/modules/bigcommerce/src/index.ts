import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'node:path';
import resolvers from './resolvers';
import middlewares from './middleware';

const loadGraphQlFiles = () => loadFilesSync(join(__dirname, './schema/*.graphql'));

export default createModule({
    id: 'bigcommerce',
    dirname: __dirname,
    typeDefs: loadGraphQlFiles(),
    resolvers,
    middlewares,
});

export * from './plugins/customer-impersonation-token';