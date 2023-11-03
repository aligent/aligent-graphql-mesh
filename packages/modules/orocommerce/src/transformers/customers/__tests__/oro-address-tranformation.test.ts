import 'reflect-metadata';
import { OroAddressTransformer } from '../transform-oro-address-data';
import { outputAddress, oroAddressResponse } from './__data__/customer-address';

describe(' Oro customer address data transform tests', () => {
    test('return transformed Takeflight Address', () => {
        const oroAddressTransformer: OroAddressTransformer = new OroAddressTransformer();
        const transformed = oroAddressTransformer.transform({ data: oroAddressResponse });
        expect(transformed).toEqual(outputAddress);
    });
});
