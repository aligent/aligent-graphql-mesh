import { mockStoreConfig } from '../mocks/store-config';

export const storeConfigResolver = {
    resolve: async (_root, _args, _context, _info) => {
        return mockStoreConfig;
    },
};
