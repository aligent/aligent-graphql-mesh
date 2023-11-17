const checkoutAttributes = {
    poNumber: null,
    shippingMethod: 'flat_rate_2',
    shippingMethodType: 'primary',
    paymentMethod: 'money_order_1',
    shipUntil: null,
    customerNotes: null,
    currency: 'AUD',
    createdAt: '2023-11-16T23:44:55Z',
    updatedAt: '2023-11-16T23:46:00Z',
    shipToBillingAddress: false,
    saveBillingAddress: true,
    saveShippingAddress: true,
    shippingMethodData: [],
    paymentMethodData: null,
    email: null,
    shippingCost: null,
    website: 1,
    lineItems: [
        {
            id: 51,
            productSku: 'HOODIE-SP',
            quantity: 1,
            productUnitCode: 'each',
        },
    ],
    subtotals: [
        {
            currency: 'NZD',
            value: '0.0000',
            valid: true,
        },
        {
            currency: 'AUD',
            value: '17.0000',
            valid: true,
        },
    ],
    organization: 1,
};

export const checkout = {
    type: 'checkouts',
    id: '40',
    attributes: checkoutAttributes,
    relationships: {
        source: {
            data: {
                type: 'checkoutsources',
                id: '85',
            },
        },
        customerUser: {
            data: {
                type: 'customerusers',
                id: '6',
            },
        },
        customer: {
            data: {
                type: 'customers',
                id: '6',
            },
        },
        billingAddress: {
            data: {
                type: 'orderaddresses',
                id: '63',
            },
        },
        shippingAddress: {
            data: {
                type: 'orderaddresses',
                id: '64',
            },
        },
    },
};

export const getCheckouts = [checkout];

export const createdCheckout = {
    ...checkoutAttributes,
    id: 40,
    source: 84,
    customerUser: 6,
    customer: 6,
    billingAddress: null,
    shippingAddress: null,
};
