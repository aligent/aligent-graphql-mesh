import { mockCountries } from '../mocks/countries';
import { getCountries } from '../requests/bc-rest-calls';

export const countriesResolver = {
    resolve: async (_root, args, _context, _info) => {
        const countries = await getCountries();

        return countries.map((country) => {
            return {
                two_letter_abbreviation: country.country_iso2,
                full_name_english: country.country,
            };
        });

        // [
        //     {
        //         two_letter_abbreviation: 'AI',
        //         full_name_english: 'Anguilla',
        //         available_regions: null,
        //         __typename: 'Country',
        //     },
        //     {
        //         two_letter_abbreviation: 'AL',
        //         full_name_english: 'Albania',
        //         available_regions: [
        //             {
        //                 code: 'AL-01',
        //                 name: 'Berat',
        //                 id: 840,
        //                 __typename: 'Region',
        //             },
        //         ],
        //         __typename: 'Country',
        //     },
        // ];
    },
};
