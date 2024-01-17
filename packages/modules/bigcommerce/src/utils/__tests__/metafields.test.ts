import { MetafieldEdge, Maybe } from '@aligent/bigcommerce-operations';
import { findMetafieldValueByKey, getAttributesFromMetaAndCustomFields } from '../metafields';
import {
    booleanStoreConfigProperties,
    integerStoreConfigProperties,
    jsonStringStoreConfigProperties,
} from '../../modules/bigcommerce/src/resolvers/queries/constants';

const propertyTypes = {
    booleanProperties: booleanStoreConfigProperties,
    integerProperties: integerStoreConfigProperties,
    jsonStringProperties: jsonStringStoreConfigProperties,
    htmlStringProperties: ['short_description'],
};

describe('findMetafieldValueByKey', () => {
    test('Find metafield value with invalid data', async () => {
        const data = [
            {
                node: {
                    id: '',
                    key: '',
                    value: '',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;
        const value: string = findMetafieldValueByKey(data, 'some');

        expect(value).toEqual('');
    });
});

describe('getAttributesFromMetaAndCustomFields', () => {
    test('Parses a boolean string to a boolean value', async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: 'false',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = { newsletter_enabled: false };

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test('Parses a number string to a boolean value', async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: '1',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = { newsletter_enabled: true };

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test('Parses a JSON string value to an object value', async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'send_friend',
                    value: '{"enabled_for_customers": true, "enabled_for_guests": false}',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = {
            send_friend: { enabled_for_customers: true, enabled_for_guests: false },
        };

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test('Parses a bad JSON string value to a null value', async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'newsletter_enabled',
                    value: '1',
                },
            },
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'send_friend',
                    value: '{enabled_for_customers: true, enabled_for_guests: false}',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = {
            newsletter_enabled: true,
            send_friend: null,
        };

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test(`Returns {} if there's no metafields`, async () => {
        const data = null;

        const expectedResult = {};

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test(`Returns {} if there's no key`, async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: '',
                    value: '',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = {};

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test(`Returns a null value if there's no property value`, async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'grid_per_page',
                    value: '',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = {};

        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });

    test(`Returns a html string property`, async () => {
        const data = [
            {
                node: {
                    id: 'TWV0YWZpZWxkczoxODk=',
                    key: 'short_description',
                    value: '<div>hello</div>',
                },
            },
        ] as Array<Maybe<MetafieldEdge>>;

        const expectedResult = {
            short_description: {
                html: '<div>hello</div>',
            },
        };
        expect(getAttributesFromMetaAndCustomFields(data, propertyTypes)).toEqual(expectedResult);
    });
});
