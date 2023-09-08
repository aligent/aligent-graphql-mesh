import { MetafieldEdge, MetafieldConnection } from '@aligent/bigcommerce-operations';
import { StoreConfig } from '@aligent/bigcommerce-resolvers';
import {
    findMetafieldValueByKey,
    getConfigsFromMetafields,
    transformChannelMetafieldsToStoreConfig,
} from '../store-config';

describe('Transform StoreConfig tests', () => {
    test('Mandatory StoreConfig exits', async () => {
        const transformedConfig: StoreConfig =
            await transformChannelMetafieldsToStoreConfig(bcStoreConfigData);

        expect(transformedConfig.contact_enabled).toEqual(false);
        expect(transformedConfig.newsletter_enabled).toEqual(false);
        expect(transformedConfig.pwa_base_url).toEqual('');
        expect(transformedConfig.returns_enabled).toEqual('');
    });
    test('Specified StoreConfig exits', async () => {
        const transformedConfig: StoreConfig =
            await transformChannelMetafieldsToStoreConfig(bcStoreConfigData);

        expect(transformedConfig.category_url_suffix).toEqual('.html');
        expect(transformedConfig.grid_per_page).toEqual(24);
    });
    test('Bad metafield data given', async () => {
        const transformedConfig: StoreConfig =
            await transformChannelMetafieldsToStoreConfig(bcStoreConfigBadData);

        expect(transformedConfig.category_url_suffix).toEqual('');
    });
    test('Find metafield value with invalid data', async () => {
        const data: MetafieldEdge[] = [
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

    test('Parses a boolean string to a boolean value', async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: 'false',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = { newsletter_enabled: false };

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test('Parses a number string to a boolean value', async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: '1',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = { newsletter_enabled: true };

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test('Parses a JSON string value to an object value', async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'send_friend',
                    value: '{"enabled_for_customers": true, "enabled_for_guests": false}',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = {
            send_friend: { enabled_for_customers: true, enabled_for_guests: false },
        };

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test('Parses a bad JSON string value to a null value', async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: '1',
                },
            },
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'send_friend',
                    value: '{enabled_for_customers: true, enabled_for_guests: false}',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = {
            newsletter_enabled: true,
            send_friend: null,
        };

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test(`Returns {} if there's no metafields`, async () => {
        const data = undefined;
        getConfigsFromMetafields(data);

        const expectedResult = {};

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test(`Returns {} if there's no key`, async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: '',
                    value: '',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = {};

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
    });

    test(`Returns a null value if there's no property value`, async () => {
        const data: MetafieldEdge[] = [
            {
                // @ts-expect-error: Type expects `entityId`
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'grid_per_page',
                    value: '',
                },
            },
        ];
        getConfigsFromMetafields(data);

        const expectedResult = {};

        expect(getConfigsFromMetafields(data)).toEqual(expectedResult);
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
