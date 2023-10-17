import { GraphqlError } from '@aligent/utils';
import { CartUserErrors } from '../types';

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
 * @param shouldThrowError
 */
export const getCartUserErrors = (
    errors: Array<{
        message: string;
        path: Array<string>;
        locations: Array<{ line: number; column: number }>;
    }>,
    shouldThrowError: boolean = false
): CartUserErrors => {
    if (!errors) return [];

    /*
     * Error messages
     * message: "message":"Not enough stock: Item (76331ce2-ba7e-4d89-9e41-550f45ef6edc) Mona Pullover Hoodlie is out of stock and can't be added to the cart."
     * */
    const hasInsufficientStockError = errors.some(
        (error) => error?.message?.toLowerCase().includes('not enough stock')
    );

    if (hasInsufficientStockError) {
        const insufficientStockError = 'The requested qty is not available';

        console.error(JSON.stringify(errors));

        /* Used in "update" cart flows where there's stock issues. The PWA is expecting a
         * thrown error over "user_errors" */
        if (shouldThrowError) {
            throw new GraphqlError('input', insufficientStockError);
        }

        return [
            {
                message: insufficientStockError,
                code: 'INSUFFICIENT_STOCK',
                path: errors[0].path,
            },
        ];
    }

    /*
     * Error messages
     * message: "Product is not purchasable: The following product cannot be ordered online, so we could not proceed with the checkout: [Sample] Dustpan & Brush"
     * */
    const isNotPurchasableOnline = errors.some(
        (error) => error?.message?.toLowerCase().includes('cannot be ordered online')
    );

    if (isNotPurchasableOnline) {
        const notPurchasableError = 'Some of the products can not be ordered online';

        console.error(JSON.stringify(errors));

        /* Used in "update" cart flows where there's stock issues. The PWA is expecting a
         * thrown error over "user_errors" */
        if (shouldThrowError) {
            throw new GraphqlError('input', notPurchasableError);
        }

        return [
            {
                message: notPurchasableError,
                code: 'NOT_SALABLE',
                path: errors[0].path,
            },
        ];
    }

    /*
     * Error messages
     * message:"Not Found: The requested item is no longer available in the cart"
     * */
    const isProductNotFoundError = errors.some(
        (error) => error?.message?.toLowerCase().includes('not found')
    );

    if (isProductNotFoundError) {
        const notPurchasableError = 'Some of the products are no longer available';

        /* Used in "update" cart flows where there's stock issues. The PWA is expecting a
         * thrown error over "user_errors" */
        if (shouldThrowError) {
            throw new GraphqlError('input', notPurchasableError);
        }

        return [
            {
                message: notPurchasableError,
                code: 'PRODUCT_NOT_FOUND',
                path: errors[0].path,
            },
        ];
    }

    return [];
};