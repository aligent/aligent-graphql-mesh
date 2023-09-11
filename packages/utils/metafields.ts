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
 * @param metafields
 * @param {Object} propertyTypes - An object containing arrays of string properties corresponding to a property type.
 * @property {Array<string>} propertyTypes.booleanProperties - An array of strings for boolean properties.
 * @property {Array<string>} propertyTypes.integerProperties - An array of strings for integer properties.
 * @property {Array<string>} propertyTypes.jsonStringProperties - An array of strings for JSON string properties.
 */
export const getConfigsFromMetafields = (
    metafields?: Maybe<Array<Maybe<MetafieldEdge>>>,
    propertyTypes?: {
        booleanProperties: Array<string>;
        integerProperties: Array<string>;
        jsonStringProperties: Array<string>;
    }
): { [key: string]: boolean | number | string } => {
    if (!metafields) return {};

    const { booleanProperties, integerProperties, jsonStringProperties } = propertyTypes || {
        booleanProperties: [],
        integerProperties: [],
        jsonStringProperties: [],
    };

    return metafields.reduce((carry, metafield) => {
        if (!metafield?.node.key) return carry;
        const { key } = metafield.node;

        let value: any = metafield.node.value;

        if (!value) return carry;

        if (booleanProperties.includes(key)) {
            if (isNaN(value)) {
                value = !(value === 'false');
            } else {
                value = !!Number(value);
            }
        }

        if (integerProperties.includes(key)) {
            value = Number(value);
        }

        if (jsonStringProperties.includes(key)) {
            try {
                value = JSON.parse(value);
            } catch {
                value = null;
            }
        }

        return { ...carry, [key]: value };
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
