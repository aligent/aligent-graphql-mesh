// import {
//     MultipleChoiceOption,
//     ProductOptionConnection,
//     SwatchOptionValue,
// } from '@aligent/bigcommerce-operations';
// import { ConfigurableProductOptions } from '@aligent/orocommerce-resolvers';
// import { btoa } from '@aligent/utils';
// import {Product as OroProduct, SupportedProductTypes} from '../../types';
//
// export const getTransformedConfigurableOptions = (
//     oroProductData: OroProduct
// ): Array<ConfigurableProductOptions> => {
//     if (!productOptions || !productOptions?.edges || productType !== 'ConfigurableProduct')
//         return [];
//
//     const variantsResults: ConfigurableVariant[] = oroProductData.included?.map(entity => {
//
//     });
//
//
//     const options = productOptions.edges
//         .map((option) => {
//             if (!option?.node) return null;
//
//             const {
//                 displayName,
//                 displayStyle,
//                 entityId: optionId,
//                 values,
//             } = option.node as MultipleChoiceOption;
//
//             const attribute_code = displayName.toLowerCase().replace(/ /g, '_');
//
//             if (!values?.edges) return null;
//
//             const optionValues = values.edges
//                 .map((value) => {
//                     if (!value?.node) return null;
//                     const {
//                         entityId: optionValueId,
//                         hexColors,
//                         isDefault,
//                         label,
//                     } = value.node as SwatchOptionValue;
//                     const swatch_data =
//                         hexColors && hexColors.length > 0
//                             ? { value: hexColors[0], __typename: 'ColorSwatchData' }
//                             : null;
//
//                     // This uid gets formed the same way as Adobe Commerce configurable products. We
//                     // add "configurable" followed by the option id and option value id
//                     const uid = btoa(String(`configurable/${optionId}/${optionValueId}`));
//
//                     return {
//                         __typename: 'ConfigurableProductOptionsValues' as const,
//                         default_label: label,
//                         label: label,
//                         store_label: label,
//                         use_default_value: isDefault,
//                         value_index: optionValueId,
//                         uid,
//                         ...(swatch_data && { swatch_data }),
//                     };
//                 })
//                 .filter(Boolean);
//
//             return {
//                 attribute_code,
//                 attribute_id: String(optionId),
//                 displayStyle,
//                 id: optionId,
//                 label: displayName,
//                 values: optionValues,
//                 attribute_uid: btoa(String(optionId)),
//                 uid: btoa(String(optionId)),
//             };
//         })
//         .filter(Boolean);
//
//     return options;
// };
