import crypto from 'crypto';
import { ImageEdge, Image } from '@aligent/bigcommerce-operations';
import { Maybe, MediaGalleryEntry, ProductImage } from '@aligent/bigcommerce-resolvers';

export const DEFAULT_IMAGE =
    'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif';

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

export const getTransformedSmallImage = (defaultImage?: Maybe<Image>): Maybe<ProductImage> => ({
    label: defaultImage?.altText || '',
    url: defaultImage?.url || DEFAULT_IMAGE,
});
