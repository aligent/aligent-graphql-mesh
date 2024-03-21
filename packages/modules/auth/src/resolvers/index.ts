import { Resolvers } from '@aligent/auth-resolvers';
import {
    generateCustomerTokenResolver,
    refreshCustomerTokenResolver,
    removeUserAuthResolver,
    updateUserAuthResolver,
} from './mutations';
import { getUserAuthResolver } from './queries';
import { revokeCustomerTokenResolver } from './mutations/revoke-customer-token-resolver';

export const resolvers: Resolvers = {
    Mutation: {
        generateCustomerToken: generateCustomerTokenResolver,
        refreshCustomerToken: refreshCustomerTokenResolver,
        removeUserAuth: removeUserAuthResolver,
        revokeCustomerToken: revokeCustomerTokenResolver,
        updateUserAuth: updateUserAuthResolver,
    },
    Query: {
        getUserAuth: getUserAuthResolver,
    },
};

export default resolvers;
