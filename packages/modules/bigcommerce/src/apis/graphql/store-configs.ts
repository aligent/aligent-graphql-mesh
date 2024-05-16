import { bcGraphQlRequest } from './client';
import { Settings } from '@aligent/bigcommerce-operations';
import { logAndThrowError } from '@aligent/utils';
import { storeConfigsQuery } from './requests/store-configs';
import { STORE_CONFIG_PWA, STORE_CONFIG_ADMIN } from '../../resolvers/queries/store-config';
import {
    getTransformedChannelMetafieldsToStoreConfig,
    MetafieldStoreConfigs,
} from '../../factories/transform-store-configs';
import { getDataFromMeshCache } from '../../utils';
import { CACHE_KEY__STORE_CONFIG } from '../../constants';
import { retrieveCustomerImpersonationTokenFromCache } from '../rest';

export type getStoreConfigsTypes = Promise<
    MetafieldStoreConfigs &
        Settings & { fallback_product_image_url: string; recaptcha_secret_key: string }
>;

export const getStoreConfigs = async (
    context: GraphQLModules.ModuleContext
): getStoreConfigsTypes => {
    const customerImpersonationToken = await retrieveCustomerImpersonationTokenFromCache(context);

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

    const transformedChannelMetafields = getTransformedChannelMetafieldsToStoreConfig(channel);

    return {
        ...transformedChannelMetafields,
        ...site.settings,
    };
};

export const retrieveStoreConfigsFromCache = async (
    context: GraphQLModules.ModuleContext
): getStoreConfigsTypes => {
    const query = () => getStoreConfigs(context);

    return getDataFromMeshCache(context, CACHE_KEY__STORE_CONFIG, query);
};
