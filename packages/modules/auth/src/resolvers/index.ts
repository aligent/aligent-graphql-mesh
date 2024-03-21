import { Resolvers } from '@aligent/auth-resolvers';
import { generateCustomerTokenResolver } from './mutations/generate-customer-token';

export const resolvers: Resolvers = {
    Mutation: {
        generateCustomerToken: generateCustomerTokenResolver,
    },
};

export default resolvers;
