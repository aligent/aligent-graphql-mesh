import { getTransformedCartData } from '../transform-cart-data';
import { BC_Cart, BC_CouponType } from '@mesh/external/BigCommerceGraphqlApi';

describe('transform-cart-data', () => {
    it('Transforms BC cart data to AC', () => {
        expect(
            getTransformedCartData({
                billingAddress: null,
                cart: {
                    id: '13251',
                    lineItems: {
                        totalQuantity: 1,
                        physicalItems: [],
                        digitalItems: [],
                        customItems: [],
                        giftCertificates: [],
                    },
                } as unknown as BC_Cart,
                customerMessage: null,
                coupons: [
                    {
                        entityId: 2,
                        discountedAmount: {
                            currencyCode: 'AUD',
                            value: 10,
                        },
                        couponType: 'PER_TOTAL_DISCOUNT' as BC_CouponType,
                        code: 'sale',
                    },
                ],
                id: '1235',
                entityId: '1235',
                promotions: [],
                shippingConsignments: null,
                createdAt: {
                    utc: '2023-07-28T00:53:59Z',
                },
                updatedAt: {
                    utc: '2023-07-28T00:53:59Z',
                },
            })
        ).toEqual({
            applied_coupons: [{ code: 'sale' }],
            id: '1235',
            total_quantity: 1,
            error_type: null,
            items: [],
            is_virtual: false,
            free_shipping_details: {
                free_shipping_active: false,
                free_shipping_percentage: 100,
                free_shipping_remaining: { value: 0, currency: 'AUD' },
                free_shipping_threshold: { value: 0, currency: 'AUD' },
            },
            prices: {
                applied_taxes: null,
                discounts: [{ label: 'sale', amount: { currency: 'AUD', value: 10 } }],
                grand_total: null,
                subtotal_excluding_tax: null,
                subtotal_including_tax: null,
                subtotal_with_discount_including_tax: { value: 10 },
                subtotal_with_discount_excluding_tax: { value: 10 },
            },
            billing_address: null,
            shipping_addresses: [],
            available_gift_wrappings: [],
            gift_receipt_included: false,
            printed_card_included: false,
        });
    });

    it('Handles nullish checkout property values', () => {
        expect(
            getTransformedCartData({
                billingAddress: null,
                cart: null,
                customerMessage: null,
                coupons: [],
                id: '1235',
                entityId: '1235',
                promotions: [],
                shippingConsignments: null,
                createdAt: {
                    utc: '2023-07-28T00:53:59Z',
                },
                updatedAt: {
                    utc: '2023-07-28T00:53:59Z',
                },
            })
        ).toEqual({
            applied_coupons: [],
            available_gift_wrappings: [],
            billing_address: null,
            error_type: null,
            free_shipping_details: {
                free_shipping_active: false,
                free_shipping_percentage: 100,
                free_shipping_remaining: { currency: 'AUD', value: 0 },
                free_shipping_threshold: { currency: 'AUD', value: 0 },
            },
            gift_receipt_included: false,
            id: '1235',
            is_virtual: false,
            items: null,
            prices: {
                applied_taxes: null,
                discounts: [],
                grand_total: null,
                subtotal_excluding_tax: null,
                subtotal_including_tax: null,
                subtotal_with_discount_excluding_tax: { currency: undefined, value: 0 },
                subtotal_with_discount_including_tax: { currency: undefined, value: 0 },
            },
            printed_card_included: false,
            shipping_addresses: [],
            total_quantity: 0,
        });
    });
});
