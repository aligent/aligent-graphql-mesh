import { createAcReadyCustomer } from '../src/bigcommerce/factories/transform-customers-data';
import { transformCountriesStates, transformCountry } from '../src/bigcommerce/resolvers/queries/countries';
import {  bcCountry, bcCustomerCreated, bcStates } from './__data__/bigcommerce-data';
import { transformedCountries, transformedCreatedCustomer, transformedStates } from './__data__/transformed-data';

describe('Countries data transform tests', () => {
    test('return transformed states', () => {
        const inputBcStates = bcStates;
        const inputTransformedStates = transformedStates;

        const transformed = transformCountriesStates(inputBcStates);

        expect(transformed).toEqual(inputTransformedStates);
    });

    test('return transformed countries', () => {
        const inputBcCountry = bcCountry;
        const inputBcStates = bcStates;
        const inputTransformedCountries = transformedCountries;

        const transformed = transformCountry(inputBcCountry, inputBcStates);

        expect(transformed).toEqual(inputTransformedCountries);
    });
});


describe('Create customer data transform tests', () => {
    test('return transformed customer', () => {
        const inputBcCustomerCreated = bcCustomerCreated;
        const inputTransformedCreatedCustomer = transformedCreatedCustomer;

        const transformed = createAcReadyCustomer(inputBcCustomerCreated);

        expect(transformed).toEqual(inputTransformedCreatedCustomer);
    });

});
