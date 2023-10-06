import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { currencyResolver } from './queries/currency';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        currency: currencyResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
    },
};

export default resolvers;
