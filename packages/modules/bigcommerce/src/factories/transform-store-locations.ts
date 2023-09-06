import {
    QueryStoreLocationsArgs,
    StoreLocation,
    StoreLocations,
} from '@aligent/bigcommerce-resolvers';
import {
    DistanceFilter,
    InventoryLocationConnection,
    InventoryLocationsArgs,
} from '@aligent/bigcommerce-operations';
import { coordinatesLookup } from '../apis/helpers/google-geocoding';

export const getTransformedStoreLocationsArgs = async (
    acStoreLocationsArgs: QueryStoreLocationsArgs
): Promise<InventoryLocationsArgs> => {
    const { area, filters } = acStoreLocationsArgs;

    const inventoryLocationsArgs: InventoryLocationsArgs = {
        distanceFilter: {
            latitude: 0,
            longitude: 0,
            radius: 0,
            lengthUnit: 'Kilometres',
        },
    };

    if (area) {
        const { radius, search_term, coordinates } = area;

        (inventoryLocationsArgs.distanceFilter as DistanceFilter).radius = radius;

        if (coordinates && Object.keys(coordinates).length) {
            const { lat, lng } = coordinates;

            (inventoryLocationsArgs.distanceFilter as DistanceFilter).longitude = lng as number;
            (inventoryLocationsArgs.distanceFilter as DistanceFilter).latitude = lat as number;
        } else {
            const coordinatesLookupResponse = await coordinatesLookup(
                search_term,
                filters?.country_id?.eq as string
            );

            if (coordinatesLookupResponse) {
                const { lat, lng } = coordinatesLookupResponse;
                (inventoryLocationsArgs.distanceFilter as DistanceFilter).longitude = lng as number;
                (inventoryLocationsArgs.distanceFilter as DistanceFilter).latitude = lat as number;
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
            distance: location?.node?.distance?.value,
            email: location?.node?.address?.email,
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
