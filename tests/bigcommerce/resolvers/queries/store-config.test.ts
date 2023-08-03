import { transformChannelMetafieldsToStoreConfig } from '../../../../src/bigcommerce/resolvers/queries/store-config';
import { BC_MetafieldConnection, StoreConfig } from '../../../../src/meshrc/.mesh';

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
    test('No custom metafield specified', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(null);

        expect(transformedConfig.category_url_suffix).toBeUndefined();
    });
});

const bcStoreConfigDataExpected: BC_MetafieldConnection = {
            edges: [
                {
                    // @ts-expect-error: Type expects `entityId`
                    node: {
                        id: "TWV0YWZpZWxkczoxODk=",
                        key: "category_url_suffix",
                        value: ".html",
                    }
                },
                {
                    // @ts-expect-error: Type expects `entityId`
                    node: {
                        id: "TWV0YWZpZWxkczoxOTA=",
                        key: "grid_per_page",
                        value: "24"
                    }
                }
            ]
}
