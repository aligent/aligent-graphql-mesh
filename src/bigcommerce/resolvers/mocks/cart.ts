import { Cart } from '../../../meshrc/.mesh';

export const mockCart: Cart = {
    id: 'MOCKHTnZsIwxnoPokubNi04ZAxNopLydKfcI',
    total_quantity: 4,
    error_type: 'NONE',
    items: [
        {
            id: '43073',
            uid: 'NDMwNzM=',
            errors: null,
            prices: {
                price_including_tax: {
                    currency: 'AUD',
                    value: 30,
                    __typename: 'Money',
                },
                __typename: 'CartItemPrices',
            },
            product: {
                id: 1034,
                name: 'Mona Pullover Hoodlie',
                sku: 'WH01',
                small_image: {
                    url: 'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/w/h/wh01-green_main.jpg',
                    label: 'Mona Pullover Hoodlie',
                    __typename: 'ProductImage',
                },
                categories: [],
                price_range: {
                    minimum_price: {
                        final_price: {
                            currency: 'AUD',
                            value: 30,
                            __typename: 'Money',
                        },
                        discount: {
                            amount_off: 27,
                            __typename: 'ProductDiscount',
                        },
                        regular_price: {
                            currency: 'AUD',
                            value: 57,
                            __typename: 'Money',
                        },
                        __typename: 'ProductPrice',
                    },
                    __typename: 'PriceRange',
                },
                rating_summary: 0,
                review_count: 0,
                stock_status: 'IN_STOCK',
                url_key: 'mona-pullover-hoodlie',
                url_suffix: '.html',
                __typename: 'ConfigurableProduct',
            },
            quantity: 3,
            configurable_options: [
                {
                    id: 93,
                    option_label: 'Color',
                    value_id: 62,
                    value_label: 'Green',
                    __typename: 'SelectedConfigurableOption',
                },
                {
                    id: 187,
                    option_label: 'Size',
                    value_id: 180,
                    value_label: 'S',
                    __typename: 'SelectedConfigurableOption',
                },
            ],
            __typename: 'ConfigurableCartItem',
        },
        {
            id: '43075',
            uid: 'NDMwNzU=',
            errors: null,
            prices: {
                price_including_tax: {
                    currency: 'AUD',
                    value: 56.25,
                    __typename: 'Money',
                },
                __typename: 'CartItemPrices',
            },
            product: {
                id: 1227,
                name: 'Josie Yoga Jacket',
                sku: 'WJ02',
                small_image: {
                    url: 'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/w/j/wj02-blue_main.jpg',
                    label: 'Josie Yoga Jacket',
                    __typename: 'ProductImage',
                },
                categories: [],
                price_range: {
                    minimum_price: {
                        final_price: {
                            currency: 'AUD',
                            value: 56.25,
                            __typename: 'Money',
                        },
                        discount: {
                            amount_off: 0,
                            __typename: 'ProductDiscount',
                        },
                        regular_price: {
                            currency: 'AUD',
                            value: 56.25,
                            __typename: 'Money',
                        },
                        __typename: 'ProductPrice',
                    },
                    __typename: 'PriceRange',
                },
                rating_summary: 0,
                review_count: 0,
                stock_status: 'IN_STOCK',
                url_key: 'josie-yoga-jacket',
                url_suffix: '.html',
                __typename: 'ConfigurableProduct',
            },
            quantity: 1,
            configurable_options: [
                {
                    id: 93,
                    option_label: 'Color',
                    value_id: 59,
                    value_label: 'Blue',
                    __typename: 'SelectedConfigurableOption',
                },
                {
                    id: 187,
                    option_label: 'Size',
                    value_id: 180,
                    value_label: 'S',
                    __typename: 'SelectedConfigurableOption',
                },
            ],
            __typename: 'ConfigurableCartItem',
        },
    ],
    is_virtual: false,
    free_shipping_details: {
        free_shipping_active: true,
        free_shipping_percentage: 100,
        free_shipping_remaining: {
            value: 0,
            currency: 'AUD',
            __typename: 'Money',
        },
        free_shipping_threshold: {
            value: 1,
            currency: 'AUD',
            __typename: 'Money',
        },
        __typename: 'FreeShippingDetails',
    },
    prices: {
        applied_taxes: [
            {
                amount: {
                    currency: 'AUD',
                    value: 13.3,
                    __typename: 'Money',
                },
                __typename: 'CartTaxItem',
            },
        ],
        grand_total: {
            currency: 'AUD',
            value: 146.25,
            __typename: 'Money',
        },
        subtotal_including_tax: {
            currency: 'AUD',
            value: 146.25,
            __typename: 'Money',
        },
        __typename: 'CartPrices',
    },
    __typename: 'Cart',
};
