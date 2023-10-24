import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import {
    DEFAULT_IMAGE,
    getTransformedMediaGalleryEntries,
    getTransformedSmallImage,
} from '../transform-images';
import { ImageEdge } from '@aligent/bigcommerce-operations';

describe('transform-image', () => {
    it('Gets small_image data from the bc default image', () => {
        expect(getTransformedSmallImage(mockBcProducts[0].defaultImage)).toEqual({
            label: '',
            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
        });
    });

    it(`Returns a default image when no default image exists`, () => {
        expect(getTransformedSmallImage(null)).toEqual({
            label: '',
            url: DEFAULT_IMAGE,
        });
    });

    it('transforms bc product "image" data into a AC "media_gallery_entries" structure', () => {
        expect(getTransformedMediaGalleryEntries(mockBcProducts[0].images)).toEqual([
            {
                disabled: false,
                file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
                id: 12573090,
                label: '',
                position: 0,
                uid: '',
            },
            {
                disabled: false,
                file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                id: 13020129,
                label: '',
                position: 1,
                uid: '',
            },
        ]);
    });

    it(`returns an empty array if there's no bc product images`, () => {
        expect(getTransformedMediaGalleryEntries({ edges: null })).toEqual([]);
        expect(getTransformedMediaGalleryEntries({ edges: [{} as ImageEdge] })).toEqual([]);
    });
});
