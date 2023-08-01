import { QueryResolvers } from '../../../meshrc/.mesh';
import { mockStoreConfig } from '../mocks/store-config';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockStoreConfig;
    },
};
