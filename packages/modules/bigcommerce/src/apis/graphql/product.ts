import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from './client';
import {
    BC_ProductConnection,
    BC_SearchProductFilterConnection,
    BC_SearchProductsFiltersInput,
} from '@mesh/external/BigCommerceGraphqlApi';
import { getProductsSearchQuery } from './requests/product-search';

export const getBcProductsGraphql = async (
    variables: {
        filters: BC_SearchProductsFiltersInput;
        includeTax?: boolean;
    },
    customerImpersonationToken: string
): Promise<{
    products: BC_ProductConnection;
    filters: BC_SearchProductFilterConnection;
} | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getProductsSearchQuery,
        variables,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.search.searchProducts;
};
