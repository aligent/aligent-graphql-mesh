import {
    addressIdBelongsToCustomer,
    isCustomerAddressValid,
} from '../validators/customer-address-validator';
import {
    bcCustomerAddressesWithIds,
    customerAddress,
    customerAddressMissingRequiredFields,
} from './__data__/customer-address-validation-data';

describe('Customer Address Validation tests', () => {
    test('Missing everything', () => {
        const isValid = isCustomerAddressValid({});
        expect(isValid).toEqual(false);
    });

    test('Valid Address', () => {
        const isValid = isCustomerAddressValid(customerAddress);
        expect(isValid).toEqual(true);
    });

    test('Missing required fields', () => {
        const isValid = isCustomerAddressValid(customerAddressMissingRequiredFields);
        expect(isValid).toEqual(false);
    });
});

describe('Address belongs to customer test', () => {
    test('Missing addresses to check', () => {
        const isValidAddressId = addressIdBelongsToCustomer(1, undefined);
        expect(isValidAddressId).toEqual(false);
    });

    test('Address belongs to customer', () => {
        const isValidAddressId = addressIdBelongsToCustomer(1, bcCustomerAddressesWithIds);
        expect(isValidAddressId).toEqual(true);
    });

    test('Address does not belong to customer', () => {
        const isValidAddressId = addressIdBelongsToCustomer(3, bcCustomerAddressesWithIds);
        expect(isValidAddressId).toEqual(false);
    });
});
