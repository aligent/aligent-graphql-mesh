import {
    QueryStoreLocationsArgs,
    StoreLocation,
    StoreLocations,
} from '@aligent/bigcommerce-resolvers';
import {
    InventoryLocationConnection,
    InventoryLocationsArgs,
} from '@aligent/bigcommerce-operations';
import { coordinatesLookup } from '../apis/helpers/google-geocoding';

export const getTransformedStoreLocationsArgs = async (
    acStoreLocationsArgs: QueryStoreLocationsArgs,
    customerImpersonationToken: string
): Promise<InventoryLocationsArgs> => {
    const { area, filters } = acStoreLocationsArgs;

    const inventoryLocationsArgs: InventoryLocationsArgs = {};

    if (area) {
        const { radius, search_term, coordinates } = area;

        if (!search_term && !coordinates) return inventoryLocationsArgs;

        inventoryLocationsArgs.distanceFilter = {
            latitude: 0,
            longitude: 0,
            radius: radius,
            lengthUnit: 'Kilometres',
        };

        if (coordinates && Object.keys(coordinates).length) {
            const { lat, lng } = coordinates;

            inventoryLocationsArgs.distanceFilter.longitude = lng as number;
            inventoryLocationsArgs.distanceFilter.latitude = lat as number;
        } else {
            const coordinatesLookupResponse = await coordinatesLookup(
                search_term,
                filters?.country_id?.eq as string,
                customerImpersonationToken
            );

            if (coordinatesLookupResponse) {
                const { lat, lng } = coordinatesLookupResponse;
                inventoryLocationsArgs.distanceFilter.longitude = lng as number;
                inventoryLocationsArgs.distanceFilter.latitude = lat as number;
            }
        }
    }

    return inventoryLocationsArgs;
};

export const getTransformedStoreLocationItems = (
    bcStoreLocations: InventoryLocationConnection
): StoreLocations => {
    const locationItems: StoreLocation[] | undefined = bcStoreLocations.edges?.map((location) => {
        return {
            city: location?.node?.address?.city,
            code: location?.node?.code,
            distance: location?.node?.distance?.value,
            email: location?.node?.address?.email,
            id: location?.node.entityId,
            latitude: location?.node?.address?.latitude,
            longitude: location?.node?.address?.longitude,
            name: location?.node?.label,
            phone: location?.node?.address?.phone,
            pickup_location_code: location?.node?.address?.code,
            postcode: location?.node?.address?.postalCode,
            street: location?.node?.address?.address1,
        };
    });

    return {
        items: locationItems,
    };
};
