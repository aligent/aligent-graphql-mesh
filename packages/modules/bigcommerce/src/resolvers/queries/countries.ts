import { QueryResolvers } from '@mesh';
import { getCountries, getCountriesStates } from '../../apis/rest/countries';
import { Country, CountryStates } from '../../types';

/* istanbul ignore next */
export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, _context, _info) => {
        const countries = await getCountries();
        // TODO: revert back to get full data
        // This is just temporary to get TF to work with AUS data
        return transformCountries(countries.filter((country) => country.country === 'Australia'));
    },
};

/* istanbul ignore next */
export const transformCountries = async (countries: Country[]) => {
    return Promise.all(
        countries.map(async (country) => {
            const states = await getCountriesStates(country.states.resource);
            return transformCountry(country, states);
        })
    );
};

export const transformCountry = (country: Country, states: CountryStates[]) => {
    const transformedCountryStates = transformCountriesStates(states);

    return {
        id: country.id.toString(),
        two_letter_abbreviation: country.country_iso2,
        full_name_english: country.country,
        available_regions: transformedCountryStates,
    };
};

export const transformCountriesStates = (states: CountryStates[]) => {
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
