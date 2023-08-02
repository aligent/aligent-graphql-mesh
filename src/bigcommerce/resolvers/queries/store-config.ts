import {getChannelMetafields } from '../requests/bc-graphql-calls';
import { BcMetafieldNode, BcStoreConfigMetafields } from '../../types';
import {
    BC_MetafieldConnection, BC_MetafieldEdge,
    BC_Metafields,
    StoreConfig,
    StoreConfigResolvers
} from '../../../meshrc/.mesh';
import { logAndThrowError } from '../error-handling';



export const storeConfigResolver: StoreConfigResolvers<StoreConfig> = {
    resolve: async () => {
        const storeConfig: BC_MetafieldConnection = await getChannelMetafields('pwa_config');

        return await transformChannelMetafieldsToStoreConfig(storeConfig);
    },
};

export async function transformChannelMetafieldsToStoreConfig(bcStoreConfig: BC_MetafieldConnection): Promise<StoreConfig> {
    const metafields = bcStoreConfig?.edges;

    //The metafields data has this extra node, I'm not sure how to handle that correctly, without getting errors
    ///[{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]

    const storeConfigTransformed: StoreConfig = {
        //Mandatory fields, always returned (currently no value assigned)
        contact_enabled: false, newsletter_enabled: false, pwa_base_url: '', returns_enabled: ''
    }
    if(metafields) {
        const categoryUrl: BC_MetafieldEdge | null | undefined = metafields.find(node => {
            return node ? node.node.key === 'category_url_suffix': null;
        });
        const gridPerPage: BC_MetafieldEdge | null | undefined = metafields.find(node => {
            return node ? node.node.key === 'grid_per_page': null;
        });

        storeConfigTransformed.category_url_suffix = categoryUrl?.node?.value;
        storeConfigTransformed.grid_per_page =  parseInt(gridPerPage ? gridPerPage.node?.value: '24'); // default set to 24
    }

    return storeConfigTransformed;
}
