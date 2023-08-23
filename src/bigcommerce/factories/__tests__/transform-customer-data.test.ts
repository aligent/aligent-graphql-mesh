import {
    transformAcCustomerPasswordChange,
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
} from '../transform-customer-data';
import {
    acCustomerOutputWithEmail,
    acCustomerOutputWithName,
    acCustomerWithEmail,
    acCustomerWithName,
    bcCustomerForPasswordChange,
    bcMutationCustomerWithEmail,
    bcMutationCustomerWithName,
} from './__data__/customer-data.test';

describe('Customer Ac to Bc Transformation', () => {
    test('Transform Ac Customer to Bc Customer for Name update', () => {
        const customerId = 1;
        const customerWithNames = acCustomerWithName;
        const bcCustomerExpected = bcMutationCustomerWithName;

        const bcTransformedCustomer = transformCustomerForMutation(customerId, customerWithNames);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac Customer to Bc Customer for Email update', () => {
        const customerId = 1;
        const acCustomer = acCustomerWithEmail;
        const bcCustomerExpected = bcMutationCustomerWithEmail;

        const bcTransformedCustomer = transformCustomerForMutation(customerId, acCustomer);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
    });
    test('Transform Ac Password change to Bc Password change', () => {
        const customerId = 1;
        const newPassword = 'Password1';
        const bcCustomerExpected = bcCustomerForPasswordChange;

        const bcTransformedCustomer = transformAcCustomerPasswordChange(customerId, newPassword);

        expect(bcTransformedCustomer).toEqual(bcCustomerExpected);
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
});
