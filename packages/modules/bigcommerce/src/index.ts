import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'node:path';
import resolvers from './resolvers';

const loadGraphQlFiles = () => loadFilesSync(join(__dirname, './schema/*.graphql'));

export default createModule({
    id: 'bigcommerce',
    dirname: __dirname,
    typeDefs: loadGraphQlFiles(),
    resolvers,
});

// Export module defined types so they can be used in utils as needed
// @TODO: Utils dependant on types may need to be moved into this module instead
export * from './types'