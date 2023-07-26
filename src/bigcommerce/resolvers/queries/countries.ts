import { Countries } from '../../types';
import { getCountries, getCountriesStates } from '../requests/bc-rest-calls';

export const countriesResolver = {
    resolve: async () => {
        const countries = await getCountries();

        return await transformCountries(countries);
    },
};

export const transformCountries = async (countries: Countries[]) => {
    return countries.map(async (country) => {
        const transformedCountryStates = await transformCountriesStates(country.states);
        return {
            id: country.id,
            two_letter_abbreviation: country.country_iso2,
            full_name_english: country.country,
            available_regions: transformedCountryStates,
        };
    });
};

const transformCountriesStates = async (countriesStates: Countries['states']) => {
    const states = await getCountriesStates(countriesStates.resource);
    if (states.length > 0) {
        return states.map((state) => {
            return {
                code: state.state_abbreviation,
                name: state.state,
                id: state.id,
            };
        });
    } else {
        return null;
    }
};
