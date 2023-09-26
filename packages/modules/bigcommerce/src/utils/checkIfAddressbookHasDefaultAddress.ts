import { getTransformedCustomerAddresses } from '../factories/helpers/transform-customer-addresses';
import { BcAddressRest } from '../types';

export const checkIfAddressbookHasDefaultAddress = (bcAddresses: BcAddressRest[]) => {
    const addresses = getTransformedCustomerAddresses(bcAddresses);
    let hasDefaultShipping = false;
    let hasDefaultBilling = false;

    addresses.forEach((address) => {
        hasDefaultShipping = !!address.default_shipping;
        hasDefaultBilling = !!address.default_billing;
    });

    return {
        hasDefaultShipping,
        hasDefaultBilling,
    };
};
