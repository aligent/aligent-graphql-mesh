
import { CountryStates } from '../../../types';
import { transformCountriesStates, transformCountry } from '../countries';
import { bcCountry, bcStates } from './__data__/countries-input-data';
import { transformedCountries, transformedStates } from './__data__/countries-transformed-data';

describe('Countries data transform tests', () => {
    test('return transformed states', () => {
        const inputBcStates = bcStates;
        const inputTransformedStates = transformedStates;

        const transformed = transformCountriesStates(inputBcStates);

        expect(transformed).toEqual(inputTransformedStates);
    });

    test('return null when no states for a country', () => {
        const inputNoStates: CountryStates[] = [];

        const transformed = transformCountriesStates(inputNoStates);

        expect(transformed).toEqual(null);
    });

    test('return transformed countries', () => {
        const inputBcCountry = bcCountry;
        const inputBcStates = bcStates;
        const inputTransformedCountries = transformedCountries;

        const transformed = transformCountry(inputBcCountry, inputBcStates);

        expect(transformed).toEqual(inputTransformedCountries);
    });
});
