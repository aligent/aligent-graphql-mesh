import 'reflect-metadata';
import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { resolve } from 'node:path';
import resolvers from './resolvers';
import middlewares from './middleware';
import { getProviders } from './providers';

const loadGraphQlFiles = () => loadFilesSync(resolve(__dirname, './schema/*.graphql'));

export interface OroCommerceModuleConfig {
    storeUrl: string;
    clientSecret: string;
    clientId: string;
}

export const createOroCommerceModule = (config: OroCommerceModuleConfig) => {
    return createModule({
        id: 'orocommerce',
        dirname: __dirname,
        typeDefs: loadGraphQlFiles(),
        resolvers,
        middlewares,
        providers: getProviders(config),
    });
};

// Export services, types and API clients so they are usable by client modules
export * from './services';
export * from './apis/rest';
export * from './types';
export * from './transformers';
