import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
    },
};

export default resolvers;
