import { QueryResolvers } from '@aligent/orocommerce-resolvers';

import { StoreConfigApiClient } from '../../apis/rest/store-config-api-client';

import { StoreConfigTransformerChain } from '../../transformers/store-config/store-config-transformer';
import { Auth } from '../../services';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        const authService: Auth = context.injector.get(Auth);
        const token = await authService.login('guest', 'guest');
        const storeConfigApiClient: StoreConfigApiClient =
            context.injector.get(StoreConfigApiClient);
        const oroStoreConfig = await storeConfigApiClient.getStoreConfig(token.access_token);

        const storeConfigTransformerChain: StoreConfigTransformerChain = context.injector.get(
            StoreConfigTransformerChain
        );
        return storeConfigTransformerChain.transform({ data: oroStoreConfig });
    },
};
