import {getChannelMetafields } from '../requests/bc-graphql-calls';
import { BcMetafieldNode, BcStoreConfigMetafields } from '../../types';
import { BC_MetafieldConnection, StoreConfig, StoreConfigResolvers } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../error-handling';



export const storeConfigResolver: StoreConfigResolvers<StoreConfig> = {
    resolve: async () => {
        const storeConfig: BC_MetafieldConnection = await getChannelMetafields('pwa_config');

        return await transformChannelMetafieldsToStoreConfig(storeConfig);
    },
};

export async function transformChannelMetafieldsToStoreConfig(bcStoreConfig: BC_MetafieldConnection): Promise<StoreConfig> {
    const metafields = bcStoreConfig?.edges;

    console.log('My metafields:');
    console.log(JSON.stringify(metafields));

    const categoryUrl: BcMetafieldNode | undefined = metafields.find(myNode => {
        return node.key === 'category_url_suffix';
    });
    const gridPerPage: BcMetafieldNode | undefined = metafields.find(node => {
        return node.key === 'grid_per_page';
    });

    const storeConfigTransformed: StoreConfig = {
        category_url_suffix: categoryUrl?.value,
        grid_per_page: parseInt(gridPerPage ? gridPerPage.value: ''),
        //Mandatory fields, always returned (currently no value assigned)
        contact_enabled: false, newsletter_enabled: false, pwa_base_url: '', returns_enabled: ''
    };

    return storeConfigTransformed;
}
