import {
    findMetafieldValueByKey,
    transformChannelMetafieldsToStoreConfig
} from '../../../../src/bigcommerce/resolvers/queries/store-config';
import {
    BC_MetafieldConnection,
    BC_MetafieldEdge,
    Maybe,
    StoreConfig
} from '../../../../src/meshrc/.mesh';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', async () => {

        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(bcStoreConfigData);

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', async () => {

        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(bcStoreConfigData);


        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
    test('No metafield data given', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(null);

        expect(transformedConfig.category_url_suffix).toBeUndefined();
    });
    test('Bad metafield data given', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(bcStoreConfigBadData);

        expect(transformedConfig.category_url_suffix).toEqual('');
    });
    test('Find metafield value with invalid data', async () => {
        const data : BC_MetafieldEdge[] = [{
            node: {
                id: '',
                key: '',
                value: ''
            }
        }];
        const value: string = findMetafieldValueByKey(data ,'some');

        expect(value).toEqual('');
    });

});

const bcStoreConfigData: BC_MetafieldConnection = {
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

const bcStoreConfigBadData: BC_MetafieldConnection = {
    edges: [
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: "",
                key: "",
                value: "",
            }
        },
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: "",
                key: "",
                value: ""
            }
        }
    ]
}
