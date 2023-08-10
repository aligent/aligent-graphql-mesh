import {isCustomerAddressValid} from "../create-customer-address";
import {
    customerAddress,
    customerAddressMissingRequiredFields
} from "./__data__/customer-address-data";

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
