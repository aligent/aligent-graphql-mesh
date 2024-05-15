import { StoreConfig } from '@aligent/bigcommerce-resolvers';
import { getTransformedChannelMetafieldsToStoreConfig } from '../transform-store-configs';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(channelMetafields);

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(channelMetafields);

        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
    test('Bad metafield data given', () => {
        const transformedConfig: StoreConfig =
            getTransformedChannelMetafieldsToStoreConfig(channelMetafieldsBadData);

        expect(transformedConfig.category_url_suffix).toEqual('');
    });
});

const channelMetafields = {
    pwaMetafields: {
        edges: [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'category_url_suffix',
                    name: 'category_url_suffix',
                    value: '.html',
                },
            },
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxOTA=',
                    key: 'grid_per_page',
                    name: 'grid_per_page',
                    value: '24',
                },
            },
        ],
    },
    storeConfigMetafields: { edges: undefined },
};

const channelMetafieldsBadData = {
    pwaMetafields: {
        edges: [
            {
                node: {
                    id: '',
                    key: '',
                    name: '',
                    value: '',
                },
            },
            {
                node: {
                    id: '',
                    key: '',
                    name: '',
                    value: '',
                },
            },
        ],
    },
    storeConfigMetafields: { edges: undefined },
};
