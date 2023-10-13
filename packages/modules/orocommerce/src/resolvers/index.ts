import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';
import { categoriesResolver } from './queries/categories';
import { breadcrumbsResolver } from './queries/sub-resolvers/breadcrumbs';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        keyMessages: keyMessagesResolver,
        categories: categoriesResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    CategoryTree: {
        breadcrumbs: breadcrumbsResolver,
    },
};

export default resolvers;
