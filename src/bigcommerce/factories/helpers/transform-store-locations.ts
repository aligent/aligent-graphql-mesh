import { QuerystoreLocationsArgs, StoreLocation, StoreLocations } from '@mesh';
import {
    BC_CountryCode,
    BC_DistanceFilter,
    BC_InventoryLocationConnection,
    BC_InventoryLocationsArgs,
} from '@mesh/external/BigCommerceGraphqlApi';

export const getTransformedStoreLocationsArgs = (
    acStoreLocationsArgs: QuerystoreLocationsArgs
): BC_InventoryLocationsArgs => {
    const { area, filters } = acStoreLocationsArgs;
    const applyDistanceFilter =
        area?.coordinates &&
        Object.keys(area?.coordinates).length &&
        area?.radius &&
        area?.search_term;
    const bc_InventoryLocationsArgs: BC_InventoryLocationsArgs = {
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
        bc_InventoryLocationsArgs.cities = [search_term];

        // BC_DistanceFilter requires all of radius, lengthUnit, longitude and latitude
        // and radius works with this coordinates only
        // TODO: Converting suburb/postcode to coordinates after AC args passed in
        if (coordinates && Object.keys(coordinates).length && radius) {
            (bc_InventoryLocationsArgs.distanceFilter as BC_DistanceFilter).radius = radius;
            (bc_InventoryLocationsArgs.distanceFilter as BC_DistanceFilter).lengthUnit =
                'Kilometres';

            const { lat, lng } = coordinates;
            (bc_InventoryLocationsArgs.distanceFilter as BC_DistanceFilter).longitude =
                lng as number;
            (bc_InventoryLocationsArgs.distanceFilter as BC_DistanceFilter).latitude =
                lat as number;
        }
    }

    if (filters) {
        const { country_id, region } = filters;

        if (country_id?.eq) {
            bc_InventoryLocationsArgs.countryCodes = [country_id.eq as BC_CountryCode];
        }
        if (region?.eq) {
            bc_InventoryLocationsArgs.states = [region.eq];
        }
    }

    return bc_InventoryLocationsArgs;
};

export const getTransformedStoreLocationItems = (
    bcStoreLocations: BC_InventoryLocationConnection
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
