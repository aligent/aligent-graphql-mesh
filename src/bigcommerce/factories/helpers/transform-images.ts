import {
    BC_Image,
    BC_ImageEdge,
    Maybe,
    MediaGalleryEntry,
    ProductImage,
} from '../../../meshrc/.mesh';
import { atob } from '../../../utils';

const DEFAULT_IMAGE =
    'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif';

/**
 * Gets the image id from the image url
 *
 * e.g. returns 96543 from "/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg"
 *
 * @param url
 */
const getImageIdFromUrl = (url?: string): number | null => {
    if (!url) return null;

    const pattern = /__(\d+)\.\d+\.jpg/;

    const match = pattern.exec(url);

    return match && match[1] ? Number(match[1]) : null;
};

export const getTransformedImage = (
    image?: Maybe<BC_ImageEdge>,
    position?: number | undefined
): Maybe<MediaGalleryEntry> => {
    if (!image?.node) return null;
    const { altText, url } = image.node;

    const id = getImageIdFromUrl(url);

    return {
        disabled: false,
        file: url,
        id: id || position,
        label: altText,
        position: position || 0,
        uid: '',
    };
};

export const getTransformedMediaGalleryEntries = (images: {
    edges?: Maybe<Array<Maybe<BC_ImageEdge>>>;
}): Array<Maybe<MediaGalleryEntry>> => {
    if (!images?.edges || !images?.edges.length) return [];

    return images?.edges
        .map((image, index) => {
            if (!image) return null;
            return getTransformedImage(image, index);
        })
        .filter(Boolean);
};

export const getTransformedSmallImage = (defaultImage?: Maybe<BC_Image>): Maybe<ProductImage> => ({
    url: defaultImage?.url || DEFAULT_IMAGE,
});
