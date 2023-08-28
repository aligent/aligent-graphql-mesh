import {
    getAmountOff,
    getMostExpensiveVariant,
    getPercentOff,
    getTransformedPriceRange,
    getTransformedPrices,
} from '../transform-product-prices';
import { mockBcProducts } from '../../../resolvers/mocks/products.bc';
import { PageInfo } from '@aligent/bigcommerce-operations';

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

    it(`getPercentOff and getAmountOff returns 0 if there's no basePrice or price`, () => {
        expect(
            getAmountOff({ currencyCode: 'AUD', value: null }, { currencyCode: 'AUD', value: null })
        ).toEqual(0);
        expect(
            getPercentOff(
                { currencyCode: 'AUD', value: null },
                { currencyCode: 'AUD', value: null }
            )
        ).toEqual(0);

        expect(getAmountOff({ currencyCode: 'AUD', value: 10 }, null)).toEqual(0);
        expect(getPercentOff({ currencyCode: 'AUD', value: 10 }, null)).toEqual(0);
        expect(getAmountOff(null, { currencyCode: 'AUD', value: 10 })).toEqual(0);
        expect(getPercentOff(null, { currencyCode: 'AUD', value: 10 })).toEqual(0);
    });

    it(`getPercentOff and getAmountOff returns 0 if there's no basePrice or price`, () => {
        const variants = {
            edges: [
                mockBcProducts[0].variants.edges[0],
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                    node: { ...mockBcProducts[0].variants.edges[1].node, prices: null },
                },
            ],
            pageInfo: {} as PageInfo,
        };

        expect(getMostExpensiveVariant(variants)).toEqual({
            basePrice: { currencyCode: 'AUD', value: 70 },
            bulkPricing: [],
            mapPrice: null,
            price: { currencyCode: 'AUD', value: 30 },
            priceRange: {
                max: { currencyCode: 'AUD', value: 30 },
                min: { currencyCode: 'AUD', value: 30 },
            },
            retailPrice: null,
            retailPriceRange: null,
            salePrice: { currencyCode: 'AUD', value: 30 },
            saved: null,
        });
    });
});
