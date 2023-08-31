import {
    checkIfDefaultAddress,
    getTransformedCustomerAddresses,
} from '../transform-customer-addresses';
import { bcAddresses, transformedAddresses } from './__data__/transform-customer-address-data';

describe('transform customer addresses', () => {
    it('Returns the transformed AC Customer Addresses', () => {
        const inputBcAddress = bcAddresses;
        const expectResult = transformedAddresses;

        const result = getTransformedCustomerAddresses(inputBcAddress);

        expect(result).toEqual(expectResult);
    });

    it('Returns true when Default Billing with Yes value is found in form fields', () => {
        const inputBcAddress = bcAddresses;

        const result = checkIfDefaultAddress(inputBcAddress[0].form_fields, 'Default Billing');

        expect(result).toEqual(true);
    });

    it('Returns false when search for form field does not exist', () => {
        const inputBcAddress = bcAddresses;

        const result = checkIfDefaultAddress(inputBcAddress[0].form_fields, 'Default Shipping');

        expect(result).toEqual(false);
    });
});
