import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedStoreLocationsArgs } from '../../factories/transform-store-locations';
import { InventoryLocationsArgs } from '@aligent/bigcommerce-operations';
import { getBcStoreAvailabilityGraphql } from '../../apis/graphql/store-availability';
import { getTransformedStoreAvailabilityData } from '../../factories/transform-store-availability';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const storeAvailabilityResolver: QueryResolvers['storeAvailability'] = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const transformedDistanceFilterArgs = (await getTransformedStoreLocationsArgs(
            args,
            customerImpersonationToken
        )) as Promise<InventoryLocationsArgs>;

        const variables = {
            ...transformedDistanceFilterArgs,
            sku: args?.skus[0].sku,
        };

        const response = await getBcStoreAvailabilityGraphql(variables, customerImpersonationToken);

        return getTransformedStoreAvailabilityData(
            response.productInventoryInfoResponse,
            response.storeLocationsResponse
        );
    },
};
