import { mockBcCart } from './cart.bc';
import { BC_Checkout } from '../../../meshrc/.mesh';

export const mockBcCheckout: BC_Checkout = {
    id: 'Q2hlY2tvdXQ6OThiZjRiOTctMTRhOC00ODYwLWFkYTMtNDRhNzgwYzI0ZWI0',
    entityId: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
    cart: mockBcCart,
    taxes: [
        {
            name: 'GST',
            amount: {
                currencyCode: 'AUD',
                value: 8.18,
            },
        },
    ],
    subtotal: {
        value: 90,
        currencyCode: 'AUD',
    },
    shippingCostTotal: {
        value: 0,
        currencyCode: 'AUD',
    },
    handlingCostTotal: {
        value: 0,
        currencyCode: 'AUD',
    },
    taxTotal: {
        value: 8.18,
        currencyCode: 'AUD',
    },
    grandTotal: {
        value: 90,
        currencyCode: 'AUD',
    },
    outstandingBalance: {
        value: 90,
        currencyCode: 'AUD',
    },
    giftWrappingCostTotal: {
        value: 0,
        currencyCode: 'AUD',
    },
    coupons: [
        {
            entityId: 2,
            discountedAmount: {
                currencyCode: 'AUD',
                value: 10,
            },
            couponType: 'PER_TOTAL_DISCOUNT',
            code: 'sale',
        },
    ],
    billingAddress: {
        stateOrProvinceCode: 'QLD',
        stateOrProvince: 'Queensland',
        postalCode: '4220',
        phone: '00000000000',
        lastName: 'Doe',
        firstName: 'John',
        entityId: '64c3238934a8d',
        email: 'john.doe@aligent.com.au',
        customFields: [
            {
                entityId: 26,
                text: 'My Billing Comment',
            },
            {
                entityId: 29,
                valueEntityIds: [0],
            },
        ],
        countryCode: 'AU',
        company: 'Aligent',
        city: 'Gold Coast',
        address2: '',
        address1: '14 Billing Ct',
    },
    shippingConsignments: [
        {
            shippingCost: {
                value: 0,
                currencyCode: 'AUD',
            },
            selectedShippingOption: {
                type: 'shipping_pickupinstore',
                transitTime: '',
                imageUrl: '',
                entityId: '1e9ff660b3d44d196a85b40dcb307e2e',
                description: 'Pickup In Store',
                cost: {
                    value: 0,
                    currencyCode: 'AUD',
                },
            },
            lineItemIds: ['df21b1d0-6178-454c-a159-699e80c7d8e0'],
            handlingCost: {
                value: 0,
                currencyCode: 'AUD',
            },
            entityId: '64c323658e279',
            coupons: [],
            availableShippingOptions: [
                {
                    type: 'shipping_pickupinstore',
                    transitTime: '',
                    imageUrl: '',
                    entityId: '1e9ff660b3d44d196a85b40dcb307e2e',
                    description: 'Pickup In Store',
                    cost: {
                        value: 0,
                        currencyCode: 'AUD',
                    },
                    isRecommended: false,
                },
            ],
            address: {
                stateOrProvinceCode: 'SA',
                stateOrProvince: 'South Australia',
                postalCode: '5000',
                phone: '0000000000',
                lastName: 'Doe',
                firstName: 'John',
                email: 'john.doe@aligent.com.au',
                customFields: [
                    {
                        valueEntityIds: [0],
                        entityId: 29,
                    },
                ],
                countryCode: 'AU',
                company: 'Aligent',
                city: 'Adelaide',
                address2: '',
                address1: '14 Shipping Ct',
            },
        },
    ],
    order: null,
    customerMessage: 'This is my order',
    createdAt: {
        utc: '2023-07-28T00:53:59Z',
    },
    promotions: [],
    updatedAt: {
        utc: '2023-07-28T01:17:18Z',
    },
};
