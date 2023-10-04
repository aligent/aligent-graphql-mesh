import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        countries: countriesResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
    },
};

export default resolvers;
