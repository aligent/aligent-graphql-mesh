import { ConfigurableAttributeOption } from '@aligent/orocommerce-resolvers';
import { btoa } from '@aligent/utils';
import { Product as OroProduct } from '../../types';

export const getTransformedProductsAttributes = (
    oroProductData: OroProduct
): Array<ConfigurableAttributeOption> => {
    const productAttributesWithValues = oroProductData.attributes.productAttributes;
    const productAttributes = Object.keys(productAttributesWithValues);

    const attributes: ConfigurableAttributeOption[] = <Array<ConfigurableAttributeOption>>(
        productAttributes
            .map((attribute) => {
                const attributeValue = productAttributesWithValues[attribute];
                if (!attributeValue) return null;
                //TODO: figure out when attribute can be an array and handle it
                if (Array.isArray(attributeValue)) return null;
                return {
                    code: attribute,
                    label: attributeValue.targetValue,
                    value_index: attributeValue.id,
                    uid: btoa(String(attributeValue.id)),
                };
            })
            .filter(Boolean)
    );

    return attributes;
};
