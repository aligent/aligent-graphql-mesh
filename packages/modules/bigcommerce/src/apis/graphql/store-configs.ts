import { bcGraphQlRequest } from './client';
import { StoreConfig } from '@aligent/bigcommerce-resolvers';
import { Maybe, MetafieldEdge, Settings } from '@aligent/bigcommerce-operations';
import { getDataFromMeshCache, logAndThrowError } from '@aligent/utils';
import { storeConfigsQuery } from './requests/store-configs';
import { STORE_CONFIG_PWA, STORE_CONFIG_ADMIN } from '../../resolvers/queries/store-config';
import { getTransformedChannelMetafieldsToStoreConfig } from '../../factories/transform-store-configs';

const CACHE_KEY__STORE_CONFIG: string = 'store_configs';

export type getStoreConfigsTypes = Promise<StoreConfig & Settings>;

export const getStoreConfigs = async (
    context: GraphQLModules.ModuleContext
): getStoreConfigsTypes => {
    const customerImpersonationToken = (await context.cache.get(
        'customerImpersonationToken'
    )) as string;

    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const query = {
        query: storeConfigsQuery,
        variables: {
            pwaConfigNamespace: STORE_CONFIG_PWA,
            storeConfigNamespace: STORE_CONFIG_ADMIN,
        },
    };

    const response = await bcGraphQlRequest(query, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    const { channel, site } = response.data;
    const { pwaMetafields, storeConfigMetafields } = channel;

    return {
        ...getTransformedChannelMetafieldsToStoreConfig(pwaMetafields),
        ...getTransformedChannelMetafieldsToStoreConfig(storeConfigMetafields),
        ...site.settings,
    };
};

export const retrieveStoreConfigsFromCache = async (
    context: GraphQLModules.ModuleContext
): getStoreConfigsTypes => {
    const query = getStoreConfigs(context);

    return getDataFromMeshCache(context, CACHE_KEY__STORE_CONFIG, query);
};
