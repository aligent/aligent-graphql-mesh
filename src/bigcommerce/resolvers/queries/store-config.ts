import {getStoreConfig } from '../requests/bc-graphql-calls';
import { BcStoreConfigMetafields } from '../../types';
import { StoreConfig, StoreConfigResolvers } from '../../../meshrc/.mesh';



export const storeConfigResolver: StoreConfigResolvers<StoreConfig> = {
    resolve: async () => {
        const storeConfig = await getStoreConfig('pwa_config');

        return await transformStoreConfig(storeConfig);
    },
};

export async function transformStoreConfig(bcStoreConfig: BcStoreConfigMetafields): Promise<StoreConfig> {
    const metafields = bcStoreConfig.channel.metafields.edges;

    const storeConfigTransformed: StoreConfig = {
        category_url_suffix: metafields.filter(node => {
            return node.key === 'category_url_suffix' ? node.value: ''
        }),
        grid_per_page: metafields.filter(node => {
            return node.key === 'grid_per_page' ? node.value: ''
        }),
        //Mandatory fields, always returned (currently no value assigned)
        contact_enabled: false, newsletter_enabled: false, pwa_base_url: '', returns_enabled: ''
    };

    return storeConfigTransformed;
}
