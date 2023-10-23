import { mockProductFilterBc } from '../../../resolvers/mocks/product-filters.bc';
import {
    getAggregationsFromBrandFilter,
    getAggregationsFromRatingFilter,
    getTransformedAggregationOptions,
    getTransformedProductAggregations,
} from '../transform-product-aggregations';
import {
    BrandSearchFilter,
    ProductAttributeSearchFilterItemConnection,
    RatingSearchFilter,
    SearchProductFilterConnection,
} from '@aligent/bigcommerce-operations';

const expectedResult = [
    {
        attribute_code: 'brand',
        count: 1,
        label: 'Brand',
        options: [{ count: 1, label: 'Weller', value: '139' }],
        filterType: 'FilterEqualTypeInput',
    },
    {
        attribute_code: 'color',
        count: 2,
        label: 'Color',
        options: [
            {
                count: 1,
                label: 'Green',
                value: 'Green',
                swatch_data: { type: 'ColorSwatchData', value: 'green' },
            },
            {
                count: 1,
                label: 'Purple',
                value: 'Purple',
                swatch_data: { type: 'ColorSwatchData', value: 'purple' },
            },
        ],
        filterType: 'FilterEqualTypeInput',
    },
    {
        attribute_code: 'size',
        count: 2,
        label: 'Size',
        options: [
            {
                count: 1,
                label: 'M',
                value: 'M',
                swatch_data: { type: 'ColorSwatchData', value: 'm' },
            },
            {
                count: 1,
                label: 'S',
                value: 'S',
                swatch_data: { type: 'ColorSwatchData', value: 's' },
            },
        ],
        filterType: 'FilterEqualTypeInput',
    },
    {
        attribute_code: 'price',
        count: null,
        label: 'Price',
        options: [],
        filterType: 'FilterRangeTypeInput',
    },
    {
        attribute_code: 'rating',
        count: 0,
        label: 'Rating',
        options: [
            { count: 1, label: '1', value: '1' },
            { count: 1, label: '2', value: '2' },
            { count: 1, label: '3', value: '3' },
            { count: 1, label: '4', value: '4' },
            { count: 1, label: '5', value: '5' },
        ],
        filterType: 'FilterEqualTypeInput',
    },
];

describe('transform-product-aggregations', () => {
    it('Transforms a BC filters into AC aggregations', () => {
        expect(
            getTransformedProductAggregations(mockProductFilterBc as SearchProductFilterConnection)
        ).toEqual(expectedResult);
    });

    it(`returns an empty array if there's no filters`, () => {
        expect(getTransformedProductAggregations({} as SearchProductFilterConnection)).toEqual([]);
        expect(
            getTransformedProductAggregations({ edges: [{}] } as SearchProductFilterConnection)
        ).toEqual([]);
    });

    it(`returns an empty array for missing getTransformedAggregationOptions data`, () => {
        expect(
            getTransformedAggregationOptions(
                { edges: null } as ProductAttributeSearchFilterItemConnection,
                'FilterName'
            )
        ).toEqual([]);

        expect(
            getTransformedAggregationOptions(
                { edges: null } as ProductAttributeSearchFilterItemConnection,
                ''
            )
        ).toEqual([]);

        expect(
            getTransformedAggregationOptions(
                { edges: [{}] } as ProductAttributeSearchFilterItemConnection,
                'FilterName'
            )
        ).toEqual([]);
    });

    it(`returns an empty array for options if missing RatingFilter ratings`, () => {
        expect(
            getAggregationsFromRatingFilter({
                name: 'Rating',
                ratings: { edges: [{}] },
            } as RatingSearchFilter)
        ).toEqual({
            attribute_code: 'rating',
            count: 0,
            filterType: 'FilterEqualTypeInput',
            label: 'Rating',
            options: [],
        });
    });

    it(`returns an array for options if missing BrandFilter data`, () => {
        expect(
            getAggregationsFromBrandFilter({
                name: 'Brand',
                brands: { edges: [{}] },
            } as BrandSearchFilter)
        ).toEqual({
            attribute_code: 'brand',
            count: 0,
            filterType: 'FilterEqualTypeInput',
            label: 'Brand',
            options: [],
        });
    });
});
