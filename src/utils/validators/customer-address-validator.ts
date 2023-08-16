import { CustomerAddressInput } from '@mesh';
import { BcAddress } from '../../bigcommerce/types';

//FIXME: use this function in create-customer-address.ts
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

export const addressBelongsToCustomer = (addressId: number, addresses: [BcAddress]): boolean => {
    const matchingAddress = addresses.find((address) => {
        return address.id === addressId;
    });
    return !!matchingAddress;
};
