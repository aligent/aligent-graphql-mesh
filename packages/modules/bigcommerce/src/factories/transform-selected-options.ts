import { InputMaybe } from '@mesh';
import { BC_CartSelectedOptionsInput } from '@mesh/external/BigCommerceGraphqlApi';
import { isNotNull } from '../../utils/is-not-null';

export const transformSelectedOptions = (
    selectedOptions: InputMaybe<string>[]
): InputMaybe<BC_CartSelectedOptionsInput> => {
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
