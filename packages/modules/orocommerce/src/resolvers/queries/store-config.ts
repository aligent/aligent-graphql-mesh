import { QueryResolvers } from '@aligent/orocommerce-resolvers';

import { transformedStoreConfig } from '../../transformers/store-config/__tests__/__data__/store-config-transformed-data';
import { StoreConfigApiClient } from '../../apis/rest/store-config-api-client';

import { StoreConfigTransformerChain } from '../../transformers/store-config/store-config-transformer';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        return transformedStoreConfig;
        const storeConfigApiClient: StoreConfigApiClient =
            context.injector.get(StoreConfigApiClient);
        const oroStoreConfig = await storeConfigApiClient.getStoreConfig();
        const storeConfigTransformerChain: StoreConfigTransformerChain = context.injector.get(
            StoreConfigTransformerChain
        );
        return storeConfigTransformerChain.transform({ data: oroStoreConfig });
    },
};
