import { mockBcCheckout } from '../../../resolvers/mocks/checkout.bc';
import { getTransformedCartPrices } from '../transform-cart-prices';
import { mockBcCart } from '../../../resolvers/mocks/cart.bc';

const expectResult = {
    applied_taxes: [{ amount: { currency: 'AUD', value: 5.45 }, label: 'GST' }],
    discounts: [{ label: 'sale', code: 'sale', amount: { currency: 'AUD', value: 10 } }],
    grand_total: { currency: 'AUD', value: 60 },
    subtotal_excluding_tax: { currency: 'AUD', value: 54.55 },
    subtotal_including_tax: { currency: 'AUD', value: 60 },
    subtotal_with_discount_including_tax: { currency: 'AUD', value: 60 },
    subtotal_with_discount_excluding_tax: { currency: 'AUD', value: 60 },
};

describe('transform-prices', () => {
    it(`transforms cart prices`, () => {
        const { coupons, grandTotal, subtotal, taxes, taxTotal } = mockBcCheckout;

        expect(
            getTransformedCartPrices({ coupons, grandTotal, subtotal, taxes, taxTotal }, mockBcCart)
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
                subtotal_with_discount_including_tax: null,
                subtotal_with_discount_excluding_tax: null,
            })
        );
    });
});
