import { QueryResolvers } from '@mesh';
import { mockStoreLocations } from '../mocks/store-locations';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockStoreLocations;
    },
};
