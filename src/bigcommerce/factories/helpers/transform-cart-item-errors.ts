import { CartItemErrorType } from '@mesh';

/**
 * Determines if an items quantity in the cart is allowed and returns an error
 * if it isn't.
 *
 * "only_x_left_in_stock" will only display if the "stock level display" in the admin config
 * is set to "show stock levels"
 *
 * "Admin > settings > products > inventory > stock level"
 *
 * @param cartQty
 * @param inStockAmount
 */
export const getInsufficientStockError = (cartQty: number, inStockAmount?: number | null) => {
    if (!Number.isInteger(inStockAmount) || inStockAmount === null || inStockAmount === undefined)
        return null;

    return inStockAmount < cartQty || inStockAmount === 0
        ? {
              code: 'ITEM_QTY' as CartItemErrorType,
              message: 'The requested qty is not available',
              __typename: 'CartItemError',
          }
        : null;
};

/**
 * Determines if a product is out of stock or no longer purchasable and returns an error value
 * if true
 * @param stockStatus
 */
export const getInStockError = (stockStatus?: string | null) => {
    return stockStatus !== 'IN_STOCK'
        ? {
              code: 'ITEM_QTY' as CartItemErrorType,
              message: 'This item is no longer in stock or not currently purchasable',
              __typename: 'CartItemError',
          }
        : null;
};

/**
 * Gets cart item stock errors
 *
 * @param cartQty
 * @param stockStatus
 * @param onlyXLeftInStock
 */
export const getTransformedCartItemErrors = (
    cartQty: number,
    stockStatus?: string | null,
    onlyXLeftInStock?: number | null
) => {
    const insufficientQtyError = getInsufficientStockError(cartQty, onlyXLeftInStock);

    const inStockError = getInStockError(stockStatus);

    return insufficientQtyError || inStockError
        ? [insufficientQtyError, inStockError].filter(Boolean)
        : null;
};
