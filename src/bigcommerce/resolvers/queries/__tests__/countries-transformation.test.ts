import { CountryStates } from '../../../types';
import { transformCountriesAndStates } from '../countries';
import { bcCountry, bcStates } from './__data__/countries-input-data';
import { transformedCountries, transformedStates } from './__data__/countries-transformed-data';

describe('Countries data transform tests', () => {
    test('return transformed states', () => {
        const inputBcCountry = [bcCountry];
        const inputBcStates = bcStates;
        const inputTransformedStates = transformedStates;

        const transformed = transformCountriesAndStates(inputBcCountry, inputBcStates);

        expect(transformed[0].available_regions).toEqual(inputTransformedStates);
    });

    test('return empty array when no states for a country', () => {
        const inputBcCountry = [bcCountry];
        const inputNoStates: CountryStates[] = [];

        const transformed = transformCountriesAndStates(inputBcCountry, inputNoStates);

        expect(transformed[0].available_regions).toEqual([]);
    });

    test('return transformed countries', () => {
        const inputBcCountry = [bcCountry];
        const inputBcStates = bcStates;
        const inputTransformedCountries = [transformedCountries];

        const transformed = transformCountriesAndStates(inputBcCountry, inputBcStates);

        expect(transformed).toEqual(inputTransformedCountries);
    });
});
