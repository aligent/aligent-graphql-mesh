import { getTransformedCustomerAddresses } from '../factories/helpers/transform-customer-addresses';
import { BcAddressRest } from '../types';

export const checkIfAddressbookHasDefaultAddress = (bcAddresses: BcAddressRest[]) => {
    const addresses = getTransformedCustomerAddresses(bcAddresses);
    let hasDefaultShipping = false;
    let hasDefaultBilling = false;

    addresses.forEach((address) => {
        if (address.default_shipping) {
            hasDefaultShipping = true;
        }

        if (address.default_billing) {
            hasDefaultBilling = true;
        }
    });

    return {
        hasDefaultShipping,
        hasDefaultBilling,
    };
};
