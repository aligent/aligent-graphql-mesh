import { Maybe, ProductStockStatus } from '@mesh';
import {
    BC_ProductAvailabilityStatus,
    BC_ProductInventory,
    BC_VariantInventory,
} from '@mesh/external/BigCommerceGraphqlApi';

/**
 * Get a simple products stock status.
 * @param availabilityV2
 * @param inventory
 */
export const getTransformedSimpleStockStatus = (
    availabilityV2: {
        status?: BC_ProductAvailabilityStatus;
    } = {},
    inventory?: Maybe<BC_ProductInventory>
): ProductStockStatus => {
    return availabilityV2.status === 'Available' && inventory?.isInStock
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
    inventory?: Maybe<BC_ProductInventory> | Maybe<BC_VariantInventory>,
    isPurchasable?: boolean
): ProductStockStatus => {
    return inventory?.isInStock && isPurchasable ? 'IN_STOCK' : 'OUT_OF_STOCK';
};

export const getTransformedAvailableStock = (
    inventory?: Maybe<BC_ProductInventory> | Maybe<BC_VariantInventory>
): number | null => {
    return inventory?.aggregated?.availableToSell || inventory?.aggregated?.availableToSell === 0
        ? inventory.aggregated.availableToSell
        : null;
};
