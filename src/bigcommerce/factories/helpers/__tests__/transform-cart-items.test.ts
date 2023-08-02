import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { mockBcCart } from '../../../resolvers/mocks/cart.bc';
import { getTransformCartItems } from '../transform-cart-items';

const expectResult = [
    {
        id: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
        uid: 'ZGYyMWIxZDAtNjE3OC00NTRjLWExNTktNjk5ZTgwYzdkOGUw',
        errors: null,
        prices: {
            price: {
                currency: 'AUD',
                value: 30,
            },
            price_including_tax: {
                currency: 'AUD',
                value: 30,
            },
            row_total: {
                currency: 'AUD',
                value: 90,
            },
            row_total_including_tax: {
                currency: 'AUD',
                value: 90,
            },
            total_item_discount: {
                currency: 'AUD',
                value: 0,
            },
        },
        product: {
            id: 492,
            uid: 'NDky',
            name: 'Mona Pullover Hoodlie',
            sku: 'WH01-S-Green',
            small_image: {
                url:
                    'https://cdn11.bigcommerce.com/s-xxazhvt7gd/product_images/attribute_rule_images/54_thumb_1690452039.jpg',
                label: 'Mona Pullover Hoodlie',
            },
            categories: [],
            price_range: {
                minimum_price: {
                    discount: {
                        amount_off: 25,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 30,
                    },
                    regular_price: {
                        currency: 'AUD',
                        value: 55,
                    },
                },
            },
            rating_summary: 0,
            review_count: 0,
            stock_status: 'IN_STOCK',
            url_key: '/mona-pullover-hoodlie/',
            url_suffix: '',
            custom_attributes: [],
            reviews: {
                items: [],
                page_info: {
                    current_page: null,
                    page_size: null,
                    total_pages: null,
                },
            },
            staged: false,
            __typename: 'ConfigurableProduct',
        },
        quantity: 3,
        configurable_options: [
            {
                id: 148,
                option_label: 'Color',
                value_id: 182,
                value_label: 'Green',
            },
            {
                id: 149,
                option_label: 'Size',
                value_id: 184,
                value_label: 'S',
            },
        ],
        __typename: 'ConfigurableCartItem',
    },
];

describe('transform-cart-items', () => {
    it(`transforms cart item`, () => {
        const { coupons, grandTotal, subtotal, taxes, taxTotal } = mockBcCheckout;

        expect(getTransformCartItems(mockBcCart)).toEqual(expect.objectContaining(expectResult));
    });

    it(`returns "null" if there's no cart`, () => {
        const { coupons, grandTotal, subtotal, taxes, taxTotal } = mockBcCheckout;

        expect(getTransformCartItems(null)).toEqual(expect.objectContaining(null));
    });
});
