/**
 * Checks cart related errors and throws an error if any are a match
 *
 * [{
 *    "message":"Not enough stock: Item (76331ce2-ba7e-4d89-9e41-550f45ef6edc) Mona Pullover Hoodlie is out of stock and can't be added to the cart.",
 *    "path":["cart","updateCartLineItem"],
 *    "locations":[{"line":1,"column":116}]
 * }]
 *
 * [{
 *     "message":"Not Found: The requested item is no longer available in the cart",
 *     "path":["cart","addCartLineItems"],
 *     "locations":[{"line":1,"column":87}]
 * }]
 *
 * @param errors
 */
export const handleCartItemErrors = (
    errors: Array<{
        message: string;
        path: Array<string>;
        locations: Array<{ line: number; column: number }>;
    }>
) => {
    const hasInsufficientStockError = errors.some(
        (error) => error?.message?.toLowerCase().includes('not enough stock')
    );

    if (hasInsufficientStockError) {
        console.error(JSON.stringify(errors));
        throw new Error('Not enough stock');
    }

    const isNotPurchasableError = errors.some(
        (error) =>
            error?.message
                ?.toLowerCase()
                .includes('the requested item is no longer available in the cart')
    );

    if (isNotPurchasableError) {
        console.error(JSON.stringify(errors));
        throw new Error('Item is not purchasable');
    }
};
