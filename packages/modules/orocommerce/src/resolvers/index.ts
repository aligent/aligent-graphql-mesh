import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        keyMessages: keyMessagesResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
    },
};

export default resolvers;
