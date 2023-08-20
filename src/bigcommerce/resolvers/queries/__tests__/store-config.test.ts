import { BC_MetafieldEdge, BC_MetafieldConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { StoreConfig } from '../../../../meshrc/.mesh';
import { findMetafieldValueByKey, transformChannelMetafieldsToStoreConfig } from '../store-config';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(
            bcStoreConfigData
        );

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(
            bcStoreConfigData
        );

        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
    test('Bad metafield data given', async () => {
        const transformedConfig: StoreConfig = await transformChannelMetafieldsToStoreConfig(
            bcStoreConfigBadData
        );

        expect(transformedConfig.category_url_suffix).toEqual('');
    });
    test('Find metafield value with invalid data', async () => {
        const data: BC_MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: '',
                    key: '',
                    value: '',
                },
            },
        ];
        const value: string = findMetafieldValueByKey(data, 'some');

        expect(value).toEqual('');
    });
});

const bcStoreConfigData: BC_MetafieldConnection = {
    edges: [
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: 'TWV0YWZpZWxkczoxODk=',
                key: 'category_url_suffix',
                value: '.html',
            },
        },
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: 'TWV0YWZpZWxkczoxOTA=',
                key: 'grid_per_page',
                value: '24',
            },
        },
    ],
};

const bcStoreConfigBadData: BC_MetafieldConnection = {
    edges: [
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: '',
                key: '',
                value: '',
            },
        },
        {
            // @ts-expect-error: Type expects `entityId`
            node: {
                id: '',
                key: '',
                value: '',
            },
        },
    ],
};
