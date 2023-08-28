import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from './client';
import {
    ProductConnection,
    SearchProductFilterConnection,
    SearchProductsFiltersInput,
} from '@aligent/bigcommerce-operations';
import { getProductsSearchQuery } from './requests/product-search';

export const getBcProductsGraphql = async (
    variables: {
        filters: SearchProductsFiltersInput;
        includeTax?: boolean;
    },
    customerImpersonationToken: string
): Promise<{
    products: ProductConnection;
    filters: SearchProductFilterConnection;
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
