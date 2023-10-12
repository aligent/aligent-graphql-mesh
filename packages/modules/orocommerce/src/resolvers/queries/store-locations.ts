import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { StoreLocationClient } from '../../apis/rest/store-location-api-client';
import { StoreLocationsTransformerChain } from '../../transformers/store-locations/store-locations-transformer';

export const storeLocationsResolver: QueryResolvers['storeLocations'] = {
    resolve: async (_root, args, context, _info) => {
        const api: StoreLocationClient = context.injector.get(StoreLocationClient);
        const locations = await api.getStoreLocations(args);

        const transformer: StoreLocationsTransformerChain = context.injector.get(
            StoreLocationsTransformerChain
        );

        return transformer.transform({ data: locations });
    },
};
