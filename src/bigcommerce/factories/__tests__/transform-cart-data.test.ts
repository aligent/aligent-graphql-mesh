import { getTransformedCartData } from '../transform-cart-data';
import { mockBcCheckout } from '../../resolvers/mocks/checkout.bc';
import { BC_CheckoutAddressCheckboxesCustomField } from '../../../meshrc/.mesh';
import { getTransformedShippingAddresses } from '../helpers/transform-shipping-addresses';
import { getTransformedCartPrices } from '../helpers/transform-cart-prices';

const expectedResponse = {
    applied_coupons: [
        {
            code: 'sale',
        },
    ],
    id: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
    total_quantity: 1,
    error_type: null,
    items: [
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
    ],
    is_virtual: false,
    free_shipping_details: {
        free_shipping_active: false,
        free_shipping_percentage: 100,
        free_shipping_remaining: {
            value: 0,
            currency: 'AUD',
        },
        free_shipping_threshold: {
            value: 0,
            currency: 'AUD',
        },
    },
    prices: {
        applied_taxes: [
            {
                amount: {
                    currency: 'AUD',
                    value: 8.18,
                },
                label: 'GST',
            },
        ],
        discounts: [
            {
                label: 'sale',
                amount: {
                    currency: 'AUD',
                    value: 10,
                },
            },
        ],
        grand_total: {
            currency: 'AUD',
            value: 90,
        },
        subtotal_excluding_tax: {
            currency: 'AUD',
            value: 90,
        },
        subtotal_including_tax: {
            currency: 'AUD',
            value: 90,
        },
        subtotal_with_discount_including_tax: {
            value: 90,
            currency: 'AUD',
        },
        subtotal_with_discount_excluding_tax: {
            value: 90,
            currency: 'AUD',
        },
    },
    billing_address: {
        firstname: 'John',
        lastname: 'Doe',
        company: 'Aligent',
        city: 'Gold Coast',
        country: {
            code: 'AU',
            label: 'AU',
        },
        postcode: '4220',
        region: {
            code: 'QLD',
            label: 'Queensland',
            region_id: 573,
        },
        street: ['14 Billing Ct'],
        telephone: '00000000000',
        uid: '',
    },
    shipping_addresses: [
        {
            firstname: 'John',
            lastname: 'Doe',
            company: 'Aligent',
            city: 'Adelaide',
            country: {
                code: 'AU',
                label: 'AU',
            },
            postcode: '5000',
            region: {
                code: 'SA',
                label: 'South Australia',
                region_id: 573,
            },
            street: ['14 Shipping Ct'],
            telephone: '0000000000',
            uid: 'NjRjMzIzNjU4ZTI3OQ==',
            available_shipping_methods: [
                {
                    amount: {
                        currency: 'AUD',
                        value: 0,
                    },
                    available: true,
                    base_amount: null,
                    carrier_code: 'shipping_pickupinstore',
                    carrier_title: 'Pickup In Store',
                    error_message: '',
                    method_code: '1e9ff660b3d44d196a85b40dcb307e2e',
                    method_title: 'Pickup In Store',
                    price_excl_tax: {
                        currency: 'AUD',
                        value: 0,
                    },
                    price_incl_tax: {
                        currency: 'AUD',
                        value: 0,
                    },
                },
            ],
            selected_shipping_method: {
                amount: {
                    currency: 'AUD',
                    value: 0,
                },
                available: true,
                base_amount: null,
                carrier_code: 'shipping_pickupinstore',
                carrier_title: 'Pickup In Store',
                error_message: '',
                method_code: '1e9ff660b3d44d196a85b40dcb307e2e',
                method_title: 'Pickup In Store',
                price_excl_tax: {
                    currency: 'AUD',
                    value: 0,
                },
                price_incl_tax: {
                    currency: 'AUD',
                    value: 0,
                },
            },
            customer_notes: 'This is my order',
            deliveryInstructions: {
                authorityToLeave: false,
                instructions: '',
            },
        },
    ],
    available_gift_wrappings: [],
    gift_receipt_included: false,
    printed_card_included: false,
};

describe('transform-cart-data', () => {
    it('Transforms BC cart data to AC', () => {
        expect(getTransformedCartData(mockBcCheckout)).toEqual(expectedResponse);
    });

    it(`Returns null if cart items don't exist`, () => {
        expect(getTransformedCartData(null)).toEqual(null);
    });

    it(`returns null when there's no checkout data`, () => {
        expect(getTransformedCartData(null)).toEqual(null);
    });

    it('Transforms BC cart data to AC', () => {
        expect(getTransformedShippingAddresses(null, null)).toEqual([]);
    });
});
