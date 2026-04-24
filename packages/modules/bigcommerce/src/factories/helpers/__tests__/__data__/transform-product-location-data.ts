import { VariantInventory } from '@aligent/bigcommerce-operations';

export const productInventoryLocation: VariantInventory = {
    isInStock: true,
    aggregated: {
        availableToSell: 31,
        availableOnHand: 31,
        warningLevel: 2,
        unlimitedBackorder: false,
    },
    byLocation: {
        pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
        },
        edges: [
            {
                cursor: 'cursor1',
                node: {
                    locationEntityId: 1,
                    locationEntityCode: 'BC-LOCATION-1',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 11,
                    warningLevel: 2,
                    isInStock: true,
                    backorderMessage: '',
                    locationEntityServiceTypeIds: [],
                },
            },
            {
                cursor: 'cursor2',
                node: {
                    locationEntityId: 2,
                    locationEntityCode: 'BIGC-2',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 20,
                    warningLevel: 0,
                    isInStock: true,
                    backorderMessage: '',
                    locationEntityServiceTypeIds: [],
                },
            },
            {
                cursor: 'cursor3',
                node: {
                    locationEntityId: 3,
                    locationEntityCode: '',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 0,
                    warningLevel: 0,
                    isInStock: false,
                    backorderMessage: '',
                    locationEntityServiceTypeIds: [],
                },
            },
        ],
    },
};

export const transformedProductLocations = [
    {
        locationEntityId: 1,
        locationEntityCode: 'BC-LOCATION-1',
        locationEntityTypeId: 'PHYSICAL',
        locationDistance: null,
        availableToSell: 11,
        warningLevel: 2,
        isInStock: true,
        backorderMessage: '',
        locationEntityServiceTypeIds: [],
        __typename: 'ByLocation',
    },
    {
        locationEntityId: 2,
        locationEntityCode: 'BIGC-2',
        locationEntityTypeId: 'PHYSICAL',
        locationDistance: null,
        availableToSell: 20,
        warningLevel: 0,
        isInStock: true,
        backorderMessage: '',
        locationEntityServiceTypeIds: [],
        __typename: 'ByLocation',
    },
    {
        locationEntityId: 3,
        locationEntityCode: '',
        locationEntityTypeId: 'PHYSICAL',
        locationDistance: null,
        availableToSell: 0,
        warningLevel: 0,
        isInStock: false,
        backorderMessage: '',
        locationEntityServiceTypeIds: [],
        __typename: 'ByLocation',
    },
];
