import { getTransformedPriceRange, getTransformedPrices } from '../transform-product-prices';
import { mockBcProducts } from '../../../resolvers/mocks/products.bc';

describe('transform-product-prices', () => {
    it('Transforms BC product prices to a AC priceRange structure', () => {
        expect(
            getTransformedPriceRange(
                mockBcProducts[0].prices,
                'ConfigurableProduct',
                mockBcProducts[0].variants
            )
        ).toEqual({
            maximum_price: {
                discount: { amount_off: 40, percent_off: 57.14285714285714 },
                final_price: { currency: 'AUD', value: 57 },
                regular_price: { currency: 'AUD', value: 70 },
            },
            minimum_price: {
                discount: { amount_off: 47, percent_off: 82.45614035087719 },
                final_price: { currency: 'AUD', value: 10 },
                regular_price: { currency: 'AUD', value: 57 },
            },
        });
    });

    it('Returns nullish values if prices are undefined for price range prices', () => {
        expect(getTransformedPriceRange(null, 'ConfigurableProduct')).toEqual({
            maximum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: { currency: null, value: null },
                regular_price: { currency: null, value: null },
            },
            minimum_price: {
                discount: { amount_off: null, percent_off: null },
                final_price: { currency: null, value: null },
                regular_price: { currency: null, value: null },
            },
        });
    });

    it("Transforms BC product prices to a AC regularPrice structure'", () => {
        expect(getTransformedPrices(mockBcProducts[0].prices)).toEqual({
            regularPrice: { amount: { currency: 'AUD', value: 10 } },
        });
    });

    it('Returns "null" if prices are null for productPrices', () => {
        expect(getTransformedPrices(null)).toEqual(null);
    });
});
