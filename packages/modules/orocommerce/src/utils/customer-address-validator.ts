import { CustomerAddressInput } from '@aligent/orocommerce-resolvers';
import { CustomerAddressValidated } from '../types';

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
