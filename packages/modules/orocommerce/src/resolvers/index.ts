import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { countriesResolver } from './queries/country';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { currencyResolver } from './queries/currency';
import { keyMessagesResolver } from './queries/key-messages';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { storeLocationsResolver } from './queries/store-locations';
import { createCustomerMutation } from './mutations/create-customer';
import { createCustomerAddressMutation } from './mutations/create-customer-address';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        currency: currencyResolver,
        countries: countriesResolver,
        keyMessages: keyMessagesResolver,
        cmsBlocks: cmsBlocksResolver,
        storeLocations: storeLocationsResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
        createCustomer: createCustomerMutation,
        createCustomerAddress: createCustomerAddressMutation,
    },
};

export default resolvers;
