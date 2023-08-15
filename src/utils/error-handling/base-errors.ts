/**
 * This is the default error throwing function to use when not making an API call .
 * @param {string} message - The message to be logged and thrown.
 * @param {string} path - Used for additional info where the error occurred e.g. /v3/api/resource
 */
export const logAndThrowError = (message: string, path?: string) => {
    if (path) console.error({ path });
    console.error(message);
    throw new Error(message);
};

/**
 * This is the backup error handler used when the type of error is unknown.
 * @param {string} functionName - Used to display the name of the function, function.name is preferred.
 * @param {string} path - Used for additional info where the error occurred e.g. /v3/api/resource
 */
export const logAndThrowUnknownError = (functionName: string, path?: string): void => {
    console.error(`From ${functionName} function, path: ${path}`);
    throw new Error(`From ${functionName} function`);
};
