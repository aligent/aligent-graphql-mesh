import { transformCustomerData } from '../create-customer';
import { bcCustomerCreated } from './__data__/customer-input-data';
import { transformedCreatedCustomer } from './__data__/customer-transformed-data';

describe('Create customer data transform tests', () => {
    test('return transformed customer after being created', () => {
        const inputBcCustomerCreated = bcCustomerCreated;
        const inputTransformedCreatedCustomer = transformedCreatedCustomer;

        const transformed = transformCustomerData(inputBcCustomerCreated);

        expect(transformed).toEqual(inputTransformedCreatedCustomer);
    });
});
