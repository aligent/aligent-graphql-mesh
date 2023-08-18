import { AxiosError, AxiosResponse } from 'axios';
/* istanbul ignore file */
//TODO: MICRO-142: add tests for this file at later point

/* istanbul ignore file */
//TODO: MICRO-142: add tests for this file at later point

export const logAndThrowAxiosError = (
    axiosError: AxiosError,
    functionName?: string,
    message?: string
): never => {
    const response = axiosError.response as AxiosResponse;
    const data = response.data;
    if (message) console.error({ message });

    if (!data) {
        logAndThrowUnknownError(functionName, 'No data object on on axiosError.response');
    } else if (data.title) {
        logAndThrowErrorsFromBCRESTApiResponse(response, functionName);
    } else if (data.data?.errMsg) {
        logAndThrowErrorsFromRESTApiResponse(response, functionName);
    } else if (data.errors) {
        logAndThrowErrorsFromGraphQlResponse(response, functionName);
    } else if (data) {
        console.error(
            `Response data: ${JSON.stringify(data)}, statusText: ${
                response.statusText
            }, function name: ${functionName}.`
        );
        throw new Error(`Response data: ${data}`);
    }

    return logAndThrowUnknownError(axiosError, functionName);
};

export const logAndThrowUnknownError = (
    error: unknown,
    functionName?: string,
    message?: string
): never => {
    if (!functionName || !message) {
        console.error(error);
        throw new Error(`${error}`);
    } else {
        console.error(`${error} ${functionName} ${message}`);
        throw new Error(`${error} ${functionName} ${message}`);
    }
};

const logErrorAndFunctionName = (code: number, functionName?: string, message?: string) => {
    console.error(`Code: ${code}`);
    console.error(`Function name: ${functionName}`);
    console.error(`Error message: ${message}`);
};

const logAndThrowErrorsFromGraphQlResponse = (
    response: AxiosResponse,
    functionName?: string
): never => {
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

    return logAndThrowUnknownError(
        functionName,
        `Unknown error from ${logAndThrowErrorsFromGraphQlResponse.name}`
    );
};

const logAndThrowErrorsFromRESTApiResponse = (
    response: AxiosResponse,
    functionName?: string
): never => {
    const errorResponse = response.data.data.errMsg;

    if (errorResponse) {
        logErrorAndFunctionName(response.data.code, functionName, errorResponse);
        console.error(`Whole Error: ${JSON.stringify(response.data)}`);
        throw new Error(errorResponse);
    }

    return logAndThrowUnknownError(
        functionName,
        `Unknown error from ${logAndThrowErrorsFromRESTApiResponse.name}`
    );
};

const logAndThrowErrorsFromBCRESTApiResponse = (
    response: AxiosResponse,
    functionName?: string
): never => {
    const errorResponse = response.data.title;

    if (errorResponse) {
        logErrorAndFunctionName(response.data.status, functionName, errorResponse);
        console.error(`Whole Error: ${JSON.stringify(response.data)}`);
        throw new Error(errorResponse);
    }

    return logAndThrowUnknownError(
        functionName,
        `Unknown error from ${logAndThrowErrorsFromBCRESTApiResponse.name}`
    );
};
