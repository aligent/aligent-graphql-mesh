/**
 * Forms an url path from a product "url_key"
 * @param url_key
 */
export const getPathFromUrlKey = (url_key: string | null): string | null => {
    if (!url_key) return null;

    // Removes "html" from the string if it doesn't exist
    let pathname = url_key.replace(/\.html$/, '');

    // Removes any slashes "/" with no string in front of it
    pathname = pathname.replace(/\/$/, '');

    // ensures there's a slash "/" at the beginning of the string
    if (!pathname.startsWith('/')) {
        pathname = '/' + pathname;
    }

    return pathname;
};
