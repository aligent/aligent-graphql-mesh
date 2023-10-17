import { Maybe, MetafieldEdge } from '@aligent/bigcommerce-operations';

/**
 * de-nests channel metafields into key/value pairs and parses the value to be its intended type
 *
 * e.g. [{"node":{"id":"TWV0YWZpZWxkczoxODk=","key":"category_url_suffix","value":".html"}},{"node":{"id":"TWV0YWZpZWxkczoxOTA=","key":"grid_per_page","value":"24"}}]
 * =
 * {
 *  category_url_suffix: ".html",
 *  grid_per_page: "24"
 * }
 *
 * @param fields
 * @param {Object} propertyTypes - An object containing arrays of string properties corresponding to a property type.
 * @property {Array<string>} propertyTypes.booleanProperties - An array of strings for boolean properties.
 * @property {Array<string>} propertyTypes.integerProperties - An array of strings for integer properties.
 * @property {Array<string>} propertyTypes.jsonStringProperties - An array of strings for JSON string properties.
 * @property {Array<string>} propertyTypes.htmlStringProperties - An array of strings for HTML string properties
 */
export const getAttributesFromMetaAndCustomFields = (
    fields?: Maybe<Array<Maybe<{ node: { key?: string; name?: string; value?: string } }>>>,
    propertyTypes: {
        booleanProperties?: Array<string>;
        integerProperties?: Array<string>;
        jsonStringProperties?: Array<string>;
        htmlStringProperties?: Array<string>;
    } = {}
): { [key: string]: boolean | number | string } => {
    if (!fields) return {};

    const {
        booleanProperties = [],
        integerProperties = [],
        jsonStringProperties = [],
        htmlStringProperties = [],
    } = propertyTypes;

    return fields.reduce((carry, field) => {
        /*"metafields" uses "key" and "customFields" uses "name" for the main property name*/
        const propertyName = field?.node?.key || field?.node?.name;

        if (!propertyName) return carry;

        /* By default the "value" will be a string, so if we don't predefine the property type
         * the value will be returned as a one */
        let value: unknown = field.node.value;

        if (!value) return carry;

        /* If we know the property value should be a boolean, cast the value as a one */
        if (booleanProperties.includes(propertyName)) {
            if (Number.isNaN(value)) {
                value = !(value === 'false');
            } else {
                value = !!Number(value);
            }
        }

        /* If we know the property value should be an integer, cast the value to an integer*/
        if (integerProperties.includes(propertyName)) {
            value = Number(value);
        }

        /* If we know a value should be a json object, parse the property value string to an object*/
        if (jsonStringProperties.includes(propertyName)) {
            try {
                if (typeof value === 'string') {
                    value = JSON.parse(value);
                }
            } catch {
                value = null;
            }
        }

        if (htmlStringProperties.includes(propertyName)) {
            value = {
                html: value,
            };
        }

        return { ...carry, [propertyName]: value };
    }, {});
};

export function findMetafieldValueByKey(
    metafields: Maybe<MetafieldEdge>[],
    metafieldKey: string
): string {
    const metafieldValue = metafields.find((node) => {
        return node?.node.key === metafieldKey;
    });
    return metafieldValue ? metafieldValue.node?.value : '';
}
