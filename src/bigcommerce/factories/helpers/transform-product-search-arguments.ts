import { atob } from '../../../utils';
import {
    BC_SearchProductsFiltersInput,
    FilterEqualTypeInput,
    FilterRangeTypeInput,
    QueryproductsArgs,
} from '../../../meshrc/.mesh/index';
import { BC_SearchProductFilters } from '../../types';

type createFilterMappingProps = {
    [key: string]: {
        name: string;
        __typename: string;
    };
} | null;

const createFilterMapping = (
    availableFilters: BC_SearchProductFilters
): createFilterMappingProps => {
    if (!availableFilters?.edges || availableFilters?.edges?.length === 0) return null;

    return availableFilters.edges.reduce((carry, filter) => {
        const { name } = filter.node;
        return { ...carry, [name.toLowerCase()]: filter.node };
    }, {});
};

export const getTransformedProductSearchArguments = (
    acFilterArgs: QueryproductsArgs,
    availableBcProductFilters: BC_SearchProductFilters
): BC_SearchProductsFiltersInput => {
    /* These are base filters we can send to the bc productsSearch query without affecting the results.
     * If we have other filters like "categoryEntityId: []" pre added, this will affect the results */
    const bcProductFilters = {
        brandEntityIds: [],
        price: {},
        productAttributes: [],
        rating: {},
        searchTerm: '',
    } as any;

    if (acFilterArgs.search) {
        bcProductFilters.searchTerm = acFilterArgs.search;
    }

    if (!acFilterArgs.filter) return bcProductFilters;

    const filterMapping = createFilterMapping(availableBcProductFilters);

    for (const [key, value] of Object.entries(acFilterArgs.filter)) {
        const { eq: eqValue, in: inArray, to, from } = value as FilterEqualTypeInput &
            FilterRangeTypeInput;

        /* Transform filters which don't map to an available filter type*/
        if (key === 'category_uid') {
            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(atob(eqValue));
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map(uid => uid && Number(atob(uid)));
            }
            continue;
        }

        if (key === 'category_id') {
            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(eqValue);
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map(id => Number(id));
            }
            continue;
        }

        /* Transform arguments that correspond to an available filter types */
        if (!filterMapping) continue;

        const { name: filterName, __typename: filterType } = filterMapping[key.toLowerCase()] || {};

        if (filterType === 'BrandSearchFilter') {
            if (eqValue) {
                bcProductFilters.brandEntityIds = [Number(atob(eqValue))];
            }

            if (inArray) {
                bcProductFilters.brandEntityIds = inArray.map(id => id && Number(atob(id)));
            }
            continue;
        }

        if (filterType === 'ProductAttributeSearchFilter') {
            if (eqValue) {
                bcProductFilters.productAttributes.push({
                    attribute: filterName,
                    values: [eqValue],
                });
            }

            if (inArray) {
                bcProductFilters.productAttributes.push({ attribute: filterName, values: inArray });
            }
            continue;
        }

        if (filterType === 'PriceSearchFilter') {
            bcProductFilters.price = { minPrice: from, maxPrice: to };
            continue;
        }

        if (filterType === 'RatingSearchFilter') {
            if (eqValue) {
                bcProductFilters.rating = { minRating: eqValue, maxRating: eqValue };
            }

            if (inArray) {
                const minRating = Math.min(...inArray.map(rating => Number(rating)));
                const maxRating = Math.max(...inArray.map(rating => Number(rating)));
                bcProductFilters.rating = { minRating, maxRating };
            }
        }
    }

    return bcProductFilters;
};
