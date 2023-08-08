import {
    BC_MetafieldConnection,
    BC_MetafieldEdge,
    Maybe,
    QueryResolvers,
    StoreConfig,
} from '../../../meshrc/.mesh';
import { getChannelMetafields } from '../../apis/graphql/channel';

const NAMESPACE: string = 'pwa_config';

/* istanbul ignore next */
export const storeConfigResolver: QueryResolvers['storeConfig'] = {
    resolve: async () => {
        //The namespace needs to match the metafield namespace when created in BigCommerce
        const bcChannelMetafieldsConfig: BC_MetafieldConnection = await getChannelMetafields(
            NAMESPACE
        );

        const storeConfig = await transformChannelMetafieldsToStoreConfig(
            bcChannelMetafieldsConfig
        );
        return storeConfig;
    },
};

/*
 * Metafields have to be added to BigCommerce manually on channel level.
 * Make sure the namespace is matching the NAMESPACE constant.
 * Use the Rest API or the Metafield Manger (if installed).
 * API endpoint:  https://api.bigcommerce.com/stores/{{store_hash}}/v3/channels/1/metafields
 * Docs: https://developer.bigcommerce.com/docs/rest-management/channels/channel-metafields#create-a-channel-metafield
 */
export async function transformChannelMetafieldsToStoreConfig(
    bcStoreConfig: BC_MetafieldConnection
): Promise<StoreConfig> {
    const metafields = bcStoreConfig.edges;

    //The metafields data has this ane extra node attribute and needs to be accessed via node.node
    ///[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]

    const storeConfigTransformed: StoreConfig = {
        //Mandatory fields, always returned (currently no value assigned)
        contact_enabled: false,
        newsletter_enabled: false,
        pwa_base_url: '',
        returns_enabled: '',
    };

    if (metafields) {
        const categoryUrl: string = findMetafieldValueByKey(metafields, 'category_url_suffix');
        const gridPerPage: string = findMetafieldValueByKey(metafields, 'grid_per_page');
        const locale: string = findMetafieldValueByKey(metafields, 'locale');
        const root_category_uid: string = findMetafieldValueByKey(metafields, 'root_category_uid');
        //Add more metafields as required here. Metafields need to be added to bigcommerce manually first.

        storeConfigTransformed.category_url_suffix = categoryUrl;
        storeConfigTransformed.grid_per_page = parseInt(gridPerPage !== '' ? gridPerPage : '24'); // default set to 24
        storeConfigTransformed.locale = locale || null;
        storeConfigTransformed.root_category_uid = root_category_uid || null;
    }

    return storeConfigTransformed;
}

export function findMetafieldValueByKey(
    metafields: Maybe<BC_MetafieldEdge>[],
    metafieldKey: string
): string {
    const metafieldValue = metafields.find(node => {
        return node?.node.key === metafieldKey;
    });
    return metafieldValue ? metafieldValue.node?.value : '';
}
