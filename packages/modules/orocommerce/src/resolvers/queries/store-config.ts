import { QueryResolvers } from '@aligent/orocommerce-resolvers';

import { transformedStoreConfig } from '../../transformers/store-config/__tests__/__data__/store-config-transformed-data';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, _context, _info) => {
        return transformedStoreConfig;
    },
};
