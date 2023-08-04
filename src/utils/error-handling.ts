import { isAxiosError } from 'axios';
/* istanbul ignore file */
/**
 * Log and throw an error
 *
 * Extra context can be provided but isn't necessary in most instances (the stack trace is
 * reasonably useful)
 *
 * @param error the error to throw
 * @param context a map of extra contextual information
*/
export const logAndThrowError = (error: Error, context?: Record<string, string>) => {
    const logMessages = [`ERROR: ${JSON.stringify(error)}`];

    if (context !== undefined) {
        logMessages.push(`Context: ${JSON.stringify(context)}`);
    }

    let userMessage = "Unknown Server Error";
    if (isAxiosError(error)) {
        userMessage = JSON.stringify(error?.response);
        if(error.response?.data?.title) {
            userMessage = error.response.data.title;
        }
        logMessages.push(JSON.stringify(userMessage));
    }

    const message = logMessages.join('\n')
    console.log(logMessages);
    throw new Error(userMessage);
}
