import {
    transformAcCustomerPasswordChange,
    transformAcCustomerValidatePassword,
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
    getTransformedCreateCustomerData,
    transformBcCustomer,
    getCustomerPropertyFromFormFieldKey,
    getCustomerAttributesFromFormFields,
} from '../transform-customer-data';
import {
    acCustomer,
    acCustomerOutputWithEmail,
    acCustomerOutputWithName,
    acCustomerWithEmail,
    acCustomerWithName,
    bcCreateCustomerInputData,
    bcCustomer,
    bcCustomerForPasswordChange,
    bcMutationCustomerWithEmail,
    bcMutationCustomerWithName,
    bcValidatePasswordRequest,
    bcWishlists,
} from './__data__/customer-data';
import { getTransformedWishlists } from '../helpers/transform-wishlists';

describe('Customer Ac to Bc Transformation', () => {
    test('Transform Ac Customer to Bc Customer for Name update', () => {
        const customerId = 1;
        const customerWithNames = acCustomerWithName;
        const bcCustomerExpected = bcMutationCustomerWithName;

        const bcTransformedCustomer = transformCustomerForMutation(customerWithNames, customerId);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac Customer to Bc Customer for Email update', () => {
        const customerId = 1;
        const acCustomer = acCustomerWithEmail;
        const bcCustomerExpected = bcMutationCustomerWithEmail;

        const bcTransformedCustomer = transformCustomerForMutation(acCustomer, customerId);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac Password change to Bc Password change', () => {
        const customerId = 1;
        const newPassword = 'Password1';
        const bcCustomerExpected = bcCustomerForPasswordChange;

        const bcTransformedCustomer = transformAcCustomerPasswordChange(customerId, newPassword);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac current Password to Bc Password validation', () => {
        const email = 'example@example.com';
        const password = 'Password1';
        const channel = 1;

        const bcValidateCustomerPasswordExpected = bcValidatePasswordRequest;

        const bcTransformedPasswordRequest = transformAcCustomerValidatePassword(
            email,
            password,
            channel
        );

        expect(bcTransformedPasswordRequest).toEqual(bcValidateCustomerPasswordExpected);
    });
    test('Transform Ac Customer input to Bc Customer for create customer', () => {
        const email = 'example@example.com';
        const firstname = 'example';
        const lastname = 'customer';
        const password = 'password';

        const transformedCustomer = getTransformedCreateCustomerData(
            email,
            firstname,
            lastname,
            password
        );

        expect(transformedCustomer).toEqual(bcCreateCustomerInputData);
    });
});

describe('Customer Bc to Ac Transformation', () => {
    test('Transform Bc Customer to Ac Customer for Name update', () => {
        const bcCustomer = bcMutationCustomerWithName;
        const isSubscribed = false;
        const acCustomerExpected = acCustomerOutputWithName;

        const acCustomer = transformBcCustomerToAcCustomerForMutation(bcCustomer, isSubscribed);

        expect(acCustomer).toEqual(acCustomerExpected);
    });
    test('Transform Bc Customer to Ac Customer for Email update', () => {
        const bcCustomer = bcMutationCustomerWithEmail;
        const isSubscribed = false;
        const acCustomerExpected = acCustomerOutputWithEmail;

        const acCustomer = transformBcCustomerToAcCustomerForMutation(bcCustomer, isSubscribed);

        expect(acCustomer).toEqual(acCustomerExpected);
    });

    test('Transform entire customer object from BC to AC', () => {
        const bcCustomerInput = bcCustomer;

        const acCustomerExpected = acCustomer;

        const transformedAcCustomer = transformBcCustomer(bcCustomerInput);
        const transformedAcWishlist = getTransformedWishlists(bcWishlists);

        expect({ ...transformedAcCustomer, wishlists: transformedAcWishlist }).toEqual(
            acCustomerExpected
        );
    });

    test('Returns customer key in snake case', () => {
        const expectedCustomerProperty = 'industry';

        const result = getCustomerPropertyFromFormFieldKey('INDUSTRY');

        expect(result).toEqual(expectedCustomerProperty);
    });

    test('Returns customer attributes from form fields in "{ [key: string]: string }" format', () => {
        const expectedFormat = { test_name_1: 'testValue1', test_name_2: 'testValue2' };

        const result = getCustomerAttributesFromFormFields([
            { name: 'testName1', value: 'testValue1', id: 1 },
            { name: 'testName2', value: 'testValue2', id: 2 },
        ]);

        expect(result).toEqual(expectedFormat);
    });
});
