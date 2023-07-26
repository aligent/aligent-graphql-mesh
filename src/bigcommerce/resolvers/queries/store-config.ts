import {getStoreConfig } from '../requests/bc-graphql-calls';
import { BcStoreConfigMetafields, GraphQlQuery } from '../../types';



export const storeConfigResolver = {
    resolve: async () => {
        const storeConfig = await getStoreConfig('pwa_config');

        return await transformStoreConfig(storeConfig);
    },
};

async function transformStoreConfig(storeConfig: BcStoreConfigMetafields) {
    const metafields = storeConfig.channel.metafields.edges;

    //TODO map metafield to magento format
}
