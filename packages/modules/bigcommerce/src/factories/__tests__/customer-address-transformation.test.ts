import {
    bcAddress,
    bcAddressUpdated,
    bcAddressUpdatedShippingBillingFalse,
    bcState,
    acCustomerAddress,
    customerAddressBillingFalse,
    customerAddressBillingShippingFalse,
} from './__data__/customer-address-tranformation-data';
import { transformBcAddress, transformCustomerAddress } from '../transform-customer-address-data';

describe('Customer Address Transformation tests', () => {
    test('Transform CustomerAddress create into BCAddress', () => {
        const transformed = transformCustomerAddress(acCustomerAddress, bcState, 123);
        expect(transformed).toEqual(bcAddress);
    });

    test('Transform CustomerAddress create into BCAddress', () => {
        const transformed = transformCustomerAddress(acCustomerAddress, bcState, 123, 5);
        expect(transformed).toEqual(bcAddressUpdated);
    });

    test('Transform CustomerAddress create into BCAddress with shipping and billing false', () => {
        const transformedAddress = transformCustomerAddress(
            customerAddressBillingShippingFalse,
            bcState,
            123,
            5
        );
        expect(transformedAddress).toEqual(bcAddressUpdatedShippingBillingFalse);
    });

    test('Transform BCAddress into CustomerAddress', () => {
        const transformedAcAddress = transformBcAddress(bcAddress);
        expect(transformedAcAddress).toEqual(acCustomerAddress);
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
