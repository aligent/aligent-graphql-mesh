import { mockBcCart } from '../../../resolvers/mocks/cart.bc';
import { getTransformCartItems } from '../transform-cart-items';
import { mockFlattenedProducts } from '../../../../utils/__tests__/__data__/mock-products';
import { ProductInterface } from '@mesh';

const expectResult = [
    {
        id: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
        uid: 'ZGYyMWIxZDAtNjE3OC00NTRjLWExNTktNjk5ZTgwYzdkOGUwLzQ5Mi81MTM=',
        errors: null,
        prices: {
            price: { currency: 'AUD', value: 30 },
            price_including_tax: { currency: 'AUD', value: 30 },
            row_total: { currency: 'AUD', value: 60 },
            row_total_including_tax: { currency: 'AUD', value: 60 },
            total_item_discount: { currency: 'AUD', value: 0 },
        },
        product: {
            id: 513,
            uid: 'NTEz',
            name: 'Mona Pullover Hoodlie',
            media_gallery_entries: [
                {
                    id: 1742,
                    disabled: false,
                    file: '/w/h/wh01-green_main.jpg',
                    label: '',
                    position: 1,
                    uid: 'OA==',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 1743,
                    disabled: false,
                    file: '/w/h/wh01-green_alt1.jpg',
                    label: '',
                    position: 2,
                    uid: 'OA==',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 1744,
                    disabled: false,
                    file: '/w/h/wh01-green_back.jpg',
                    label: '',
                    position: 3,
                    uid: 'OA==',
                    __typename: 'MediaGalleryEntry',
                },
            ],
            only_x_left_in_stock: 11,
            sku: 'WH01-S-Green',
            small_image: {
                url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/product_images/attribute_rule_images/54_thumb_1690452039.jpg',
                label: 'Mona Pullover Hoodlie',
            },
            categories: [],
            stock_status: 'IN_STOCK',
            price_range: {
                minimum_price: {
                    discount: { amount_off: 40 },
                    final_price: { currency: 'AUD', value: 30 },
                    regular_price: { currency: 'AUD', value: 70 },
                },
            },
            rating_summary: 0,
            review_count: 0,
            url_key: 'mona-pullover-hoodlie',
            url_suffix: '',
            custom_attributes: [],
            reviews: {
                items: [],
                page_info: { current_page: null, page_size: null, total_pages: null },
            },
            staged: false,
            __typename: 'ConfigurableProduct',
        },
        quantity: 2,
        configurable_options: [
            { id: 148, option_label: 'Color', value_id: 182, value_label: 'Green' },
            { id: 149, option_label: 'Size', value_id: 184, value_label: 'S' },
        ],
        __typename: 'ConfigurableCartItem',
    },
];

describe('transform-cart-items', () => {
    it(`transforms cart item`, () => {
        expect(
            getTransformCartItems(mockBcCart, mockFlattenedProducts as Array<ProductInterface>)
        ).toEqual(expect.objectContaining(expectResult));
    });

    it(`returns "null" if there's no cart`, () => {
        expect(getTransformCartItems(null)).toEqual(expect.objectContaining(null));
    });
});
