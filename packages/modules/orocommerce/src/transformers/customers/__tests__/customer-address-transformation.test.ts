import 'reflect-metadata';
import { CustomerAddressTransformer } from '../transform-customer-address-data';
import { UpdateCustomerAddressTransformer } from '../transform-update-customer-address-data';
import {
    inputAddress,
    oroCreateAddressInput,
    oroAddressUpdateInput,
    InputUpdateAdress,
} from './__data__/customer-address';

describe('Transform  customer address data  to Oro expected format for create customer address', () => {
    test('return transformed Oro Address', () => {
        const customerAddressTransformer: CustomerAddressTransformer =
            new CustomerAddressTransformer();
        const transformed = customerAddressTransformer.transform({ data: inputAddress });
        expect(transformed).toEqual(oroCreateAddressInput);
    });
});

describe('Transform  customer address data  to Oro expected format for Update customer address', () => {
    test('return transformed Oro Address', () => {
        const updateCustomerAddressTransformer: UpdateCustomerAddressTransformer =
            new UpdateCustomerAddressTransformer();
        const transformed = updateCustomerAddressTransformer.transform({ data: InputUpdateAdress });
        expect(transformed).toEqual(oroAddressUpdateInput);
    });
});
