import "reflect-metadata";
import { oroCountries, oroRegions } from './__data__/countries-input-data';
import { transformedCountries } from './__data__/countries-transformed-data';
import { CountryTransformer } from '../country-transformer';


describe('Countries data transform tests', () => {
    test('return empty array when no states for a country', () => {
        const countryTransformer = new CountryTransformer();
        const transformed = countryTransformer.transform(oroCountries, []);

        expect(transformed[0].available_regions).toEqual([]);
    });

    test('return transformed countries', () => {
        const countryTransformer = new CountryTransformer();
        const transformed = countryTransformer.transform(oroCountries, oroRegions);

        expect(transformed).toEqual(transformedCountries);
    });
});
