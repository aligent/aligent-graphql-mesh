import {
    transformBcCustomerToAcCustomerForMutation,
    transformCustomerForMutation,
} from '../transform-customer-data';
import {
    acCustomerOutputWithEmail,
    acCustomerOutputWithName,
    acCustomerWithEmail,
    acCustomerWithName,
    bcMutationCustomerWithEmail,
    bcMutationCustomerWithName,
} from './__data__/customer-data.test';

describe('Customer Transformation', () => {
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
