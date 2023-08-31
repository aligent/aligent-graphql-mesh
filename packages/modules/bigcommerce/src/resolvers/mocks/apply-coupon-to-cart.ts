export const mockApplyCouponToCart = {
    cart: {
        applied_coupons: [
            {
                code: 'testcoupon20',
                __typename: 'AppliedCoupon',
            },
        ],
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
        email: 'mock.mockington@aligent.com.au',
        id: 'cWLolqw5sz1TKwLsgD9eDA8pdx5usHh7',
        prices: {
            applied_taxes: [
                {
                    amount: {
                        currency: 'AUD',
                        value: 20.75,
                        __typename: 'Money',
                    },
                    label: 'GST',
                    __typename: 'CartTaxItem',
                },
            ],
            discounts: [
                {
                    amount: {
                        currency: 'AUD',
                        value: 57,
                        __typename: 'Money',
                    },
                    label: 'Discount (testcoupon20)',
                    __typename: 'Discount',
                },
            ],
            grand_total: {
                currency: 'AUD',
                value: 228,
                __typename: 'Money',
            },
            subtotal_including_tax: {
                currency: 'AUD',
                value: 285,
                __typename: 'Money',
            },
            __typename: 'CartPrices',
        },
        shipping_addresses: [],
        __typename: 'Cart',
    },
    __typename: 'ApplyCouponToCartOutput',
};
