import axios from 'axios';
import { logAndThrowAxiosError, logAndThrowUnknownError } from './axios-errors';
/* istanbul ignore file */

/**
 * This is the default error throwing function to use when not making an API call .
 * @param {Error} error - The error to be thrown will be an unknown or Axios error type
 * @param {string} functionName - Used to display the name of the function, function.name is preferred.
 * @param {string} message - An optional message to be logged and thrown.
 */
export const logAndThrowError = (
    error: unknown,
    functionName?: string,
    message?: string
): never => {
    if (axios.isAxiosError(error)) {
        return logAndThrowAxiosError(error, functionName, message);
    } else {
        return logAndThrowUnknownError(error, functionName, message);
    }
};

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

/**
 * A specific error when decrypting the meshToken fails
 */
export class AuthorizationError extends Error {
    extensions: {
        category: string;
    };

    constructor(message: string) {
        super(message);

        /* Adding this "extensions" object tells the PWA that the users authorization token
         * has expired. Actions will follow in the PWA to log the user out and remove
         * session related data from browser storage. */
        this.extensions = {
            category: 'graphql-authorization',
        };
    }
}
