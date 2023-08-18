import {
    bcAddress,
    bcAddressUpdated,
    bcAddressUpdatedShippingBillingFalse,
    customerAddress,
    customerAddressBillingFalse,
} from './__data__/customer-address-tranformation-data';
import { transformBcAddress, transformCustomerAddress } from '../transform-customer-address-data';

describe('Customer Address Transformation tests', () => {
    test('Transform CustomerAddress create into BCAddress', () => {
        const transformed = transformCustomerAddress(customerAddress, 123);
        expect(transformed).toEqual(bcAddress);
    });

    test('Transform CustomerAddress create into BCAddress', () => {
        const transformed = transformCustomerAddress(customerAddress, 123, 5);
        expect(transformed).toEqual(bcAddressUpdated);
    });

    test('Transform CustomerAddress create into BCAddress with shipping and billing false', () => {
        const address = customerAddress;
        address.default_billing = false;
        address.default_shipping = false;

        const transformedAddress = transformCustomerAddress(address, 123, 5);
        expect(transformedAddress).toEqual(bcAddressUpdatedShippingBillingFalse);
    });

    test('Transform BCAddress into CustomerAddress', () => {
        const transformed = transformBcAddress(bcAddress);
        expect(transformed).toEqual(customerAddress);
    });

    test('Transform BCAddress into CustomerAddress with Default Billing false', () => {
        const addressBillingFalse = bcAddress;
        addressBillingFalse.form_fields = [
            {
                name: 'Default Billing',
                value: [],
            },
            {
                name: 'Default Shipping',
                value: ['Yes'],
            },
        ];
        const transformed = transformBcAddress(addressBillingFalse);

        expect(transformed).toEqual(customerAddressBillingFalse);
    });
});
