import { AxiosResponse, AxiosError } from 'axios';
/* istanbul ignore file */

/*
    Errors that are thrown with new Error, will be shown via "message" in the response from GraphQL,
    Console logs will show up in AWS and terminal.
 */
export const throwAndLogAxiosError = (
    axiosError: AxiosError,
    functionName: string,
    path?: string,
    extraInfo?: Record<string, string>
): void => {
    if (path) console.log({ path });
    if (extraInfo) console.log({ extraInfo });

    const response = axiosError.response as AxiosResponse;
    const data = response.data;

    if (data.title) {
        logAndThrowErrorsFromBCRESTApiResponse(response, functionName);
    } else if (data.data?.errMsg) {
        logAndThrowErrorsFromRESTApiResponse(response, functionName);
    } else if (data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response, functionName);
    } else if (data) {
        console.log(
            `Response data: ${JSON.stringify(data)}, statusText: ${
                response.statusText
            }, function name: ${functionName}`
        );
        throw new Error(`Response data: ${JSON.stringify(data)} from: ${functionName}`);
    } else {
        logAndThrowUnknownError(functionName);
    }
};

const logErrorAndFunctionName = (code: number, functionName: string, message: string) => {
    console.log(`Code: ${code}`);
    console.log(`Function name: ${functionName}`);
    console.log(`Error message: ${message}`);
};

export const logAndThrowUnknownError = (functionName: string, path?: string): void => {
    console.log(`There was an unknown error in the ${functionName} function, path: ${path}`);
    throw new Error(`There was an unknown error in the ${functionName} function`);
};

export const logAndThrowErrorsFromGraphQlResponse = (
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
        console.log(`Whole Error: ${JSON.stringify(errorResponse)}`);

        throw new Error(JSON.stringify(errorResponse));
    }

    logAndThrowUnknownError(functionName);
};

export const logAndThrowErrorsFromRESTApiResponse = (
    response: AxiosResponse,
    functionName: string
): void => {
    const errorResponse = response.data.data.errMsg;

    if (errorResponse) {
        logErrorAndFunctionName(response.data.code, functionName, errorResponse);
        console.log(`Whole Error: ${JSON.stringify(response.data)}`);
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
        console.log(`Whole Error: ${JSON.stringify(response.data)}`);
        throw new Error(errorResponse);
    }

    logAndThrowUnknownError(functionName);
};

// This is the default error throwing function to use when not making an API call
export const logAndThrowError = (message: string, path?: string) => {
    if (path) console.log({ path });
    console.log(message);
    throw new Error(message);
};
