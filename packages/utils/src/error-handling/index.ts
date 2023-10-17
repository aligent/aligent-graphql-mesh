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
