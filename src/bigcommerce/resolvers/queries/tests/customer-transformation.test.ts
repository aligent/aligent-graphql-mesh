import { transformCustomerData } from '../../../factories/transform-customers-data';
import { transformedCreatedCustomer } from './__data__/countries-transformed-data';
import { bcCustomerCreated } from './__data__/customer-input-data';

describe('Create customer data transform tests', () => {
    test('return transformed customer', () => {
        const inputBcCustomerCreated = bcCustomerCreated;
        const inputTransformedCreatedCustomer = transformedCreatedCustomer;

        const transformed = transformCustomerData(inputBcCustomerCreated);

        expect(transformed).toEqual(inputTransformedCreatedCustomer);
    });
});
