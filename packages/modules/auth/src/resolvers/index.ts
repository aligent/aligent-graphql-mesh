import { Resolvers } from '@aligent/auth-resolvers';
import {
    generateCustomerTokenResolver,
    refreshCustomerTokenResolver,
    removeAllUserAuthItemsResolver,
    removeUserAuthResolver,
    revokeCustomerTokenResolver,
    updateUserAuthResolver,
} from './mutations';
import { getAllAuthItemsByIdResolver, getUserAuthResolver } from './queries';

export const resolvers: Resolvers = {
    Mutation: {
        generateCustomerToken: generateCustomerTokenResolver,
        refreshCustomerToken: refreshCustomerTokenResolver,
        removeUserAuth: removeUserAuthResolver,
        removeAllUserAuthItems: removeAllUserAuthItemsResolver,
        revokeCustomerToken: revokeCustomerTokenResolver,
        updateUserAuth: updateUserAuthResolver,
    },
    Query: {
        getUserAuth: getUserAuthResolver,
        getAllAuthItemsById: getAllAuthItemsByIdResolver,
    },
};

export default resolvers;
