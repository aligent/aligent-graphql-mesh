import {
    getTransformedProductArgs,
    getTransformedSortArguments,
} from '../transform-product-search-arguments';
import { SearchProductFilterConnection } from '@aligent/bigcommerce-operations';

const availableFilters = {
    edges: [
        {
            node: {
                name: 'Brand',
                __typename: 'BrandSearchFilter',
            },
        },
        {
            node: {
                name: 'Color',
                filterName: 'Color',
                __typename: 'ProductAttributeSearchFilter',
            },
        },
        {
            node: {
                name: 'Size',
                filterName: 'Size',
                __typename: 'ProductAttributeSearchFilter',
            },
        },
        {
            node: {
                name: 'Price',
                __typename: 'PriceSearchFilter',
            },
        },
        {
            node: {
                name: 'Rating',
                __typename: 'RatingSearchFilter',
            },
        },
        {
            node: {
                name: 'Other',
                __typename: 'OtherSearchFilter',
            },
        },
        {
            node: {
                name: 'Category',
                __typename: 'CategorySearchFilter',
            },
        },
    ],
} as SearchProductFilterConnection;

const filtersEqArgs = {
    currentPage: 1,
    filter: {
        brand: { eq: '23' },
        category_id: { eq: '60' },
        category_uid: { eq: 'MjM=' },
        color: { eq: 'Purple' },
        rating: { eq: '1' },
        size: { eq: 'M' },
        price: { from: '20', to: '30' },
    },
    search: 'Mona',
    pageSize: 24,
};

const filtersInArgs = {
    currentPage: 1,
    filter: {
        brand: { in: ['23', '60'] },
        category_id: { in: ['60', '23'] },
        category_uid: { in: ['MjM=', 'NjA='] },
        color: { in: ['Green', 'Purple'] },
        rating: { in: ['4', '1'] },
        size: { in: ['M', 'L'] },
        price: { from: '20', to: '30' },
    },
    search: 'Mona',
    pageSize: 24,
};

describe('get-product-search-filter', () => {
    it(`Transforms Adobe Commerce search filter arguments with "eq" arg values into Big Commerce product search arguments`, () => {
        expect(getTransformedProductArgs(filtersEqArgs, availableFilters)).toEqual({
            brandEntityIds: [23],
            price: { minPrice: 20, maxPrice: 30 },
            productAttributes: [
                { attribute: 'Color', values: ['Purple'] },
                { attribute: 'Size', values: ['M'] },
            ],
            rating: { minRating: 1, maxRating: 1 },
            searchTerm: 'Mona',
            categoryEntityId: 23,
        });
    });

    it(`Transforms Adobe Commerce search filter arguments with "in" arg values into Big Commerce product search arguments`, () => {
        expect(getTransformedProductArgs(filtersInArgs, availableFilters)).toEqual({
            brandEntityIds: [23, 60],
            price: { minPrice: 20, maxPrice: 30 },
            productAttributes: [
                { attribute: 'Color', values: ['Green', 'Purple'] },
                { attribute: 'Size', values: ['M', 'L'] },
            ],
            rating: { minRating: 1, maxRating: 4 },
            searchTerm: 'Mona',
            categoryEntityIds: [23, 60],
        });
    });

    it(`Returns a initial arguments structure if no Adobe Commerce args exist`, () => {
        expect(getTransformedProductArgs({}, null)).toEqual({
            brandEntityIds: [],
            price: {},
            productAttributes: [],
            rating: {},
        });
    });

    it(`Returns argument which are not dependant on the available filter mapping`, () => {
        expect(getTransformedProductArgs(filtersEqArgs, null)).toEqual({
            brandEntityIds: [],
            price: {},
            productAttributes: [],
            rating: {},
            searchTerm: 'Mona',
            categoryEntityId: 23,
        });
    });
});

describe('get transformed BC sort arguments', () => {
    it(`Transformed Adobe Commerce name ascending sort args into BC sort args`, () => {
        const result = getTransformedSortArguments({ name: 'ASC' });

        expect(result).toEqual('A_TO_Z');
    });

    it(`Transformed Adobe Commerce name descending sort args into BC sort args`, () => {
        const result = getTransformedSortArguments({ name: 'DESC' });

        expect(result).toEqual('Z_TO_A');
    });

    it(`Transformed Adobe Commerce price ascending sort args into BC sort args`, () => {
        const result = getTransformedSortArguments({ price: 'ASC' });

        expect(result).toEqual('LOWEST_PRICE');
    });

    it(`Transformed Adobe Commerce price descending sort args into BC sort args`, () => {
        const result = getTransformedSortArguments({ price: 'DESC' });

        expect(result).toEqual('HIGHEST_PRICE');
    });

    it(`Transformed Adobe Commerce relevance sort args into BC sort args`, () => {
        const result = getTransformedSortArguments({ relevance: 'ASC' });

        expect(result).toEqual('RELEVANCE');
    });

    it(`Transformed null input into BC sort args`, () => {
        const result = getTransformedSortArguments(null);

        expect(result).toEqual('RELEVANCE');
    });
});
