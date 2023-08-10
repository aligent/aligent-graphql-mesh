import {BC_CartSelectedOptionsInput, InputMaybe} from '../../meshrc/.mesh';

export const transformSelectedOptions = (
    selectedOptions: string[]
): InputMaybe<BC_CartSelectedOptionsInput> => {
    return {
        multipleChoices: selectedOptions.map((optionHash) => {
            const decodedOption = atob(optionHash).split('/');
            return {
                optionEntityId: parseInt(decodedOption[1]),
                optionValueEntityId: parseInt(decodedOption[2]),
            };
        }),
    };
};
