import 'reflect-metadata';
import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { resolve } from 'node:path';
import resolvers from './resolvers';
import middlewares from './middleware';
import { getProviders } from './providers';

const loadGraphQlFiles = () => loadFilesSync(resolve(__dirname, './schema/*.graphql'));

export interface BigCommerceModuleConfig {
    graphqlEndpoint: string;
    authToken: string;
    jwtPrivateKey: string;
    clientSecret: string;
    clientId: string;
    storeHash: string;
}

export const createBigCommerceModule = (config: BigCommerceModuleConfig) => {
    return createModule({
        id: 'bigcommerce',
        dirname: __dirname,
        typeDefs: loadGraphQlFiles(),
        resolvers,
        middlewares,
        providers: getProviders(config),
    });
};

export * from './plugins/customer-impersonation-token';

// Export Globally accessible DI Tokens so other modules can use them
export { ModuleConfig, BigCommerceSdk } from './providers';