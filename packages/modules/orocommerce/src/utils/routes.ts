import { btoa } from '@aligent/utils';

/**
 * Extracts the id from a category "apiUrl", encodes it to base 64 and returns
 * it.
 *
 * apiUrl: '/api/products?filter%5BrootCategory%5D%5Bgte%5D=5'
 *
 * @param apiUrl
 */
export const getUidFromCategoryApiUrl = (apiUrl: string): string => {
    const apiUrlParts = apiUrl.split('=');

    return btoa(apiUrlParts[apiUrlParts.length - 1]);
};

/**
 * Extracts and returns the id from a landing page "apiUrl".
 *
 * apiUrl: '/api/landingpages/1'
 *
 * @param apiUrl
 */
export const getIdFromLandingPageApiUrl = (apiUrl: string) => {
    const apiUrlParts = apiUrl.split('/');

    return apiUrlParts[apiUrlParts.length - 1];
};
