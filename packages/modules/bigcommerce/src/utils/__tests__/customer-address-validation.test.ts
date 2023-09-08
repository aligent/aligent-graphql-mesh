import {
    isCustomerAddressValid,
    isCustomerAddressUpdatable,
} from '../validators/customer-address-validator';
import {
    acCustomerAddress,
    customerAddressMissingRequiredFields,
    customerAddressWithUpdateId,
} from './__data__/customer-address-validation-data';

describe('Customer Address Validation tests', () => {
    test('Missing everything', () => {
        const isValid = isCustomerAddressValid({});
        expect(isValid).toEqual(false);
    });

    test('Valid Address', () => {
        const isValid = isCustomerAddressValid(acCustomerAddress);
        expect(isValid).toEqual(true);
    });

    test('Missing required fields', () => {
        const isValid = isCustomerAddressValid(customerAddressMissingRequiredFields);
        expect(isValid).toEqual(false);
    });
});

describe('Customer Address Update Validation tests', () => {
    test('Invalid Address without Id', () => {
        const validUpdateAddress = isCustomerAddressUpdatable(customerAddressWithUpdateId);
        expect(validUpdateAddress).toEqual(true);
    });

    test('Invalid Address without Id', () => {
        //We want to test with missing id, as that could be the input from client
        //@ts-expect-error: property 'id' is missing in type
        const invalidAddressWithoutId = isCustomerAddressUpdatable(acCustomerAddress);
        expect(invalidAddressWithoutId).toEqual(false);
    });

    test('Missing required fields', () => {
        //We want to test with missing id, as that could be the input from client
        //@ts-expect-error: property 'id' is missing in type
        const isValid = isCustomerAddressUpdatable(customerAddressMissingRequiredFields);
        expect(isValid).toEqual(false);
    });
});
