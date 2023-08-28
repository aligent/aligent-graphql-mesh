import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcStoreLocationsGraphql } from '../../apis/graphql/store-locations';
import { InventoryLocationsArgs } from '@aligent/bigcommerce-operations';
import {
    getTransformedStoreLocationItems,
    getTransformedStoreLocationsArgs,
} from '../../factories/helpers/transform-store-locations';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const variables: InventoryLocationsArgs = getTransformedStoreLocationsArgs(args);
        const bcStoreLocations = await getBcStoreLocationsGraphql(
            variables,
            customerImpersonationToken
        );

        return getTransformedStoreLocationItems(bcStoreLocations);
    },
};
