import { mockBcCart } from './cart.bc';
import {
    CheckoutAddressCheckboxesCustomField,
    CheckoutAddressTextFieldCustomField,
    CouponType,
} from '@aligent/bigcommerce-operations';

export const mockBcCheckout = {
    id: 'Q2hlY2tvdXQ6OThiZjRiOTctMTRhOC00ODYwLWFkYTMtNDRhNzgwYzI0ZWI0',
    entityId: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
    cart: mockBcCart,
    taxes: [
        {
            name: 'GST',
            amount: {
                currencyCode: 'AUD',
                value: 5.45,
            },
        },
    ],
    taxTotal: {
        currencyCode: 'AUD',
        value: 5.45,
    },
    subtotal: {
        currencyCode: 'AUD',
        value: 60.0,
    },
    shippingCostTotal: {
        currencyCode: 'AUD',
        value: 0.0,
    },
    handlingCostTotal: {
        currencyCode: 'AUD',
        value: 0.0,
    },
    grandTotal: {
        currencyCode: 'AUD',
        value: 60.0,
    },
    outstandingBalance: {
        currencyCode: 'AUD',
        value: 60.0,
    },
    giftWrappingCostTotal: {
        currencyCode: 'AUD',
        value: 0.0,
    },
    coupons: [
        {
            entityId: 2,
            discountedAmount: {
                currencyCode: 'AUD',
                value: 10.0,
            },
            couponType: 'PER_TOTAL_DISCOUNT' as CouponType,
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
            } as CheckoutAddressTextFieldCustomField,
            {
                entityId: 29,
                valueEntityIds: [0],
            } as CheckoutAddressCheckboxesCustomField,
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
                    } as CheckoutAddressCheckboxesCustomField,
                    {
                        text: 'Leave at the rear door',
                        entityId: 26,
                    } as CheckoutAddressTextFieldCustomField,
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
