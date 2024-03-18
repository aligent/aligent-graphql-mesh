import { Resolvers } from '@aligent/auth-resolvers';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';
import { refreshCustomerTokenResolver } from './mutations/refresh-customer-token';

export const resolvers: Resolvers = {
    Mutation: {
        generateCustomerToken: generateCustomerTokenResolver,
        refreshCustomerToken: refreshCustomerTokenResolver,
    },
};

export default resolvers;
