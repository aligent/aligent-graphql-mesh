import 'reflect-metadata';
import { CustomerAddressTransformer } from '../transform-customer-address-data';
import { inputAddress, addresses } from './__data__/customer-address';

describe('customer address data transform tests', () => {
    test('return transformed Oro Address', () => {
        const customerAddressTransformer: CustomerAddressTransformer =
            new CustomerAddressTransformer();
        const transformed = customerAddressTransformer.transform({ data: inputAddress });
        expect(transformed).toEqual(addresses);
    });
});
