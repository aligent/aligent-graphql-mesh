import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { cmsPageResolver } from './queries/cms-page';
import { storeLocationsResolver } from './queries/store-locations';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        cmsBlocks: cmsBlocksResolver,
        cmsPage: cmsPageResolver,
        storeLocations: storeLocationsResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
    },
};

export default resolvers;
