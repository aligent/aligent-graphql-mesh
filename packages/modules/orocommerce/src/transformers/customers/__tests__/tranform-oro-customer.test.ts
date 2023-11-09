import 'reflect-metadata';
import { OroCustomerTransformer } from '../transform-customer-data';
import { OroAddressesTransformer } from '../transform-oro-addresses-data';
import { oroCustomer, oroAddresses, customer } from './__data__/customer';

describe('Transform  Oro customer to Takflight customer', () => {
    test('return transformed Customer', () => {
        const oroAddressTransformer = new OroAddressesTransformer();
        const oroCustomerTransformer: OroCustomerTransformer = new OroCustomerTransformer(
            oroAddressTransformer
        );
        const transformed = oroCustomerTransformer.transform({
            data: { oroCustomer, oroAddresses },
        });
        expect(transformed).toEqual(customer);
    });
});
