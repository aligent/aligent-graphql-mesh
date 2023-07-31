/**
 * Return a new URL object based on the url passed to the function
 * @param url
 */
export const getNewUrl = (url: string): URL | null => {
    try {
        return new URL(url);
    } catch (e) {
        return null;
    }
};
