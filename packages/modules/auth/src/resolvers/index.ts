import { Resolvers } from '@aligent/auth-resolvers';
import {
    generateCustomerTokenResolver,
    refreshCustomerTokenResolver,
    removeUserAuthResolver,
    updateUserAuthResolver,
} from './mutations';
import { getUserAuthResolver } from './queries';

export const resolvers: Resolvers = {
    Mutation: {
        generateCustomerToken: generateCustomerTokenResolver,
        refreshCustomerToken: refreshCustomerTokenResolver,
        removeUserAuth: removeUserAuthResolver,
        updateUserAuth: updateUserAuthResolver,
    },
    Query: {
        getUserAuth: getUserAuthResolver,
    },
};

export default resolvers;
