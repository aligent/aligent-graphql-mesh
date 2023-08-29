import { Maybe, ProductStockStatus } from '@mesh';
import { BC_ProductInventory, BC_VariantInventory } from '@mesh/external/BigCommerceGraphqlApi';

export const getTransformedStockStatus = (
    inventory?: Maybe<BC_ProductInventory> | Maybe<BC_VariantInventory>
): ProductStockStatus => {
    return inventory?.isInStock ? 'IN_STOCK' : 'OUT_OF_STOCK';
};

export const getTransformedAvailableStock = (
    inventory?: Maybe<BC_ProductInventory> | Maybe<BC_VariantInventory>
): number | null => {
    return inventory?.aggregated?.availableToSell || inventory?.aggregated?.availableToSell === 0
        ? inventory.aggregated.availableToSell
        : null;
};
