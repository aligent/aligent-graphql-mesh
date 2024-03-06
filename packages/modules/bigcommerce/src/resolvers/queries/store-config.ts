import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { checkMaintenanceMode } from '../../apis/helpers/maintenance-mode';
import { retrieveStoreConfigsFromCache } from '../../apis/graphql';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const STORE_CONFIG_PWA = 'pwa_config';
export const STORE_CONFIG_ADMIN = 'store_config';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        /* Check if maintenance mode has been raised. If it has, an error will be thrown.
         * The PWA calls the storeConfig query on page load and if the response is an error, it will
         * raise the maintenance page. */
        const checkMaintenanceModeQuery = await checkMaintenanceMode(
            customerImpersonationToken,
            context
        );

        const storeConfigsQuery = retrieveStoreConfigsFromCache(context);

        const [, storeConfigs] = await Promise.all([checkMaintenanceModeQuery, storeConfigsQuery]);

        return storeConfigs;
    },
};
