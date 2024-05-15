import crypto from 'crypto';
import { ImageEdge, Image } from '@aligent/bigcommerce-operations';
import { Maybe, MediaGalleryEntry, ProductImage } from '@aligent/bigcommerce-resolvers';

/**
 * Creates an image id from the image url
 *
 * e.g. returns a unique id from e.g. "/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg"
 *
 * @param url
 */
const createImageIdFromUrl = (url?: string): number | null => {
    if (!url) return null;

    const hash = crypto.createHash('sha256').update(url).digest('hex');
    const truncatedHash = hash.slice(0, 6); // Use the first 6 characters of the hash
    return parseInt(truncatedHash, 16);
};

export const getTransformedImage = (
    image?: Maybe<Image>,
    position?: number | undefined
): Maybe<MediaGalleryEntry> => {
    if (!image) return null;
    const { altText, url } = image;

    const id = createImageIdFromUrl(url);

    return {
        disabled: false,
        file: url,
        id,
        label: altText,
        position: position || 0,
        uid: '',
    };
};

export const getTransformedMediaGalleryEntries = (images: {
    edges?: Maybe<Array<Maybe<ImageEdge>>>;
}): Array<Maybe<MediaGalleryEntry>> => {
    if (!images?.edges || !images?.edges.length) return [];

    return images?.edges
        .map((image, index) => {
            if (!image?.node) return null;
            return getTransformedImage(image.node, index);
        })
        .filter(Boolean);
};

export const getTransformedSmallImage = (
    defaultImage?: Maybe<Image>,
    images?: {
        edges?: Maybe<Array<Maybe<ImageEdge>>>;
    }
): Maybe<ProductImage> => {
    let label = defaultImage?.altText;
    let url = defaultImage?.url;

    /* Fallback to the finding an image in the "images" array if one can't be found with "defaultImage"*/
    if (!url && images) {
        const mediaGalleryEntries = getTransformedMediaGalleryEntries(images);
        url = mediaGalleryEntries?.[0]?.file || '';
        label = mediaGalleryEntries?.[0]?.label || '';
    }

    /* There is a sub resolver at packages/modules/bigcommerce/src/resolvers/queries/sub-query-resolvers/small-image.ts
     * which will fill the "url" with a default image url defined in store configs metafield
     * or another defined in constants.ts */
    return {
        label: label || '',
        url: url || '',
    };
};
