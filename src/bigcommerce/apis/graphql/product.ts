import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { BC_ProductConnection, BC_SearchProductsFiltersInput } from '../../../meshrc/.mesh';
import { getProductsSearchQuery } from './requests/product-search';
import { BC_SearchProductFilters } from '../../types';

export const getBcProductsGraphql = async (
    filters: BC_SearchProductsFiltersInput,
    customerImpersonationToken: string
): Promise<{
    products: BC_ProductConnection;
    filters: BC_SearchProductFilters;
} | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getProductsSearchQuery,
        variables: {
            filters,
        },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch products from BigCommerce: ${JSON.stringify(response.data.errors)}`
            )
        );
    }

    return response.data.site.search.searchProducts;
};
