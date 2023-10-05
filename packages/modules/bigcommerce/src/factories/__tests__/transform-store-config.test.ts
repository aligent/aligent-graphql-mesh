import { MetafieldConnection } from '@aligent/bigcommerce-operations';
import { StoreConfig } from '@aligent/bigcommerce-resolvers';
import { getTransformedChannelMetafieldsToStoreConfig } from '../transform-store-configs';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(bcStoreConfigData);

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(bcStoreConfigData);

        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
    test('Bad metafield data given', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(bcStoreConfigBadData);

        expect(transformedConfig.category_url_suffix).toEqual('');
    });
});

const bcStoreConfigData: MetafieldConnection = {
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

const bcStoreConfigBadData: MetafieldConnection = {
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
