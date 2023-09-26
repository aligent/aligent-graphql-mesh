import { transformCountriesAndRegions } from '../transform-country-data';
import { oroCountries, oroRegions } from './__data__/countries-input-data';
import { transformedCountries } from './__data__/countries-transformed-data';

describe('Countries data transform tests', () => {
    test('return empty array when no states for a country', () => {
        const transformed = transformCountriesAndRegions(oroCountries, []);

        expect(transformed[0].available_regions).toEqual([]);
    });

    test('return transformed countries', () => {
        const transformed = transformCountriesAndRegions(oroCountries, oroRegions);

        expect(transformed).toEqual(transformedCountries);
    });
});
