import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { BC_ProductConnection, BC_SearchProductsFiltersInput } from '../../../meshrc/.mesh';
import { BC_SearchProductFilters } from '../../types';
import { getAvailableProductsSearchFiltersQuery } from './requests/available-product-search-filters';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

/**
 * Gets the available filters for product search queries
 * @param filters
 */
export const getBcAvailableProductFilters = async (
    filters: BC_SearchProductsFiltersInput
): Promise<BC_SearchProductFilters | null> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const productsQuery = {
        query: getAvailableProductsSearchFiltersQuery,
        variables: {
            filters,
        },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch products filters from BigCommerce: ${JSON.stringify(
                    response.data.errors
                )}`
            )
        );
    }

    return response.data.site.search.searchProducts.filters;
};
