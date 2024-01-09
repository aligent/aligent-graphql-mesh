/**
 * Match a leading or trailing slash on a string
 *
 * Example Matches
 *   /products/
 *   /products/all/
 *   products/
 *
 * Non-matches
 *   products
 *   products/all
 *
 * Usage
 *   Within `string.replace`: '/products/'.replace(slashAtStartOrEnd, '') === 'products'
 */
export const slashAtStartOrEnd = /(^\/|\/$)/g;
