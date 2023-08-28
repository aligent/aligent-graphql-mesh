import { InputMaybe } from '@aligent/bigcommerce-resolvers';
import { CartSelectedOptionsInput } from '@aligent/bigcommerce-operations';
import { isNotNull } from '@aligent/utils';

export const transformSelectedOptions = (
    selectedOptions: InputMaybe<string>[]
): InputMaybe<CartSelectedOptionsInput> => {
    return {
        multipleChoices: selectedOptions.filter(isNotNull).map((optionHash) => {
            const decodedOption = atob(optionHash).split('/');
            return {
                optionEntityId: parseInt(decodedOption[1]),
                optionValueEntityId: parseInt(decodedOption[2]),
            };
        }),
    };
};
