import { bcAddress, customerAddress } from './__data__/customer-address-data';
import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../../factories/transform-customer-address-data';

describe('Customer Address Transformation tests', () => {
    test('Transform CustomerAddress into BCAddress', () => {
        const transformed = transformCustomerAddress(customerAddress, 123);
        expect(transformed).toEqual(bcAddress);
    });

    test('Transform BCAddress into CustomerAddress', () => {
        const transformed = transformBcAddress(bcAddress);
        expect(transformed).toEqual(customerAddress);
    });
});