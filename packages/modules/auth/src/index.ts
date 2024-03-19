import 'reflect-metadata';
import { createModule as createGraphqlModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { resolve } from 'node:path';
import resolvers from './resolvers';
import middlewares from './middleware';
import { getProviders } from './providers';

const loadGraphQlFiles = () => loadFilesSync(resolve(__dirname, './schema/*.graphql'));

export interface ModuleConfig {
    dynamoDbRegion: string;
    dynamoDbAccessKeyId: string;
    dynamoDbSecretAccessKey: string;
    dynamoDbTableName: string;
}

export const createAuthModule = (config: ModuleConfig) => {
    return createGraphqlModule({
        id: 'auth',
        dirname: __dirname,
        typeDefs: loadGraphQlFiles(),
        resolvers,
        middlewares,
        providers: getProviders(config),
    });
};

// Export services, types and API clients so they are usable by client modules
export * from './services';
export * from './apis';
export * from './types';
export * from './transformers';
