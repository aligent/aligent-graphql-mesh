import {
    MultipleChoiceOption,
    ProductOptionConnection,
    SwatchOptionValue,
} from '@aligent/bigcommerce-operations';
import { ConfigurableProductOptions, Maybe } from '@aligent/bigcommerce-resolvers';
import { btoa, isTruthy } from '@aligent/utils';
import { SupportedProductTypes } from '../../types';

export const getTransformedConfigurableOptions = (
    productOptions: ProductOptionConnection,
    productType: SupportedProductTypes
): Array<Maybe<ConfigurableProductOptions>> => {
    if (!productOptions || !productOptions?.edges || productType !== 'ConfigurableProduct')
        return [];

    const options = productOptions.edges
        .map((option) => {
            if (!option?.node) return null;

            const {
                displayName,
                displayStyle,
                entityId: optionId,
                values,
            } = option.node as MultipleChoiceOption;

            const attribute_code = displayName.toLowerCase().replace(/ /g, '_');

            if (!values?.edges) return null;

            const optionValues = values.edges
                .map((value) => {
                    if (!value?.node) return null;
                    const {
                        entityId: optionValueId,
                        hexColors,
                        isDefault,
                        label,
                        imageUrl,
                    } = value.node as SwatchOptionValue;
                    const swatch_data =
                        (hexColors && hexColors.length > 0) || imageUrl
                            ? { value: hexColors[0] || imageUrl, __typename: 'ColorSwatchData' }
                            : null;

                    // This uid gets formed the same way as Adobe Commerce configurable products. We
                    // add "configurable" followed by the option id and option value id
                    const uid = btoa(String(`configurable/${optionId}/${optionValueId}`));

                    return {
                        __typename: 'ConfigurableProductOptionsValues' as const,
                        default_label: label,
                        label: label,
                        store_label: label,
                        use_default_value: isDefault,
                        value_index: optionValueId,
                        uid,
                        ...(swatch_data && { swatch_data }),
                    };
                })
                .filter(isTruthy);

            return {
                attribute_code,
                attribute_id: String(optionId),
                displayStyle,
                id: optionId,
                label: displayName,
                values: optionValues,
                attribute_uid: btoa(String(optionId)),
                uid: btoa(String(optionId)),
            };
        })
        .filter(isTruthy);

    return options;
};
