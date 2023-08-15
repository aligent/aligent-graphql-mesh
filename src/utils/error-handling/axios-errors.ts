import { AxiosResponse, AxiosError } from 'axios';
import { logAndThrowUnknownError } from './base-errors';
/* istanbul ignore file */

/**
 * For displaying Axios errors from multiple APIs in a nice format.
 * Errors that are thrown with new Error, will be shown via "message" in the response from GraphQL, Console errors will show up in AWS and terminal.
 * @param {string} axiosError - The error from Axios, needs to be confirmed first with axios.isAxiosError().
 * @param {string} functionName - Used to display the name of the function, function.name is preferred.
 * @param {string} path - Used for additional info where the error occurred e.g. /v3/api/resource
 */
export const logAndThrowAxiosError = (
    axiosError: AxiosError,
    functionName: string,
    path?: string,
): void => {
    if (path) console.error({ path });

    const response = axiosError.response as AxiosResponse;
    const data = response.data;

    if (data.title) {
        logAndThrowErrorsFromBCRESTApiResponse(response, functionName);
    } else if (data.data?.errMsg) {
        logAndThrowErrorsFromRESTApiResponse(response, functionName);
    } else if (data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response, functionName);
    } else if (data) {
        console.error(
            `Response data: ${JSON.stringify(data)}, statusText: ${
                response.statusText
            }, function name: ${functionName}`
        );
        throw new Error(`Response data: ${JSON.stringify(data)} from: ${functionName}`);
    } else {
        logAndThrowUnknownError(functionName);
    }
};

const logAndThrowErrorsFromGraphQlResponse = (
    response: AxiosResponse,
    functionName: string
): void => {
    let errorResponse = response.data.errors;

    if (Array.isArray(response.data.errors)) {
        errorResponse = response.data.errors[0];

        logErrorAndFunctionName(response.status, functionName, errorResponse.message);
        throw new Error(errorResponse.message);
    } else if (typeof errorResponse === 'object') {
        logErrorAndFunctionName(response.status, functionName, errorResponse.message);
        console.error(`Whole Error: ${JSON.stringify(errorResponse)}`);

        throw new Error(JSON.stringify(errorResponse));
    }

    logAndThrowUnknownError(functionName);
};

const logAndThrowErrorsFromRESTApiResponse = (
    response: AxiosResponse,
    functionName: string
): void => {
    const errorResponse = response.data.data.errMsg;

    if (errorResponse) {
        logErrorAndFunctionName(response.data.code, functionName, errorResponse);
        console.error(`Whole Error: ${JSON.stringify(response.data)}`);
        throw new Error(errorResponse);
    }

    logAndThrowUnknownError(functionName);
};

const logAndThrowErrorsFromBCRESTApiResponse = (
    response: AxiosResponse,
    functionName: string
): void => {
    const errorResponse = response.data.title;

    if (errorResponse) {
        logErrorAndFunctionName(response.data.status, functionName, errorResponse);
        console.error(`Whole Error: ${JSON.stringify(response.data)}`);
        throw new Error(errorResponse);
    }

    logAndThrowUnknownError(functionName);
};

const logErrorAndFunctionName = (code: number, functionName: string, message: string) => {
    console.error(`Code: ${code}`);
    console.error(`Function name: ${functionName}`);
    console.error(`Error message: ${message}`);
};
