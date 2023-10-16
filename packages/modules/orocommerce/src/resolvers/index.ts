import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';
import { categoriesResolver } from './queries/categories';
import { breadcrumbsResolver } from './queries/sub-resolvers/breadcrumbs';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { storeLocationsResolver } from './queries/store-locations';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        categories: categoriesResolver,
        cmsBlocks: cmsBlocksResolver,
        storeLocations: storeLocationsResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
    },
    //sub-resolvers, used for nested queries from a query or a mutation resolver
    CategoryTree: {
        breadcrumbs: breadcrumbsResolver,
    },
};

export default resolvers;
