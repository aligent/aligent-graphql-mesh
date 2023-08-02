import { simpleObject } from '../../../__data__/example-data';
import { transformChannelMetafieldsToStoreConfig } from '../../../../src/bigcommerce/resolvers/queries/store-config';
import { BcStoreConfigMetafields } from '../../../../src/bigcommerce/types';
import { BC_Channel, StoreConfig } from '../../../../src/meshrc/.mesh';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', async () => {

        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(bcStoreConfigDataExpected);

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', async () => {

        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(bcStoreConfigDataExpected);


        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
});

const bcStoreConfigDataExpected: BC_Channel = {
    channel: {
        entityId: 1,
        metafields: {
            edges: [
                {
                    node: {
                        id: "TWV0YWZpZWxkczoxODk=",
                        key: "category_url_suffix",
                        value: ".html"
                    }
                },
                {
                    node: {
                        id: "TWV0YWZpZWxkczoxOTA=",
                        key: "grid_per_page",
                        value: "24"
                    }
                }
            ]
        }
    }
}
