import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { checkMaintenanceMode } from '../../apis/helpers/maintenance-mode';
import { retrieveStoreConfigsFromCache } from '../../apis/graphql';

export const STORE_CONFIG_PWA: string = 'pwa_config';
export const STORE_CONFIG_ADMIN: string = 'store_config';

export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async (_root, _args, context, _info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

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
