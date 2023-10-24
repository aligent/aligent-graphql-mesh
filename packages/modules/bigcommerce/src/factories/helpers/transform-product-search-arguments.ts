import { atob } from '@aligent/utils';
import {
    FilterTypeInput,
    ProductAttributeSortInput,
    QueryProductsArgs,
} from '@aligent/bigcommerce-resolvers';
import {
    SearchProductsFiltersInput,
    SearchProductFilterConnection,
    SearchProductsSortInput,
} from '@aligent/bigcommerce-operations';

type createFilterMappingProps = {
    [key: string]: {
        name: string;
        filterName: string;
        __typename: string;
    };
} | null;

/**
 * Creates an available filters mapping where the filter objects are assigned to a key based on
 * their filter name but lower cased.
 *  e.g.
 * {
 *     brand: {name: "Brand", __typename: "BrandSearchFilter"},
 *     color: {name: "Color", __typename: "ProductAttributeSearchFilter"},
 *     size: {name: "Size", __typename: "ProductAttributeSearchFilter"}
 * }
 * @param availableFilters
 */
const createFilterMapping = (
    availableFilters: SearchProductFilterConnection | null
): createFilterMappingProps => {
    if (!availableFilters?.edges || availableFilters?.edges?.length === 0) return null;

    return availableFilters.edges.reduce((carry, filter) => {
        if (!filter?.node) return carry;
        const { name } = filter.node;
        return { ...carry, [name.toLowerCase()]: filter.node };
    }, {});
};

export const getTransformedProductArgs = (
    acFilterArgs: QueryProductsArgs,
    availableBcProductFilters: SearchProductFilterConnection | null
): SearchProductsFiltersInput => {
    /* These are base filters we can send to the bc productsSearch query without affecting the results.
     * If we have other filters like "categoryEntityId: []" pre adding this will skew the results
     * or even return no products */
    const bcProductFilters: {
        brandEntityIds: number[];
        categoryEntityId?: number;
        categoryEntityIds?: number[];
        price: object;
        productAttributes: { attribute: string; values: string[] }[];
        rating: object;
        searchTerm?: string;
    } = {
        brandEntityIds: [],
        price: {},
        productAttributes: [],
        rating: {},
    };

    if (acFilterArgs.search) {
        bcProductFilters['searchTerm'] = acFilterArgs.search;
    }

    if (!acFilterArgs.filter) return bcProductFilters;

    const filterMapping = createFilterMapping(availableBcProductFilters);

    for (const [key, value] of Object.entries(acFilterArgs.filter)) {
        const { eq: eqValue, in: inArray, to, from } = value as FilterTypeInput;

        /* Transform filters which don't map to an available filter type*/
        if (key === 'category_uid') {
            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(atob(eqValue));
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map((id) => Number(atob(String(id))));
            }
            continue;
        }

        if (key === 'category_id') {
            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(eqValue);
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map((id) => Number(id));
            }
            continue;
        }

        /* Transform arguments that correspond to an available filter types */
        if (!filterMapping) continue;

        const { filterName, __typename: filterType } = filterMapping[key.toLowerCase()] || {};

        if (filterType === 'BrandSearchFilter') {
            if (eqValue) {
                bcProductFilters.brandEntityIds = [Number(eqValue)];
            }

            if (inArray) {
                inArray.forEach((id) => {
                    bcProductFilters.brandEntityIds.push(Number(id));
                });
            }
            continue;
        }

        /**
         * "ProductAttributeSearchFilter" are custom product attributes declare on
         * products in the Big Commerce admin and are not pre-defined filters
         * like e.g."BrandSearchFilter", "PriceSearchFilter" etc
         */
        if (filterType === 'ProductAttributeSearchFilter') {
            if (eqValue) {
                bcProductFilters.productAttributes.push({
                    attribute: filterName,
                    values: [eqValue],
                });
            }

            if (inArray && inArray.length > 0) {
                const attributeValues = inArray.map((value) => String(value));

                bcProductFilters.productAttributes.push({
                    attribute: filterName,
                    values: attributeValues,
                });
            }
            continue;
        }

        if (filterType === 'PriceSearchFilter') {
            bcProductFilters.price = { minPrice: from, maxPrice: to };
            continue;
        }

        if (filterType === 'RatingSearchFilter') {
            if (eqValue) {
                bcProductFilters.rating = {
                    minRating: Number(eqValue),
                    maxRating: Number(eqValue),
                };
            }

            if (inArray) {
                const minRating = Math.min(...inArray.map((rating) => Number(rating)));
                const maxRating = Math.max(...inArray.map((rating) => Number(rating)));
                bcProductFilters.rating = { minRating, maxRating };
            }
        }
    }

    return bcProductFilters;
};

export const getTransformedSortArguments = (
    sortArgs: ProductAttributeSortInput | null
): SearchProductsSortInput => {
    if (!sortArgs) {
        return 'RELEVANCE';
    }

    if ('price' in sortArgs) {
        if (sortArgs.price === 'ASC') {
            return 'LOWEST_PRICE';
        }
        return 'HIGHEST_PRICE';
    }

    return 'RELEVANCE';
};
