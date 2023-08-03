export const CONST__INVALID_NEW_URL = {
    href: null,
    origin: null,
    protocol: null,
    username: null,
    password: '',
    host: null,
    hostname: null,
    port: '',
    pathname: null,
    search: '',
    searchParams: null,
    hash: null,
};

/**
 * Return a new URL object based on the url passed to the function
 * @param url
 */
export const getNewUrl = (url: string): URL | typeof CONST__INVALID_NEW_URL => {
    try {
        return new URL(url);
    } catch (e) {
        return CONST__INVALID_NEW_URL;
    }
};
