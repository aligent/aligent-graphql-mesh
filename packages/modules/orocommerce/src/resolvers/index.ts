import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
    },
};

export default resolvers;
