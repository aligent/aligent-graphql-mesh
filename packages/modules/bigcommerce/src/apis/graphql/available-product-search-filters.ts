import { bcGraphQlRequest } from './client';
import {
    SearchProductFilterConnection,
    SearchProductsFiltersInput,
} from '@aligent/bigcommerce-operations';
import { getAvailableProductsSearchFiltersQuery } from './requests/available-product-search-filters';
import { logAndThrowError } from '@aligent/utils';

/**
 * Gets the available filters for product search queries
 * @param filters
 */
export const getBcAvailableProductFilters = async (
    filters: SearchProductsFiltersInput,
    customerImpersonationToken: string
): Promise<SearchProductFilterConnection> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getAvailableProductsSearchFiltersQuery,
        variables: {
            filters,
        },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.search.searchProducts.filters;
};
