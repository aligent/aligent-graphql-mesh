import {
    getAmountOff,
    getMostExpensiveVariant,
    getPercentOff,
    getTransformedPriceRange,
    getTransformedPrices,
    getTransformedPriceTiers,
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

const fixedBulkPrices = {
    price: {
        value: 34.95,
        currencyCode: 'AUD',
    },
    bulkPricing: [
        {
            minimumQuantity: 2,
            price: 30,
        },
        {
            minimumQuantity: 3,
            price: 25,
        },
        {
            minimumQuantity: 4,
            price: 20,
        },
    ],
};

const percentBulkPrices = {
    bulkPricing: [
        {
            percentOff: 30,
            minimumQuantity: 2,
        },
        {
            percentOff: 25,
            minimumQuantity: 3,
        },
        {
            percentOff: 20,
            minimumQuantity: 4,
        },
    ],
    price: {
        value: 32,
        currencyCode: 'AUD',
    },
};

const unitOffBulkPrices = {
    bulkPricing: [
        {
            priceAdjustment: 2,
            minimumQuantity: 2,
        },
        {
            priceAdjustment: 4,
            minimumQuantity: 3,
        },
        {
            priceAdjustment: 6,
            minimumQuantity: 4,
        },
    ],
    price: {
        value: 32,
        currencyCode: 'AUD',
    },
};

describe('getTransformedPriceTiers', () => {
    it(`returns "null" is there's no prices or price`, () => {
        const transformedData = getTransformedPriceTiers(null);

        expect(transformedData).toEqual(null);
    });

    it(`transforms fixed bulk prices into a structure the PWA is expecting`, () => {
        const transformedData = getTransformedPriceTiers(fixedBulkPrices);

        const expectedResult = [
            {
                discount: { amount_off: 4.950000000000003, percent_off: 14.163090128755371 },
                final_price: { currencyCode: 'AUD', value: 30 },
                quantity: 2,
            },
            {
                discount: { amount_off: 9.950000000000003, percent_off: 28.46924177396281 },
                final_price: { currencyCode: 'AUD', value: 25 },
                quantity: 3,
            },
            {
                discount: { amount_off: 14.950000000000003, percent_off: 42.77539341917025 },
                final_price: { currencyCode: 'AUD', value: 20 },
                quantity: 4,
            },
        ];

        expect(transformedData).toEqual(expectedResult);
    });

    it(`transforms percentage bulk prices into a structure the PWA is expecting`, () => {
        const transformedData = getTransformedPriceTiers(percentBulkPrices);

        const expectedResult = [
            {
                discount: { amount_off: 9.600000000000001, percent_off: 30 },
                final_price: { currencyCode: 'AUD', value: 22.4 },
                quantity: 2,
            },
            {
                discount: { amount_off: 8, percent_off: 25 },
                final_price: { currencyCode: 'AUD', value: 24 },
                quantity: 3,
            },
            {
                discount: { amount_off: 6.399999999999999, percent_off: 20 },
                final_price: { currencyCode: 'AUD', value: 25.6 },
                quantity: 4,
            },
        ];

        expect(transformedData).toEqual(expectedResult);
    });

    it(`transforms unit off bulk prices into a structure the PWA is expecting`, () => {
        const transformedData = getTransformedPriceTiers(unitOffBulkPrices);

        const expectedResult = [
            {
                discount: { amount_off: 2, percent_off: 6.25 },
                final_price: { currencyCode: 'AUD', value: 30 },
                quantity: 2,
            },
            {
                discount: { amount_off: 4, percent_off: 12.5 },
                final_price: { currencyCode: 'AUD', value: 28 },
                quantity: 3,
            },
            {
                discount: { amount_off: 6, percent_off: 18.75 },
                final_price: { currencyCode: 'AUD', value: 26 },
                quantity: 4,
            },
        ];
        expect(transformedData).toEqual(expectedResult);
    });
});
