import { Maybe, ProductStockStatus } from '@aligent/bigcommerce-resolvers';
import {
    ProductAvailabilityStatus,
    ProductInventory,
    VariantInventory,
} from '@aligent/bigcommerce-operations';

/**
 * Get a simple products stock status.
 * @param availabilityV2
 * @param inventory
 */
export const getTransformedSimpleStockStatus = (
    availabilityV2: {
        status?: ProductAvailabilityStatus;
    } = {},
    inventory?: Maybe<ProductInventory>
): ProductStockStatus => {
    return availabilityV2.status !== 'Unavailable' && inventory?.isInStock
        ? 'IN_STOCK'
        : 'OUT_OF_STOCK';
};

/**
 * Get a variant products stock status.
 * Variants products have "inventory" and "isPurchasable" properties and unlike
 * simple products they don't have an "availabilityV2" property.
 * @param inventory
 * @param isPurchasable
 */
export const getTransformedVariantStockStatus = (
    inventory?: Maybe<ProductInventory> | Maybe<VariantInventory>,
    isPurchasable?: boolean
): ProductStockStatus => {
    return inventory?.isInStock && isPurchasable ? 'IN_STOCK' : 'OUT_OF_STOCK';
};

export const getTransformedAvailableStock = (
    inventory?: Maybe<ProductInventory> | Maybe<VariantInventory>
): number | null => {
    return inventory?.aggregated?.availableToSell || inventory?.aggregated?.availableToSell === 0
        ? inventory.aggregated.availableToSell
        : null;
};
