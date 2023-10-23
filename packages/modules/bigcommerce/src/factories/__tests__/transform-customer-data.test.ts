import {
    transformAcCustomerPasswordChange,
    transformAcCustomerValidatePassword,
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
    getTransformedCreateCustomerData,
    transformBcCustomer,
} from '../transform-customer-data';
import { bcAddress } from './__data__/customer-address-tranformation-data';
import {
    acCustomer,
    acCustomerOutputWithEmail,
    acCustomerOutputWithName,
    acCustomerWithEmail,
    acCustomerWithName,
    acCustomerWithNoRemoteAssistance,
    acCustomerWithRemoteAssistance,
    bcAddresses,
    bcCreateCustomerInputData,
    bcCustomer,
    bcCustomerForPasswordChange,
    bcMutationCustomerWithEmail,
    bcMutationCustomerWithName,
    bcMutationCustomerWithRemoteAssistanceSetToFalse,
    bcMutationCustomerWithRemoteAssistanceSetToTrue,
    bcValidatePasswordRequest,
} from './__data__/customer-data.test';

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
    test('Transform Ac remote assistance to Bc remote assistance form field for updating remote assistance checkbox to true', () => {
        const customerId = 1;
        const allowRemoteAssist = acCustomerWithRemoteAssistance;
        const bcCustomerExpected = bcMutationCustomerWithRemoteAssistanceSetToTrue;

        // update to true
        const bcTransformedCustomer = transformCustomerForMutation(allowRemoteAssist, customerId);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac remote assistance to Bc remote assistance form field for updating remote assistance checkbox to false', () => {
        const customerId = 1;
        const allowRemoteAssist = acCustomerWithNoRemoteAssistance;
        const bcCustomerExpected = bcMutationCustomerWithRemoteAssistanceSetToFalse;

        const bcTransformedCustomer = transformCustomerForMutation(allowRemoteAssist, customerId);

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
        const bcAddressInput = bcAddresses;
        const isSubscribed = true;

        const acCustomerExpected = acCustomer;

        const transformedAcCustomer = transformBcCustomer(
            bcCustomerInput,
            bcAddressInput,
            isSubscribed
        );

        expect(transformedAcCustomer).toEqual(acCustomerExpected);
    });
});
