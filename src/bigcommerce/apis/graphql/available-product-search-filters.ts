import { bcGraphQlRequest } from './client';
import {
    BC_SearchProductFilterConnection,
    BC_SearchProductsFiltersInput,
} from '@mesh/external/BigCommerceGraphqlApi';
import { getAvailableProductsSearchFiltersQuery } from './requests/available-product-search-filters';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

/**
 * Gets the available filters for product search queries
 * @param filters
 */
export const getBcAvailableProductFilters = async (
    filters: BC_SearchProductsFiltersInput,
    customerImpersonationToken: string
): Promise<BC_SearchProductFilterConnection> => {
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

    if (response.data.errors) {
        return logAndThrowError(response.data.errors);
    }

    return response.data.site.search.searchProducts.filters;
};
