import axios from 'axios';
import { logAndThrowAxiosError, logAndThrowUnknownError } from './axios-errors';
import { CartUserErrors } from '../../modules/bigcommerce/src/types';
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

    const isNotPurchasableError = errors.some(
        (error) =>
            error?.message
                ?.toLowerCase()
                .includes('the requested item is no longer available in the cart')
    );

    if (isNotPurchasableError) {
        const notPurchasableError = 'Some of the products are out of stock.';

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

    return [];
};

export class GraphqlError extends Error {
    extensions: {
        category: string;
    };

    constructor(
        category:
            | 'already-exists'
            // When user authentication fails. e.g. Attempting to log in
            | 'authentication'
            /* When user authorization fails. This tells the PWA to clear the cache and kill the user session.
             * E.g. A user is current logged in and input an incorrect password when attempting to update their
             * current password*/
            | 'authorization'
            /* When a query contains invalid input*/
            | 'input'
            /* When an expected resource doesn't exist*/
            | 'no-such-entity',
        message: string
    ) {
        super(message);
        this.extensions = {
            category: `graphql-${category}`,
        };
    }
}

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

/**
 * The error returned to the PWA when axios errors
 */
export class AxiosGraphqlError extends Error {
    extensions: {
        category: string;
    };

    constructor(message: string) {
        super(message);

        this.extensions = {
            category: 'graphql-input',
        };
    }
}
