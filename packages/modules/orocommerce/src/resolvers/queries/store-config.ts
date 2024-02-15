import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { StoreConfigApiClient } from '../../apis/rest/store-config-api-client';
import { StoreConfigTransformerChain } from '../../transformers/store-config/store-config-transformer';
import { Auth } from '../../services';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        let bearerToken = context.request.headers.get('authorization');
        // This is only needed when the PWA builds
        if (!bearerToken) {
            const authService: Auth = context.injector.get(Auth);
            const { access_token } = await authService.login('guest', 'guest');
            bearerToken = `Bearer ${access_token}`;
        }

        const storeConfigApiClient: StoreConfigApiClient =
            context.injector.get(StoreConfigApiClient);
        const oroStoreConfig = await storeConfigApiClient.retrieveStoreConfigFromCache(bearerToken);

        const storeConfigTransformerChain: StoreConfigTransformerChain = context.injector.get(
            StoreConfigTransformerChain
        );
        return storeConfigTransformerChain.transform({ data: oroStoreConfig });
    },
};
