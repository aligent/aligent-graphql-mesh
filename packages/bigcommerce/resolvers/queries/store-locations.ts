import { QueryResolvers } from '@mesh';
import { getBcStoreLocationsGraphql } from '../../apis/graphql/store-locations';
import { BC_InventoryLocationsArgs } from '@mesh/external/BigCommerceGraphqlApi';
import {
    getTransformedStoreLocationItems,
    getTransformedStoreLocationsArgs,
} from '../../factories/helpers/transform-store-locations';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const variables: BC_InventoryLocationsArgs = getTransformedStoreLocationsArgs(args);
        const bcStoreLocations = await getBcStoreLocationsGraphql(
            variables,
            customerImpersonationToken
        );

        return getTransformedStoreLocationItems(bcStoreLocations);
    },
};
