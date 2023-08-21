import { QueryResolvers } from '@mesh';
import { getBcStoreLocationsGraphql } from '../../apis/graphql/store-locations';
import { BC_InventoryLocationsArgs } from '@mesh/external/BigCommerceGraphqlApi';
import {
    getTransformedStoreLocationItems,
    getTransformedStoreLocationsArgs,
} from '../../factories/helpers/transform-store-locations';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, _args, _context, _info) => {
        const variables: BC_InventoryLocationsArgs = getTransformedStoreLocationsArgs(_args);
        const bcStoreLocations = await getBcStoreLocationsGraphql(variables);

        return getTransformedStoreLocationItems(bcStoreLocations);
    },
};
