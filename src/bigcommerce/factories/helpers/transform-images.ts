import { BC_ImageEdge, BC_Image } from '@mesh/external/BigCommerceGraphqlApi';
import { Maybe, MediaGalleryEntry, ProductImage } from '@mesh';

export const getTransformedImage = (
    image?: Maybe<BC_Image>,
    position?: number | undefined
): Maybe<MediaGalleryEntry> => {
    if (!image) return null;
    const { altText, url } = image;

    return {
        disabled: false,
        file: url,
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
            return getTransformedImage(image.node, index);
        })
        .filter(Boolean);
};

export const getTransformedSmallImage = (defaultImage?: Maybe<BC_Image>): Maybe<ProductImage> => ({
    url: defaultImage?.url || '',
});
