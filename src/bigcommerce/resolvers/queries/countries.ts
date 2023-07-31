import { Country, CountryStates } from '../../types';
import { getCountries, getCountriesStates } from '../requests/bc-rest-calls';

export const countriesResolver = {
    resolve: async () => {
        const countries = await getCountries();
        // TODO: revert back to get full data
        // This is just temporary to get TF to work with AUS data
        return transformCountries(countries.filter((country) => country.country === 'Australia'));
    },
};

export const transformCountries = async (countries: Country[]) => {
    return Promise.all(
        countries.map(async (country) => {
            const states = await getCountriesStates(country.states.resource);
            return transformCountry(country, states);
        })
    );
};

const transformCountry = (country: Country, states: CountryStates[]) => {
    const transformedCountryStates = transformCountriesStates(states);

    return {
        id: country.id,
        two_letter_abbreviation: country.country_iso2,
        full_name_english: country.country,
        available_regions: transformedCountryStates,
    };
};

const transformCountriesStates = (states: CountryStates[]) => {
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
