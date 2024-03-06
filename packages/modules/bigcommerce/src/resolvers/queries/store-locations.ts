import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcStoreLocationsGraphql } from '../../apis/graphql/store-locations';
import {
    getTransformedStoreLocationItems,
    getTransformedStoreLocationsArgs,
} from '../../factories/transform-store-locations';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const variables = getTransformedStoreLocationsArgs(args, customerImpersonationToken);
        const bcStoreLocations = await getBcStoreLocationsGraphql(
            variables,
            customerImpersonationToken
        );

        return getTransformedStoreLocationItems(bcStoreLocations);
    },
};
