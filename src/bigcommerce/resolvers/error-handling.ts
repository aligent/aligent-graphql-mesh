import { isAxiosError } from 'axios';
/* istanbul ignore file */
/**
 * Log and throw an error
 *
 * Extra context can be provided but isn't necesarry in most instances (the stack trace is
 * reasonably userful)
 *
 * @param error the error to throw
 * @param context a map of extra contextual information
*/
export const logAndThrowError = (error: Error, context?: Record<string, string>) => {
    const messages = [`ERROR: ${JSON.stringify(error)}`];

    if (context !== undefined) {
        messages.push(`Context: ${JSON.stringify(context)}`);
    }

    if (isAxiosError(error)) {
        messages.push(JSON.stringify(error.response));
    }

    const message = messages.join('\n')
    console.log(message);
    throw new Error(message);
}
