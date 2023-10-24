import { CustomerAddressInput } from '@aligent/orocommerce-resolvers';
import { CustomerAddressValidated } from '../types';

export const isCustomerAddressNotValid = (
    input: CustomerAddressInput
): input is CustomerAddressValidated => {
    if (
        input &&
        input.city &&
        input.country_code &&
        input.street &&
        (input.firstname || input.lastname || input.company) &&
        (input.region?.region_id || input.region?.region) &&
        input.postcode
    ) {
        return false;
    }

    return true;
};
