import crypto from 'crypto';

/**
 * Creates an image id from the image url
 *
 * e.g. returns a unique id from e.g. "/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg"
 *
 * @param url
 */
export const createImageIdFromUrl = (url?: string): number | null => {
    if (!url) return null;

    const hash = crypto.createHash('sha256').update(url).digest('hex');
    const truncatedHash = hash.slice(0, 6); // Use the first 6 characters of the hash
    return parseInt(truncatedHash, 16);
};
