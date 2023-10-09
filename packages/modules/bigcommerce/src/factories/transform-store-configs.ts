import { Maybe, MetafieldEdge } from '@aligent/bigcommerce-operations';
import { StoreConfig } from '@aligent/bigcommerce-resolvers';
import { getAttributesFromMetaAndCustomFields } from '../../../../utils/metafields';
import {
    booleanStoreConfigProperties,
    integerStoreConfigProperties,
    jsonStringStoreConfigProperties,
} from '../resolvers/queries/constants';

/* Mandatory fields, always returned with no value assigned but configs specified via "store_config" metafields
can override */
const MANDATORY_STORE_CONFIGS = {
    contact_enabled: false,
    newsletter_enabled: false,
    pwa_base_url: '',
    returns_enabled: '',
    root_category_uid: 'null',
    locale: 'en-AU',
    category_url_suffix: '',
    grid_per_page: 24,
};

/*
 * Metafields have to be added to BigCommerce manually on channel level.
 * Make sure the namespace is matching the NAMESPACE constant.
 * Use the Rest API or the Metafield Manger (if installed).
 * API endpoint:  https://api.bigcommerce.com/stores/{{store_hash}}/v3/channels/1/metafields
 * Docs: https://developer.bigcommerce.com/docs/rest-management/channels/channel-metafields#create-a-channel-metafield
 */
export function getTransformedChannelMetafieldsToStoreConfig(bcStoreConfig: {
    edges?: Maybe<Array<Maybe<MetafieldEdge>>>;
}): StoreConfig {
    const metafields = bcStoreConfig.edges;

    //The metafields data has this ane extra node attribute and needs to be accessed via node.node
    ///[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]

    const configs = getAttributesFromMetaAndCustomFields(metafields, {
        booleanProperties: booleanStoreConfigProperties,
        integerProperties: integerStoreConfigProperties,
        jsonStringProperties: jsonStringStoreConfigProperties,
    });

    const storeConfigTransformed: StoreConfig = {
        ...MANDATORY_STORE_CONFIGS,
        ...configs,
    };

    return storeConfigTransformed;
}
