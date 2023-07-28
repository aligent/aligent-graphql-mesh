import {getStoreConfig } from '../requests/bc-graphql-calls';
import { BcStoreConfigMetafields, GraphQlQuery } from '../../types';
import { StoreConfig, StoreConfigResolvers } from '../../../meshrc/.mesh';



export const storeConfigResolver: StoreConfigResolvers<StoreConfig> = {
    resolve: async () => {
        const storeConfig = await getStoreConfig('pwa_config');

        return await transformStoreConfig(storeConfig);
    },
};

async function transformStoreConfig(bcStoreConfig: BcStoreConfigMetafields): Promise<StoreConfig> {
    const metafields = bcStoreConfig.channel.metafields.edges;

    //TODO map metafield to magento format
    const storeConfigTransformed: StoreConfig = {
        category_url_suffix: 'bla',
        contact_enabled: false, newsletter_enabled: false, pwa_base_url: '', returns_enabled: ''

    }

    return storeConfigTransformed;
}
