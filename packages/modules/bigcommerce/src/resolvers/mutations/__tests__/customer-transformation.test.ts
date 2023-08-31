import { transformCustomerData } from '../create-customer';
import { bcCustomerCreated } from './__data__/customer-input-data';
import { transformedCreatedCustomer } from './__data__/customer-transformed-data';

describe('Create customer data transform tests', () => {
    test('return transformed customer after being created', () => {
        const inputBcCustomerCreated = bcCustomerCreated;
        const ExpectedTransformedCreatedCustomer = transformedCreatedCustomer;

        const result = transformCustomerData(inputBcCustomerCreated);

        expect(result).toEqual(ExpectedTransformedCreatedCustomer);
    });
});
