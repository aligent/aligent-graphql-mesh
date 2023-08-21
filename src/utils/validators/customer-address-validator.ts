import { CustomerAddressInput } from '@mesh';
import { CustomerAddressUpdateValidated } from '../../bigcommerce/types';

export const isCustomerAddressValid = (input: CustomerAddressInput): boolean => {
    return !!(
        input &&
        input.firstname &&
        input.lastname &&
        input.city &&
        input.country_code &&
        input.street &&
        input.region?.region &&
        input.postcode
    );
};

export const isCustomerAddressUpdatable = (input: CustomerAddressUpdateValidated): boolean => {
    return !!(input.id && isCustomerAddressValid(input));
};
