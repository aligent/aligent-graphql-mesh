import { Country as AcCountry } from '@aligent/orocommerce-resolvers';
import { Country, Region } from '../types';

export const transformCountriesAndRegions = (
    oroCountries: Country[],
    oroRegions: Region[]
): AcCountry[] => {
    return oroCountries.map((country) => {
        const available_regions = country.relationships?.regions.data?.map((countryRegion) => {
            const region = oroRegions.filter((region) => region.id === countryRegion.id);
            return {
                code: region[0].attributes.code,
                id: region[0].id,
                name: region[0].attributes.name,
            }
        })
        return {
            full_name_english: country.attributes.name,
            full_name_locale: null,
            id: String(country.id),
            two_letter_abbreviation: country.id,
            three_letter_abbreviation: country.attributes.country_iso3,
            available_regions,
        };
    });
};
