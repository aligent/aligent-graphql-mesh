import axios from 'axios';
import { logAndThrowAxiosError, logAndThrowUnknownError } from './axios-errors';
import { GraphQLError } from 'graphql/error';
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

export class GraphqlError extends GraphQLError {
    constructor(
        message: string,
        category?:
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
            | 'no-such-entity'
            /* Internal server error */
            | 'server-internal-error'
            /* Maintenance Mode */
            | 'maintenance-mode'
    ) {
        super(message, {
            extensions: {
                category: `graphql-${category}`,
            },
        });
    }
}
