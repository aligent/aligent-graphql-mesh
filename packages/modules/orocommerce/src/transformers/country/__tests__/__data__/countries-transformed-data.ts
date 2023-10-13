import { Country as AcCountry, Region as AcRegion } from '@aligent/orocommerce-resolvers';

export const transformedRegionsAU: AcRegion[] = [
    {
        code: 'NSW',
        id: 'AU-NSW',
        name: 'New South Wales',
    },
    {
        code: 'QLD',
        id: 'AU-QLD',
        name: 'Queensland',
    },
    {
        code: 'SA',
        id: 'AU-SA',
        name: 'South Australia',
    },
    {
        code: 'TAS',
        id: 'AU-TAS',
        name: 'Tasmania',
    },
    {
        code: 'VIC',
        id: 'AU-VIC',
        name: 'Victoria',
    },
    {
        code: 'WA',
        id: 'AU-WA',
        name: 'Western Australia',
    },
];

export const transformedRegionsNZ = [
    {
        code: 'AUK',
        id: 'NZ-AUK',
        name: 'Auckland',
    },
    {
        code: 'BOP',
        id: 'NZ-BOP',
        name: 'Bay of Plenty',
    },
    {
        code: 'CAN',
        id: 'NZ-CAN',
        name: 'Canterbury',
    },
];

export const transformedCountries: AcCountry[] = [
    {
        full_name_english: 'Australia',
        full_name_locale: 'Australia',
        id: 'AU',
        two_letter_abbreviation: 'AU',
        three_letter_abbreviation: 'AUS',
        available_regions: transformedRegionsAU,
    },
    {
        full_name_english: 'New Zealand',
        full_name_locale: 'New Zealand',
        id: 'NZ',
        two_letter_abbreviation: 'NZ',
        three_letter_abbreviation: 'NZL',
        available_regions: transformedRegionsNZ,
    },
];
