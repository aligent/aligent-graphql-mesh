import {
    CartLineItemInput,
    CartPhysicalItem,
    CartSelectedCheckboxOption,
    CartSelectedDateFieldOption,
    CartSelectedFileUploadOption,
    CartSelectedMultiLineTextFieldOption,
    CartSelectedMultipleChoiceOption,
    CartSelectedMultipleChoiceOptionInput,
    CartSelectedNumberFieldOption,
    CartSelectedTextFieldOption,
} from '@aligent/bigcommerce-operations';

const isMultipleChoiceOption = (
    option:
        | CartSelectedCheckboxOption
        | CartSelectedDateFieldOption
        | CartSelectedFileUploadOption
        | CartSelectedMultiLineTextFieldOption
        | CartSelectedMultipleChoiceOption
        | CartSelectedNumberFieldOption
        | CartSelectedTextFieldOption
): option is CartSelectedMultipleChoiceOption => {
    return option.__typename === 'CartSelectedMultipleChoiceOption';
};

const getSelectedOptions = (
    selectedOptions: Array<CartSelectedMultipleChoiceOption>
): Array<CartSelectedMultipleChoiceOptionInput> => {
    return selectedOptions.map(({ __typename, entityId, valueEntityId }) => {
        return {
            optionEntityId: entityId,
            optionValueEntityId: valueEntityId,
        };
    });
};

export const transformCartItemsToLineItems = (
    cartItems: Array<CartPhysicalItem>
): CartLineItemInput[] => {
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
