import { Country, Region } from '../../../../types';

export const oroCountries: Country[] = [
    {
        type: 'countries',
        id: 'AU',
        attributes: {
            iso3Code: 'AUS',
            name: 'Australia',
        },
        relationships: {
            regions: {
                data: [
                    {
                        type: 'regions',
                        id: 'AU-NSW',
                    },
                    {
                        type: 'regions',
                        id: 'AU-QLD',
                    },
                    {
                        type: 'regions',
                        id: 'AU-SA',
                    },
                    {
                        type: 'regions',
                        id: 'AU-TAS',
                    },
                    {
                        type: 'regions',
                        id: 'AU-VIC',
                    },
                    {
                        type: 'regions',
                        id: 'AU-WA',
                    },
                ],
            },
        },
    },
    {
        type: 'countries',
        id: 'NZ',
        attributes: {
            iso3Code: 'NZL',
            name: 'New Zealand',
        },
        relationships: {
            regions: {
                data: [
                    {
                        type: 'regions',
                        id: 'NZ-AUK',
                    },
                    {
                        type: 'regions',
                        id: 'NZ-BOP',
                    },
                    {
                        type: 'regions',
                        id: 'NZ-CAN',
                    },
                ],
            },
        },
    },
];

export const oroRegions: Region[] = [
    {
        type: 'regions',
        id: 'AU-NSW',
        attributes: {
            code: 'NSW',
            name: 'New South Wales',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'AU-QLD',
        attributes: {
            code: 'QLD',
            name: 'Queensland',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'AU-SA',
        attributes: {
            code: 'SA',
            name: 'South Australia',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'AU-TAS',
        attributes: {
            code: 'TAS',
            name: 'Tasmania',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'AU-VIC',
        attributes: {
            code: 'VIC',
            name: 'Victoria',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'AU-WA',
        attributes: {
            code: 'WA',
            name: 'Western Australia',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'AU',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'NZ-AUK',
        attributes: {
            code: 'AUK',
            name: 'Auckland',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'NZ',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'NZ-BOP',
        attributes: {
            code: 'BOP',
            name: 'Bay of Plenty',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'NZ',
                },
            },
        },
    },
    {
        type: 'regions',
        id: 'NZ-CAN',
        attributes: {
            code: 'CAN',
            name: 'Canterbury',
        },
        relationships: {
            country: {
                data: {
                    type: 'countries',
                    id: 'NZ',
                },
            },
        },
    },
];
