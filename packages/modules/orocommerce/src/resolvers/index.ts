import { Resolvers } from 'graphql-modules';
import { storeConfigResolver } from './queries/store-config';
import { generateCustomerTokenMutation } from './mutations/generate-customer-token';
import { keyMessagesResolver } from './queries/key-messages';
import { createEmptyCartMutation } from './mutations/create-empty-cart';
import { cmsBlocksResolver } from './queries/cms-blocks';
import { cmsPageResolver } from './queries/cms-page';

export const resolvers: Resolvers = {
    Query: {
        storeConfig: storeConfigResolver,
        keyMessages: keyMessagesResolver,
        cmsBlocks: cmsBlocksResolver,
        cmsPage: cmsPageResolver,
    },
    Mutation: {
        generateCustomerToken: generateCustomerTokenMutation,
        createEmptyCart: createEmptyCartMutation,
    },
};

export default resolvers;
