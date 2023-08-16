import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { bcGraphQlRequest } from './client';
import {
    BC_ProductConnection,
    BC_SearchProductFilterConnection,
    BC_SearchProductsFiltersInput,
} from '@mesh/external/BigCommerceGraphqlApi';
import { getProductsSearchQuery } from './requests/product-search';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcProductsGraphql = async (
    filters: BC_SearchProductsFiltersInput
): Promise<{
    products: BC_ProductConnection;
    filters: BC_SearchProductFilterConnection;
} | null> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const productsQuery = {
        query: getProductsSearchQuery,
        variables: {
            filters,
        },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowError(response.data.errors);
    }

    return response.data.site.search.searchProducts;
};
