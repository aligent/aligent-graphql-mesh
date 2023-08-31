import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../../factories/transform-customer-address-data';
import {
    bcAddress,
    bcState,
    acCustomerAddress,
} from '../../../factories/__tests__/__data__/customer-address-tranformation-data';

describe('Customer Address Transformation tests', () => {
    test('Transform CustomerAddress into BCAddress', () => {
        const transformedBcAddress = transformCustomerAddress(acCustomerAddress, bcState, 123);
        expect(transformedBcAddress).toEqual(bcAddress);
    });

    test('Transform BCAddress into CustomerAddress', () => {
        const transformedAcAddress = transformBcAddress(bcAddress);
        expect(transformedAcAddress).toEqual(acCustomerAddress);
    });
});
