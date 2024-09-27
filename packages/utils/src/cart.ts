import { atob, btoa } from './encode-decode';
import { isTruthy } from './is-truthy';

/**
 * @module createCartItemUid
 * Creates a cart item uid formed by the combination of the cartItemId
 * productEntityId and VariantEntityId if they exist.
 *
 * The reverse function to this is at:
 * @see getDeconstructedCartItemUid
 *
 * @param lineItemEntityId
 * @param productEntityId
 * @param variantEntityId
 */
export const createCartItemUid = (
    lineItemEntityId: string,
    productEntityId: number,
    variantEntityId?: number | null
): string => {
    const uidItems = [lineItemEntityId, productEntityId, variantEntityId]
        .filter(isTruthy)
        .join('/');

    return btoa(uidItems);
};

/**
 * @module getDeconstructedCartItemUid
 * Extracts and returns the cart items properties which form the "cartItemUid".
 *
 * The function which forms the "cartItemUid" can be found at:
 * @see createCartItemUid
 *
 * @param cartItemUid
 */
export const getDeconstructedCartItemUid = (
    cartItemUid: string
): { lineItemEntityId: string; productEntityId: number; variantEntityId?: number | null } => {
    const decodedUid = atob(cartItemUid);

    const [lineItemEntityId, productEntityId, variantEntityId] = decodedUid.split('/');

    return {
        lineItemEntityId,
        productEntityId: Number(productEntityId),
        variantEntityId: variantEntityId ? Number(variantEntityId) : null,
    };
};
