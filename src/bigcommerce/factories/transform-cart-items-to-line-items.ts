import {
    BC_CartLineItemInput,
    BC_CartPhysicalItem,
    BC_CartSelectedCheckboxOption,
    BC_CartSelectedDateFieldOption,
    BC_CartSelectedFileUploadOption,
    BC_CartSelectedMultiLineTextFieldOption,
    BC_CartSelectedMultipleChoiceOption,
    BC_CartSelectedMultipleChoiceOptionInput,
    BC_CartSelectedNumberFieldOption,
    BC_CartSelectedTextFieldOption,
} from '@mesh/external/BigCommerceGraphqlApi';

// TODO: Throw an error for unsupported Types
const isMultipleChoiceOption = (
    option:
        | BC_CartSelectedCheckboxOption
        | BC_CartSelectedDateFieldOption
        | BC_CartSelectedFileUploadOption
        | BC_CartSelectedMultiLineTextFieldOption
        | BC_CartSelectedMultipleChoiceOption
        | BC_CartSelectedNumberFieldOption
        | BC_CartSelectedTextFieldOption
): option is BC_CartSelectedMultipleChoiceOption => {
    return option.__typename === 'CartSelectedMultipleChoiceOption';
};

const getSelectedOptions = (
    selectedOptions: Array<BC_CartSelectedMultipleChoiceOption>
): Array<BC_CartSelectedMultipleChoiceOptionInput> => {
    return selectedOptions.map(({ __typename, entityId, valueEntityId }) => {
        return {
            optionEntityId: entityId,
            optionValueEntityId: valueEntityId,
        };
    });
};

export const transformCartItemsToLineItems = (cartItems: Array<BC_CartPhysicalItem>): BC_CartLineItemInput[] => {
    return cartItems.map(({ quantity, productEntityId, selectedOptions }) => {
        const multipleChoiceOptions = selectedOptions.filter(isMultipleChoiceOption);
        return {
            quantity,
            productEntityId,
            // TODO: At the moment we only supports multiple choice options but in future consider other types too
            ...(multipleChoiceOptions.length && {
                selectedOptions: { multipleChoices: getSelectedOptions(multipleChoiceOptions) },
            }),
        };
    });
};
