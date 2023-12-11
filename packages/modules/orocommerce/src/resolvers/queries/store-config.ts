import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { StoreConfigApiClient } from '../../apis/rest/store-config-api-client';
import { StoreConfigTransformerChain } from '../../transformers/store-config/store-config-transformer';
import { AuthClient } from '../../apis/rest/auth';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        console.log('hjere');
        const authClient: AuthClient = context.injector.get(AuthClient)
        const token = await authClient.getGuestOAuth2Token();
        const storeConfigApiClient: StoreConfigApiClient =
            context.injector.get(StoreConfigApiClient);
        const oroStoreConfig = await storeConfigApiClient.getStoreConfig(token.access_token);

        const storeConfigTransformerChain: StoreConfigTransformerChain = context.injector.get(
            StoreConfigTransformerChain
        );
        return storeConfigTransformerChain.transform({ data: oroStoreConfig });
    },
};
