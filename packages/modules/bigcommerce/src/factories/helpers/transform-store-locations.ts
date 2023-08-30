import {
    QueryStoreLocationsArgs,
    StoreLocation,
    StoreLocations,
} from '@aligent/bigcommerce-resolvers';
import {
    CountryCode,
    DistanceFilter,
    InventoryLocationConnection,
    InventoryLocationsArgs,
} from '@aligent/bigcommerce-operations';

export const getTransformedStoreLocationsArgs = (
    acStoreLocationsArgs: QueryStoreLocationsArgs
): InventoryLocationsArgs => {
    const { area, filters } = acStoreLocationsArgs;
    const applyDistanceFilter =
        area?.coordinates &&
        Object.keys(area?.coordinates).length &&
        area?.radius &&
        area?.search_term;
    const InventoryLocationsArgs: InventoryLocationsArgs = {
        countryCodes: [],
        states: [],
        cities: [],
        ...(applyDistanceFilter && {
            distanceFilter: {
                latitude: 0,
                longitude: 0,
                radius: 0,
                lengthUnit: 'Kilometres',
            },
        }),
    };

    if (area) {
        const { radius, search_term, coordinates } = area;
        InventoryLocationsArgs.cities = [search_term];

        // DistanceFilter requires all of radius, lengthUnit, longitude and latitude
        // and radius works with this coordinates only
        // TODO: Converting suburb/postcode to coordinates after AC args passed in
        if (coordinates && Object.keys(coordinates).length && radius) {
            (InventoryLocationsArgs.distanceFilter as DistanceFilter).radius = radius;
            (InventoryLocationsArgs.distanceFilter as DistanceFilter).lengthUnit = 'Kilometres';

            const { lat, lng } = coordinates;
            (InventoryLocationsArgs.distanceFilter as DistanceFilter).longitude = lng as number;
            (InventoryLocationsArgs.distanceFilter as DistanceFilter).latitude = lat as number;
        }
    }

    if (filters) {
        const { country_id, region } = filters;

        if (country_id?.eq) {
            InventoryLocationsArgs.countryCodes = [country_id.eq as CountryCode];
        }
        if (region?.eq) {
            InventoryLocationsArgs.states = [region.eq];
        }
    }

    return InventoryLocationsArgs;
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
            name: location?.node?.address?.label,
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
