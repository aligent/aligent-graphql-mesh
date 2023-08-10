import {
    BC_MultipleChoiceOption,
    BC_ProductOptionConnection,
    BC_SwatchOptionValue,
} from '@mesh/external/BigCommerceGraphqlApi';
import { ConfigurableProductOptions, Maybe } from '@mesh';
import { btoa } from '../../../utils';

export const getTransformedConfigurableOptions = (
    productOptions: BC_ProductOptionConnection
): Array<Maybe<ConfigurableProductOptions>> => {
    if (!productOptions || !productOptions?.edges) return [];

    const options = productOptions.edges
        .map((option) => {
            if (!option?.node) return null;

            const { displayName, displayStyle, entityId, values } =
                option.node as BC_MultipleChoiceOption;

            const attribute_code = displayName.toLowerCase().replace(/ /g, '_');

            if (!values?.edges) return null;

            const optionValues = values.edges
                .map((value) => {
                    if (!value?.node) return null;
                    const { entityId, hexColors, isDefault, label } =
                        value.node as BC_SwatchOptionValue;
                    const swatch_data =
                        hexColors && hexColors.length > 0
                            ? { value: hexColors[0], __typename: 'ColorSwatchData' }
                            : null;
                    return {
                        default_label: label,
                        label: label,
                        store_label: label,
                        use_default_value: isDefault,
                        value_index: entityId,
                        ...(swatch_data && { swatch_data }),
                        __typename: 'ConfigurableProductOptionsValues',
                    };
                })
                .filter(Boolean);

            return {
                attribute_code,
                attribute_id: String(entityId),
                displayStyle,
                id: entityId,
                label: displayName,
                values: optionValues,
                attribute_uid: btoa(String(entityId)),
                uid: btoa(String(entityId)),
            };
        })
        .filter(Boolean);

    return options;
};
