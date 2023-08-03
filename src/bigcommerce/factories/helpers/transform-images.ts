import {
    BC_Image,
    BC_ImageConnection,
    Maybe,
    MediaGalleryEntry,
    ProductImage,
} from '../../../meshrc/.mesh';

export const getTransformedImage = (
    image: Maybe<BC_Image>,
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

export const getTransformedMediaGalleryEntries = (
    images: BC_ImageConnection
): Array<Maybe<MediaGalleryEntry>> => {
    if (!images?.edges || !images?.edges.length) return [];

    return images?.edges.map((image, index) => {
        if (!image) return null;
        return getTransformedImage(image.node, index);
    });
};

export const getTransformedSmallImage = (defaultImage?: Maybe<BC_Image>): Maybe<ProductImage> => {
    if (!defaultImage)
        return {
            url: '',
        };
    const { url } = defaultImage;

    return {
        url,
    };
};
