import { QueryResolvers, Country as AcCountry } from '@aligent/bigcommerce-resolvers';
import { getAllStates, getCountries } from '../../apis/rest/countries';
import { Country, BcState } from '../../types';

/* istanbul ignore next */
export const countriesResolver: QueryResolvers['countries'] = {
    resolve: async (_root, _args, _context, _info) => {
        const [countries, states] = await Promise.all([getCountries(), getAllStates(1)]);

        return transformCountriesAndStates(countries, states);
    },
};

export const transformCountriesAndStates = (
    bcCountries: Country[],
    bcStates: BcState[]
): AcCountry[] => {
    return bcCountries.map((country) => {
        const available_regions = bcStates
            .map((state) => {
                if (state.country_id === country.id) {
                    return {
                        code: state.state_abbreviation,
                        id: state.id,
                        name: state.state,
                    };
                }
                return null;
            })
            .filter(Boolean);
        return {
            full_name_english: country.country,
            full_name_locale: null,
            id: String(country.id),
            two_letter_abbreviation: country.country_iso2,
            three_letter_abbreviation: country.country_iso3,
            available_regions,
        };
    });
};