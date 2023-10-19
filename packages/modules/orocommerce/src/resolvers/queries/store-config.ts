import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { mockStoreConfig } from '../mocks/store-config';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, _context, _info) => {
        return mockStoreConfig;
    },
};
