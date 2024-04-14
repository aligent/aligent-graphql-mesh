import 'reflect-metadata';
import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { resolve } from 'node:path';
import resolvers from './resolvers';
import { getProviders } from './providers';
import { CACHE_ITEMS_TTL, CacheItemTtlTypes } from './constants';

const loadGraphQlFiles = () => loadFilesSync(resolve(__dirname, './schema/*.graphql'));

export interface BigCommerceModuleConfig {
    graphqlEndpoint: string;
    authToken: string;
    jwtPrivateKey: string;
    clientSecret: string;
    clientId: string;
    storeHash: string;
    cacheItemsTtl?: CacheItemTtlTypes;
}

export const createBigCommerceModule = (config: BigCommerceModuleConfig) => {
    return createModule({
        id: 'bigcommerce',
        dirname: __dirname,
        typeDefs: loadGraphQlFiles(),
        resolvers,
        providers: getProviders({ ...config, cacheItemsTtl: CACHE_ITEMS_TTL }),
    });
};

export * from './plugins/add-ip-address-to-axios-headers';
export * from './apis/graphql';
export * from './apis/rest';
export * from './utils';

// Export Globally accessible DI Tokens so other modules can use them
export { ModuleConfig, BigCommerceSdk } from './providers';
