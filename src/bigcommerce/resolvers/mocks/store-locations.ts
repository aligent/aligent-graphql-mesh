export const mockStoreLocations = {
    items: [
        {
            name: 'Mock Barker',
            pickup_location_code: 'ALIG001',
            distance: 933.7008155975,
            street: 'Mount Barker Rd',
            city: 'Totness',
            postcode: '5250',
            email: null,
            phone: '0400000000',
            latitude: -35.055933,
            longitude: 138.848999,
            __typename: 'StoreLocation',
        },
        {
            name: 'Kent Town',
            pickup_location_code: 'ALIG002',
            distance: 956.06965163789,
            street: 'Rundle St',
            city: 'Kent Town',
            postcode: '5067',
            email: null,
            phone: '0400000000',
            latitude: -34.919558,
            longitude: 138.616999,
            __typename: 'StoreLocation',
        },
        {
            name: 'Edwardstown',
            pickup_location_code: 'ALIG004',
            distance: 959.52886734846,
            street: '1028-1042 South Rd',
            city: 'Edwardstown',
            postcode: '5039',
            email: null,
            phone: '0400000000',
            latitude: -34.985183,
            longitude: 138.571624,
            __typename: 'StoreLocation',
        },
        {
            name: 'Prospect',
            pickup_location_code: 'ALIG003',
            distance: 959.91189654821,
            street: 'Regency Rd',
            city: 'Prospect',
            postcode: '5082',
            email: null,
            phone: '0400000000',
            latitude: -34.873683,
            longitude: 138.580124,
            __typename: 'StoreLocation',
        },
    ],
    __typename: 'StoreLocations',
};

export const mockedAcStoreLocationsArgument = {
    area:{
        coordinates: { lat: -34.962192, lng: 138.638024 },
        radius: 20,
        search_term: 'Adelaide'
    },
    filters: {
        country_id: { eq: 'AU' },
        region: { eq: 'SA' }
    },
    pageSize: 20,
    currentPage: 1
}

export const mockedBcStoreLocations = {
    edges: [
        {
            cursor: '1',
            node: {
                entityId: 1,
                code: 'BC-LOCATION-1',
                label: 'Aligent BC address 1',
                description: null,
                typeId: 'PHYSICAL',
                address: {
                    address1: 'L2/212 Pirie St',
                    address2: '',
                    city: 'Adelaide',
                    code: 'BC-ADDRESS-1',
                    countryCode: 'AU',
                    description: '',
                    email: '',
                    entityId: 1,
                    label: 'Address 1',
                    latitude: -34.92396,
                    longitude: 138.610467,
                    phone: '',
                    postalCode: '5000',
                    stateOrProvince: 'SA',
                },
                distance: null,
                timeZone: null,
                blackoutHours: [],
                metafields: {
                    pageInfo: {
                        hasNextPage: false,
                        hasPreviousPage: false
                    }
                },
                serviceTypeIds: [],
                specialHours: []
            }
        }
    ],
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false
    }
}