import { bcAddress, bcAddressUpdated, customerAddress } from './__data__/customer-address-data';
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

    test('Transform BCAddress into CustomerAddress', () => {
        const transformed = transformBcAddress(bcAddress);
        expect(transformed).toEqual(customerAddress);
    });
});
