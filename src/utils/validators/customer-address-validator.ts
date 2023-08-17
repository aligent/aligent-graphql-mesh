import { CustomerAddressInput } from '@mesh';
import { BcAddress } from '../../bigcommerce/types';

export const isCustomerAddressValid = (input: CustomerAddressInput | null | undefined): boolean => {
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

/**
 * Checks if the given addressId is in the list of given addresses.
 * Used to validate if the addresses belong to the customer.
 */
export const addressIdBelongsToCustomer = (
    addressId: number,
    addresses: BcAddress[] | undefined
): boolean => {
    if (!addresses) {
        return false;
    }
    const matchingAddress = addresses.find((address) => {
        return address.id === addressId;
    });
    return !!matchingAddress;
};
