import { Product as OroProduct } from '../../types';
import { MediaGalleryEntry, ProductImage } from '@aligent/orocommerce-resolvers';
import { createImageIdFromUrl } from '../../utils';

const DEFAULT_IMAGE = '/media/cache/resolve/product_large/bundles/oroproduct/images/no_image.png';

export const getTransformedSmallImage = (oroProduct: OroProduct): ProductImage => {
    const imageFiles = oroProduct.included?.flatMap((res) => {
        return res.type === 'productimages' &&
            res.attributes.types.includes('listing') &&
            res.relationships?.product.data.id === oroProduct.id
            ? res.attributes.files
            : [];
    });

    const smallImage = imageFiles?.find((file) => {
        return file.dimension === 'product_gallery_main';
    });

    return {
        __typename: 'ProductImage',
        label: '',
        url: smallImage?.url || DEFAULT_IMAGE,
    };
};

export const getTransformedMediaGalleryEntries = (
    oroProduct: OroProduct
): Array<MediaGalleryEntry> => {
    const imageFiles = oroProduct.included?.flatMap((res) => {
        return res.type === 'productimages' && res.relationships?.product.data.id === oroProduct.id
            ? res.attributes.files
            : [];
    });

    if (!imageFiles || imageFiles.length === 0) {
        return [
            {
                __typename: 'MediaGalleryEntry',
                disabled: false,
                file: DEFAULT_IMAGE,
                id: createImageIdFromUrl(DEFAULT_IMAGE),
                label: '',
                position: 1,
                uid: '',
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
                uid: '',
            };
        });
};
