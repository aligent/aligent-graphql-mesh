import { InventoryLocationConnection, Product } from '@aligent/bigcommerce-operations';
import {
    StockAvailabilityStatus,
    StoreAvailabilities,
    StoreAvailability,
} from '@aligent/bigcommerce-resolvers';

export const getTransformedStoreAvailabilityData = (
    storeAvailabilityResponse: Product,
    storeLocationsResponse: InventoryLocationConnection
): StoreAvailabilities => {
    const storeAvailabilityItems: StoreAvailability[] = [];

    storeAvailabilityResponse.variants.edges?.forEach((variant) => {
        variant?.node.inventory?.byLocation?.edges?.forEach((location) => {
            const detailedLocation = storeLocationsResponse.edges?.find(
                (locationWithAddressData) =>
                    locationWithAddressData?.node.entityId === location?.node.locationEntityId
            );

            if (!detailedLocation?.node.address || !location) return;

            const { entityId, address, label, distance, code } = detailedLocation.node;

            const item = {
                location: {
                    id: entityId,
                    city: address.city,
                    distance: distance?.value,
                    email: address.email,
                    name: label,
                    phone: address.phone,
                    postcode: address.postalCode,
                    street: address.address1,
                    pickup_location_code: code,
                },
                locationAvailabilityStatus:
                    location?.node.availableToSell > 0
                        ? 'AVAILABLE'
                        : ('UNAVAILABLE' as StockAvailabilityStatus),
            };

            storeAvailabilityItems.push(item);
        });
    });

    return {
        items: storeAvailabilityItems,
    };
};
