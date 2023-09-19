import { CustomerAddressInput } from '@aligent/bigcommerce-resolvers';
import { CustomerAddressUpdateValidated, CustomerAddressValidated } from '../../types';

export const isCustomerAddressValid = (
    input: CustomerAddressInput
): input is CustomerAddressValidated => {
    return !!(
        input &&
        input.firstname &&
        input.lastname &&
        input.city &&
        input.country_code &&
        input.street &&
        (input.region?.region_id || input.region?.region) &&
        input.postcode
    );
};

export const isCustomerAddressUpdatable = (input: CustomerAddressUpdateValidated): boolean => {
    return !!(input.id && isCustomerAddressValid(input));
};
