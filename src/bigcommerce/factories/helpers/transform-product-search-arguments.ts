import { atob } from '../../../utils';

const createFilterMapping = availableFilters => {
    if (!availableFilters) return null;
    return availableFilters.edges.reduce((carry, filter) => {
        const { name } = filter.node;
        return { ...carry, [name.toLowerCase()]: filter.node };
    }, {});
};

export const getTransformedProductSearchArguments = (acFilterArgs, availableBcProductFilters) => {
    /* These are base filters we can send to the bc productsSearch query without affecting the results.
     * If we have other filters like "categoryEntityId: []" pre added, this will affect the results */
    const bcProductFilters = {
        brandEntityIds: [],
        price: {},
        productAttributes: [],
        rating: {},
        searchTerm: '',
    };

    if (acFilterArgs.search) {
        bcProductFilters.searchTerm = acFilterArgs.search;
    }

    if (!acFilterArgs.filter) return bcProductFilters;

    const filterMapping = createFilterMapping(availableBcProductFilters);

    for (const key in acFilterArgs.filter) {
        const value = acFilterArgs.filter[key];

        /* Transform filters which don't map to an available filter type*/
        if (key === 'category_uid') {
            const { eq: eqValue, in: inArray } = value;

            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(atob(value.eq));
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map(uid => Number(atob(uid)));
            }
            continue;
        }

        if (key === 'category_id') {
            const { eq: eqValue, in: inArray } = value;

            if (eqValue) {
                bcProductFilters.categoryEntityId = Number(value.eq);
            }

            if (inArray) {
                bcProductFilters.categoryEntityIds = inArray.map(id => Number(id));
            }
            continue;
        }

        /* Transform arguments that correspond to an available filter types */
        if (!filterMapping || filterMapping.length === 0) continue;

        const { name: filterName, __typename: filterType } = filterMapping[key.toLowerCase()] || {};

        if (filterType === 'BrandSearchFilter') {
            const { eq: eqValue, in: inArray } = value;

            if (eqValue) {
                bcProductFilters.brandEntityIds = [Number(atob(eqValue))];
            }

            if (inArray) {
                bcProductFilters.brandEntityIds = inArray.map(id => Number(atob(id)));
            }
            continue;
        }

        if (filterType === 'ProductAttributeSearchFilter') {
            const { eq: eqValue, in: inArray } = value;

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
            const { from, to } = value;
            bcProductFilters.price = { minPrice: from, maxPrice: to };
            continue;
        }

        if (filterType === 'RatingSearchFilter') {
            const { eq: eqValue, in: inArray } = value;

            if (eqValue) {
                bcProductFilters.rating = { minRating: eqValue, maxRating: eqValue };
            }

            if (inArray) {
                const minRating = Math.min(...inArray);
                const maxRating = Math.max(...inArray);
                bcProductFilters.rating = { minRating, maxRating };
            }
        }
    }

    return bcProductFilters;
};
