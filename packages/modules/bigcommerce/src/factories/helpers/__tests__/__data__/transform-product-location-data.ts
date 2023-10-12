import { Maybe } from '@aligent/bigcommerce-resolvers';
import { InventoryByLocations, VariantInventory } from '@aligent/bigcommerce-operations';

export const productInventoryLocation: VariantInventory = {
    isInStock: true,
    aggregated: {
        availableToSell: 31,
        warningLevel: 2,
    },
    byLocation: {
        edges: [
            {
                // @ts-expect-error: error is due to required but deprecated field locationEntityServiceTypeIds
                node: {
                    locationEntityId: 1,
                    locationEntityCode: 'BC-LOCATION-1',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 11,
                    warningLevel: 2,
                    isInStock: true,
                },
            },
            {
                // @ts-expect-error: error is due to required but deprecated field locationEntityServiceTypeIds
                node: {
                    locationEntityId: 2,
                    locationEntityCode: 'BIGC-2',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 20,
                    warningLevel: 0,
                    isInStock: true,
                },
            },
            {
                // @ts-expect-error: error is due to required but deprecated field locationEntityServiceTypeIds
                node: {
                    locationEntityId: 3,
                    locationEntityCode: '',
                    locationEntityTypeId: 'PHYSICAL',
                    locationDistance: null,
                    availableToSell: 0,
                    warningLevel: 0,
                    isInStock: false,
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
        __typename: 'ByLocation',
    },
];
