import { CustomerAddressInput } from '@mesh';

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
