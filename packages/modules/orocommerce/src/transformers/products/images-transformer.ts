import { Product as OroProduct } from '../../types';
import { MediaGalleryEntry, ProductImage } from '@aligent/orocommerce-resolvers';
import { createImageIdFromUrl } from '../../utils';

const DEFAULT_IMAGE_URL =
    '/media/cache/resolve/product_large/bundles/oroproduct/images/no_image.png';

// The relative path to the small image, which is used on catalog pages.
// Oro uses 'listing' type to indicate this type of images
export const getTransformedSmallImage = (oroProduct: OroProduct): ProductImage => {
    const imageFiles = oroProduct.included?.flatMap((res) => {
        return res.type === 'productimages' &&
            res.attributes.types.includes('listing') &&
            res.relationships?.product.data.id === oroProduct.id
            ? res.attributes.files
            : [];
    });

    // Oro stores each image in different dimensions suited for different display purposes
    const smallImage = imageFiles?.find((file) => {
        return file.dimension === 'product_gallery_main';
    });

    return {
        __typename: 'ProductImage',
        label: '',
        url: smallImage?.url || DEFAULT_IMAGE_URL,
    };
};

// An array of media gallery objects.
export const getTransformedMediaGalleryEntries = (
    oroProduct: OroProduct
): Array<MediaGalleryEntry> => {
    const imageFiles = oroProduct.included?.flatMap((res) => {
        return res.type === 'productimages' && res.relationships?.product.data.id === oroProduct.id
            ? res.attributes.files
            : [];
    });

    // TODO: pass meaningfully label to put in the img.alt tag for SEO/accessibility purposes (OTF-129)
    if (!imageFiles || imageFiles.length === 0) {
        return [
            {
                __typename: 'MediaGalleryEntry',
                disabled: false,
                file: DEFAULT_IMAGE_URL,
                id: createImageIdFromUrl(DEFAULT_IMAGE_URL),
                label: '',
                position: 1,
                uid: btoa(DEFAULT_IMAGE_URL),
            },
        ];
    }

    return imageFiles
        .filter((res) => {
            return res.dimension === 'product_original';
        })
        .sort((a) => {
            if (a.types.includes('main')) return -1;
            return 0;
        })
        .map((file, index) => {
            return {
                __typename: 'MediaGalleryEntry',
                disabled: false,
                file: file.url,
                id: createImageIdFromUrl(file.url),
                label: '',
                position: index + 1,
                uid: btoa(file.url),
            };
        });
};
