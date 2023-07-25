export const mockRemoveItemFromCart = {
    cart: {
        id: 'MOCKcWLolqw5sz1TKwLsgD9eDA8pdx5usHh7',
        total_quantity: 2,
        error_type: null,
        items: [
            {
                id: '43071',
                uid: 'NDMwNzE=',
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
                    id: 1031,
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
                                amount_off: 25,
                                __typename: 'ProductDiscount',
                            },
                            regular_price: {
                                currency: 'AUD',
                                value: 55,
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
                quantity: 1,
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
                        value_id: 179,
                        value_label: 'XS',
                        __typename: 'SelectedConfigurableOption',
                    },
                ],
                __typename: 'ConfigurableCartItem',
            },
            {
                id: '43330',
                uid: 'NDMzMzA=',
                errors: null,
                prices: {
                    price_including_tax: {
                        currency: 'AUD',
                        value: 57,
                        __typename: 'Money',
                    },
                    __typename: 'CartItemPrices',
                },
                product: {
                    id: 1035,
                    name: 'Mona Pullover Hoodlie',
                    sku: 'WH01',
                    small_image: {
                        url: 'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/w/h/wh01-orange_main.jpg',
                        label: 'Mona Pullover Hoodlie',
                        __typename: 'ProductImage',
                    },
                    categories: [],
                    price_range: {
                        minimum_price: {
                            final_price: {
                                currency: 'AUD',
                                value: 57,
                                __typename: 'Money',
                            },
                            discount: {
                                amount_off: 0,
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
                quantity: 1,
                configurable_options: [
                    {
                        id: 93,
                        option_label: 'Color',
                        value_id: 65,
                        value_label: 'Orange',
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
                        value: 7.91,
                        __typename: 'Money',
                    },
                    __typename: 'CartTaxItem',
                    label: 'GST',
                },
            ],
            grand_total: {
                currency: 'AUD',
                value: 87,
                __typename: 'Money',
            },
            subtotal_including_tax: {
                currency: 'AUD',
                value: 87,
                __typename: 'Money',
            },
            __typename: 'CartPrices',
            discounts: [],
        },
        applied_coupons: null,
        applied_gift_cards: [],
        applied_reward_points: null,
        available_payment_methods: [
            {
                code: 'checkmo',
                title: 'Check / Money order',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'purchaseorder',
                title: 'Purchase Order',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'paypal_express',
                title: 'PayPal Express Checkout',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'hosted_pro',
                title: 'Payment by cards or by PayPal account',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'adyen_cc_vault',
                title: 'Stored Cards (Adyen)',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'afterpay',
                title: 'Afterpay',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'braintree',
                title: 'Credit Card (Braintree Sandbox)',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'braintree_paypal',
                title: 'PayPal (Braintree)',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'braintree_cc_vault',
                title: 'Stored Cards (Braintree)',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'braintree_paypal_vault',
                title: 'Stored Accounts (PayPal)',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'adyen_oneclick',
                title: 'Adyen Stored Payment Methods',
                __typename: 'AvailablePaymentMethod',
            },
            {
                code: 'adyen_cc',
                title: 'Credit Card',
                __typename: 'AvailablePaymentMethod',
            },
        ],
        email: 'jack.mcloughlin@aligent.com.au',
        shipping_addresses: [],
        __typename: 'Cart',
    },
    __typename: 'RemoveItemFromCartOutput',
};
