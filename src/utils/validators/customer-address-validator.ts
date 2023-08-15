import { CustomerAddressInput, MutationupdateCustomerAddressArgs } from '@mesh';

//FIXME: use this function in create-customer-address.ts
export const isCustomerAddressValid = (input: CustomerAddressInput): boolean => {
    return !!(
        input.firstname &&
        input.lastname &&
        input.city &&
        input.country_code &&
        input.street &&
        input.region?.region &&
        input.postcode
    );
};

export const isUpdateCustomerAddressValid = (
    inputArgs: MutationupdateCustomerAddressArgs
): boolean => {
    const customerAddressInput = inputArgs?.input;
    if (!customerAddressInput) {
        return false;
    }
    return !!(inputArgs.id && isCustomerAddressValid(customerAddressInput));
};
