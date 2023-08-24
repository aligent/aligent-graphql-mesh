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
