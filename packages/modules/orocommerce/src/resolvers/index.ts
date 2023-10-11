import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { postContactFormMutation } from './mutations/contact';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        keyMessages: keyMessagesResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
        postContactForm: postContactFormMutation,
    },
};

export default resolvers;
