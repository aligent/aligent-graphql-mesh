import { MetafieldConnection } from '@aligent/bigcommerce-operations';
import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getChannelMetafields } from '../../apis/graphql/channel';
import { checkMaintenanceMode } from '../../apis/helpers/maintenance-mode';
import { getTransformedChannelMetafieldsToStoreConfig } from '../../factories/transform-store-configs';

const NAMESPACE: string = 'pwa_config';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        /* Check if maintenance mode has been raised. If it has, an error will be thrown.
         * The PWA calls the storeConfig query on page load and if the response is an error, it will
         * raise the maintenance page. */
        await checkMaintenanceMode(customerImpersonationToken, context);

        //The namespace needs to match the metafield namespace when created in BigCommerce
        const bcChannelMetafieldsConfig: MetafieldConnection = await getChannelMetafields(
            NAMESPACE,
            customerImpersonationToken
        );

        const storeConfig = getTransformedChannelMetafieldsToStoreConfig(bcChannelMetafieldsConfig);
        return storeConfig;
    },
};
