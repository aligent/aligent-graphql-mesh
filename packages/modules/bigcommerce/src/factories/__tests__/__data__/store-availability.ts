import { InventoryLocationConnection, Product } from '@aligent/bigcommerce-operations';

//Sample availability data for AccuSharp Sharp-N-Easy 2-Step Sharpener - 47TSC
export const storeAvailabilityData = {
    items: [
        {
            location: {
                city: 'Archerfield',
                distance: 0.012,
                email: 'markv@tradetools.com.au',
                id: 1,
                name: 'Archerfield',
                phone: '(07) 3875 1022',
                pickup_location_code: 'ROC',
                postcode: '4108',
                street: '10 Woomera Place',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Brendale',
                distance: 27.493,
                email: 'info@tradetools.com',
                id: 2,
                name: 'Brendale',
                phone: '(07) 3205 1911',
                pickup_location_code: 'BRE',
                postcode: '4500',
                street: '122 South Pine Road',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Browns Plains',
                distance: 11.058,
                email: 'info@tradetools.com',
                id: 3,
                name: 'Browns Plains',
                phone: '(07) 3444 6263',
                pickup_location_code: 'BRO',
                postcode: '4118',
                street: '43 Eastern Road',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Burleigh Heads',
                distance: 69.412,
                email: 'info@tradetools.com',
                id: 5,
                name: 'Burleigh Heads',
                phone: '(07) 5522 1373',
                pickup_location_code: 'BLH',
                postcode: '4220',
                street: '30 Kortum Drive',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Caboolture',
                distance: 54.046,
                email: 'info@tradetools.com',
                id: 6,
                name: 'Caboolture',
                phone: '(07) 5432 4882',
                pickup_location_code: 'CBO',
                postcode: '4510',
                street: '90 Lear Jet Drive',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Capalaba',
                distance: 18.26,
                email: 'info@tradetools.com',
                id: 8,
                name: 'Capalaba',
                phone: '(07) 3390 3399',
                pickup_location_code: 'CAP',
                postcode: '4157',
                street: '29 Smith Street',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Eagle Farm',
                distance: 16.776,
                email: 'info@tradetools.com',
                id: 9,
                name: 'Eagle Farm',
                phone: '(07) 3868 1166',
                pickup_location_code: 'FOR',
                postcode: '4009',
                street: '12 Harvey Street North',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Geebung',
                distance: 22.984,
                email: 'info@tradetools.com',
                id: 10,
                name: 'Geebung',
                phone: '(07) 3265 1711',
                pickup_location_code: 'GEE',
                postcode: '4034',
                street: '466 Newman Road',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Arundel',
                distance: 54.35,
                email: 'info@tradetools.com',
                id: 12,
                name: 'Labrador',
                phone: '(07) 5537 1736',
                pickup_location_code: 'LAB',
                postcode: '4214',
                street: '27 Gibbs Street',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Nerang',
                distance: 57.762,
                email: 'info@tradetools.com',
                id: 14,
                name: 'Nerang',
                phone: '(07) 5500 4292',
                pickup_location_code: 'BUN',
                postcode: '4211',
                street: '55 Lawrence Drive',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Ormeau',
                distance: 32.43,
                email: 'info@tradetools.com',
                id: 16,
                name: 'Ormeau',
                phone: '(07) 5549 2600',
                pickup_location_code: 'ORM',
                postcode: '4208',
                street: '77 Motorway Cct',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Slacks Creek',
                distance: 12.574,
                email: 'info@tradetools.com',
                id: 17,
                name: 'Springwood',
                phone: '(07) 3299 2150',
                pickup_location_code: 'SPR',
                postcode: '4127',
                street: '109 Park Road',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Tingalpa',
                distance: 13.838,
                email: 'info@tradetools.com',
                id: 18,
                name: 'Tingalpa',
                phone: '(07) 3522 1500',
                pickup_location_code: 'TIN',
                postcode: '4173',
                street: '11 Proprietary Street',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
        {
            location: {
                city: 'Tweed Heads South',
                distance: 87.265,
                email: 'info@tradetools.com',
                id: 20,
                name: 'Tweed Heads',
                phone: '(07) 5523 0482',
                pickup_location_code: 'TWE',
                postcode: '2486',
                street: '8 Machinery Drive',
            },
            locationAvailabilityStatus: 'AVAILABLE',
        },
    ],
};

export const storeAvailabilityArgs = {
    skus: { quantity: 1, sku: "'47TSC-DEMO1" },
    area: { radius: 100, search_term: '4000', coordinates: { lat: -27.5681198, lng: 153.0195213 } },
};

export const bcStoreAvailabilityArgs = {
    distanceFilter: {
        latitude: -27.5681198,
        longitude: 153.0195213,
        radius: 100,
        lengthUnit: 'Kilometres',
    },
};

export const bcStoreAvailability = {
    variants: {
        edges: [
            {
                node: {
                    inventory: {
                        byLocation: {
                            edges: [
                                { node: { locationEntityId: 1, availableToSell: 99 } },
                                { node: { locationEntityId: 2, availableToSell: 10 } },
                                { node: { locationEntityId: 3, availableToSell: 5 } },
                                { node: { locationEntityId: 4, availableToSell: 6 } },
                                { node: { locationEntityId: 5, availableToSell: 8 } },
                                { node: { locationEntityId: 6, availableToSell: 3 } },
                                { node: { locationEntityId: 7, availableToSell: 11 } },
                                { node: { locationEntityId: 8, availableToSell: 6 } },
                                { node: { locationEntityId: 9, availableToSell: 2 } },
                                { node: { locationEntityId: 10, availableToSell: 5 } },
                                { node: { locationEntityId: 11, availableToSell: 24 } },
                                { node: { locationEntityId: 12, availableToSell: 8 } },
                                { node: { locationEntityId: 13, availableToSell: 9 } },
                                { node: { locationEntityId: 14, availableToSell: 3 } },
                                { node: { locationEntityId: 15, availableToSell: 33 } },
                                { node: { locationEntityId: 16, availableToSell: 6 } },
                                { node: { locationEntityId: 17, availableToSell: 2 } },
                                { node: { locationEntityId: 18, availableToSell: 7 } },
                                { node: { locationEntityId: 19, availableToSell: 4 } },
                                { node: { locationEntityId: 20, availableToSell: 20 } },
                            ],
                        },
                    },
                },
            },
        ],
    },
} as Product;

export const bcStoreLocationsWithDistance = {
    edges: [
        {
            node: {
                entityId: 1,
                code: 'ROC',
                label: 'Archerfield',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '10 Woomera Place',
                    address2: '',
                    city: 'Archerfield',
                    code: 'BC-ADDRESS-1',
                    countryCode: 'AU',
                    description: '',
                    email: 'markv@tradetools.com.au',
                    entityId: 1,
                    label: 'Address 1',
                    latitude: -27.568048,
                    longitude: 153.019621,
                    phone: '(07) 3875 1022',
                    postalCode: '4108',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 0.012, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 2,
                code: 'BRE',
                label: 'Brendale',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '122 South Pine Road',
                    address2: '',
                    city: 'Brendale',
                    code: 'c250bba8-cd2f-4c93-a1d1-b736c8e3714b',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 2,
                    label: '',
                    latitude: -27.32243,
                    longitude: 152.988219,
                    phone: '(07) 3205 1911',
                    postalCode: '4500',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 27.493, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 3,
                code: 'BRO',
                label: 'Browns Plains',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '43 Eastern Road',
                    address2: '',
                    city: 'Browns Plains',
                    code: '178919b1-b991-4e05-9d0e-c780272e868c',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 3,
                    label: '',
                    latitude: -27.664533,
                    longitude: 153.047065,
                    phone: '(07) 3444 6263',
                    postalCode: '4118',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 11.058, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 5,
                code: 'BLH',
                label: 'Burleigh Heads',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '30 Kortum Drive',
                    address2: '',
                    city: 'Burleigh Heads',
                    code: 'd41641f9-a598-4ad3-97a2-911f5ff9b619',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 5,
                    label: '',
                    latitude: -28.0693,
                    longitude: 153.4403,
                    phone: '(07) 5522 1373',
                    postalCode: '4220',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 69.412, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 6,
                code: 'CBO',
                label: 'Caboolture',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '90 Lear Jet Drive',
                    address2: '',
                    city: 'Caboolture',
                    code: 'd607d277-3a7a-4a20-9327-ab5bc57f0d3a',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 6,
                    label: '',
                    latitude: -27.083427,
                    longitude: 152.978652,
                    phone: '(07) 5432 4882',
                    postalCode: '4510',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 54.046, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 8,
                code: 'CAP',
                label: 'Capalaba',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '29 Smith Street',
                    address2: '',
                    city: 'Capalaba',
                    code: 'a4451361-a76d-40f7-83b5-1c58c5d76461',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 8,
                    label: '',
                    latitude: -27.529482,
                    longitude: 153.199545,
                    phone: '(07) 3390 3399',
                    postalCode: '4157',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 18.26, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 9,
                code: 'FOR',
                label: 'Eagle Farm',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '12 Harvey Street North',
                    address2: '',
                    city: 'Eagle Farm',
                    code: 'be335b31-23eb-4783-8673-33909b6de04e',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 9,
                    label: '',
                    latitude: -27.431665,
                    longitude: 153.092086,
                    phone: '(07) 3868 1166',
                    postalCode: '4009',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 16.776, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 10,
                code: 'GEE',
                label: 'Geebung',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '466 Newman Road',
                    address2: '',
                    city: 'Geebung',
                    code: 'ec200b1f-84c1-489a-83c4-8e115a502985',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 10,
                    label: '',
                    latitude: -27.36303,
                    longitude: 153.048623,
                    phone: '(07) 3265 1711',
                    postalCode: '4034',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 22.984, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 12,
                code: 'LAB',
                label: 'Labrador',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '27 Gibbs Street',
                    address2: '',
                    city: 'Arundel',
                    code: '0ca6768c-0b81-4689-955d-a5ae372cb493',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 12,
                    label: '',
                    latitude: -27.936402,
                    longitude: 153.382669,
                    phone: '(07) 5537 1736',
                    postalCode: '4214',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 54.35, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 14,
                code: 'BUN',
                label: 'Nerang',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '55 Lawrence Drive',
                    address2: '',
                    city: 'Nerang',
                    code: '9e2aa810-db52-4f00-bc26-f8e798f833a5',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 14,
                    label: '',
                    latitude: -27.999727,
                    longitude: 153.346265,
                    phone: '(07) 5500 4292',
                    postalCode: '4211',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 57.762, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 16,
                code: 'ORM',
                label: 'Ormeau',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '77 Motorway Cct',
                    address2: '',
                    city: 'Ormeau',
                    code: '0555c6d8-0086-4e54-b91e-e6db82987f3f',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 16,
                    label: '',
                    latitude: -27.773786,
                    longitude: 153.253018,
                    phone: '(07) 5549 2600',
                    postalCode: '4208',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 32.43, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 17,
                code: 'SPR',
                label: 'Springwood',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '109 Park Road',
                    address2: '',
                    city: 'Slacks Creek',
                    code: '5dcf5bd6-ffbc-49b0-b8bb-7ddf0f719e53',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 17,
                    label: '',
                    latitude: -27.626961,
                    longitude: 153.128485,
                    phone: '(07) 3299 2150',
                    postalCode: '4127',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 12.574, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 18,
                code: 'TIN',
                label: 'Tingalpa',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '11 Proprietary Street',
                    address2: '',
                    city: 'Tingalpa',
                    code: '1fa356f5-0409-470d-9d93-40ac924b04fd',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 18,
                    label: '',
                    latitude: -27.472132,
                    longitude: 153.108842,
                    phone: '(07) 3522 1500',
                    postalCode: '4173',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 13.838, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
        {
            node: {
                entityId: 20,
                code: 'TWE',
                label: 'Tweed Heads',
                description: '',
                typeId: 'PHYSICAL',
                address: {
                    address1: '8 Machinery Drive',
                    address2: '',
                    city: 'Tweed Heads South',
                    code: '82ca9155-70b7-4cbb-93ff-04ab8e7db990',
                    countryCode: 'AU',
                    description: null,
                    email: 'info@tradetools.com',
                    entityId: 20,
                    label: '',
                    latitude: -28.202502,
                    longitude: 153.542242,
                    phone: '(07) 5523 0482',
                    postalCode: '2486',
                    stateOrProvince: 'QLD',
                },
                distance: { value: 87.265, lengthUnit: 'Kilometres' },
                timeZone: 'Europe/Kiev',
            },
        },
    ],
} as InventoryLocationConnection;
