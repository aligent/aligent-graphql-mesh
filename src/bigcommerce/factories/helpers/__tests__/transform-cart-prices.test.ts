import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { getTransformedCartPrices } from '../transform-cart-prices';

const expectResult = {
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
};

describe('transform-prices', () => {
    it(`transforms cart prices`, () => {
        const { coupons, grandTotal, subtotal, taxes, taxTotal } = mockBcCheckout;

        expect(
            getTransformedCartPrices({ coupons, grandTotal, subtotal, taxes, taxTotal })
        ).toEqual(expect.objectContaining(expectResult));
    });

    it(`handles nullish cart prices`, () => {
        expect(
            getTransformedCartPrices({
                coupons: [],
                grandTotal: null,
                subtotal: null,
                taxes: null,
                taxTotal: null,
            })
        ).toEqual(
            expect.objectContaining({
                applied_taxes: null,
                discounts: [],
                grand_total: null,
                subtotal_excluding_tax: null,
                subtotal_including_tax: null,
                subtotal_with_discount_including_tax: { value: 0 },
                subtotal_with_discount_excluding_tax: { value: 0 },
            })
        );
    });
});
