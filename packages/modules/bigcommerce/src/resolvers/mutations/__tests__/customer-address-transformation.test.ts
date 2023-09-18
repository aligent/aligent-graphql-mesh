import {
    transformCustomerAddress,
    transformBcAddress,
} from '../../../factories/transform-customer-address-data';
import {
    bcAddress,
    bcState,
    acCustomerAddressInput,
    acCustomerAddressOutput,
} from '../../../factories/__tests__/__data__/customer-address-tranformation-data';

describe('Customer Address Transformation tests', () => {
    test('Transform CustomerAddress into BCAddress', () => {
        const transformedBcAddress = transformCustomerAddress(acCustomerAddressInput, bcState, 123);
        expect(transformedBcAddress).toEqual(bcAddress);
    });

    test('Transform BCAddress into CustomerAddress', () => {
        const regionId = bcState.id;
        const transformedAcAddress = transformBcAddress(bcAddress, regionId);
        expect(transformedAcAddress).toEqual(acCustomerAddressOutput);
    });
});
