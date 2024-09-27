import { Country as AcCountry } from '@aligent/bigcommerce-resolvers';
import { BcState, Country } from '../types';
import { isTruthy } from '@aligent/utils';

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
            .filter(isTruthy);
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
