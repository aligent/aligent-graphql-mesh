/**
 * Returns true or false if a string is a stringified JSON object
 * @param value
 */
export function isJsonString(value: unknown) {
    if (typeof value !== 'string') return false;
    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
}
