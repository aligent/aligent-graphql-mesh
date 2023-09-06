import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcStoreLocationsGraphql } from '../../apis/graphql/store-locations';
import {
    getTransformedStoreLocationItems,
    getTransformedStoreLocationsArgs,
} from '../../factories/transform-store-locations';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const variables = getTransformedStoreLocationsArgs(args);
        const bcStoreLocations = await getBcStoreLocationsGraphql(
            variables,
            customerImpersonationToken
        );

        return getTransformedStoreLocationItems(bcStoreLocations);
    },
};
