import 'reflect-metadata';
import { OroCustomerTransformer } from '../transform-customer-data';
import { OroAddressesTransformer } from '../transform-oro-addresses-data';
import { oroCustomer, oroAddresses, customer } from './__data__/customer';
import { UpdateCustomerTransformer } from '../update-customer-transformer';
import { CustomerInput } from '@aligent/orocommerce-resolvers';
import { UpdateCustomer } from '../../../types';

describe('Transform  Oro customer to Takflight customer', () => {
    test('return transformed Oro Address', () => {
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

describe('update customer email', () => {
    test('return transformed customer', () => {
        const updateCustomerTransformer = new UpdateCustomerTransformer();
        const customerInput: CustomerInput = {
            email: 'mandy.tatla@aligent.com.au',
        };
        const data: UpdateCustomer = {
            type: 'customerusers',
            id: 'mine',
            attributes: {
                email: 'mandy.tatla@aligent.com.au',
                firstName: undefined,
                lastname: undefined,
            },
        };
        const transformed = updateCustomerTransformer.transform({
            data: { ...customerInput },
        });
        expect(transformed).toEqual({ ...data });
    });
});

describe('update customer firstname and lastname', () => {
    test('return transformed customer', () => {
        const updateCustomerTransformer = new UpdateCustomerTransformer();
        const customerInput: CustomerInput = {
            firstname: 'Mandy',
            lastname: 'Tatla',
        };
        const data: UpdateCustomer = {
            type: 'customerusers',
            id: 'mine',
            attributes: { firstName: 'Mandy', lastName: 'Tatla', email: undefined },
        };
        const transformed = updateCustomerTransformer.transform({
            data: { ...customerInput },
        });
        expect(transformed).toEqual({ ...data });
    });
});

describe('update customer details', () => {
    test('return transformed customer', () => {
        const updateCustomerTransformer = new UpdateCustomerTransformer();
        const customerInput: CustomerInput = {
            firstname: 'Mandy',
            lastname: 'Tatla',
            email: 'mandy.tatla@aligent.com.au',
            password: '546347veyfgu',
        };
        const data: UpdateCustomer = {
            type: 'customerusers',
            id: 'mine',
            attributes: {
                firstName: 'Mandy',
                lastName: 'Tatla',
                email: 'mandy.tatla@aligent.com.au',
            },
        };
        const transformed = updateCustomerTransformer.transform({
            data: { ...customerInput },
        });
        expect(transformed).toEqual({ ...data });
    });
});
