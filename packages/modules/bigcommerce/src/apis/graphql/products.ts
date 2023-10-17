import { ProductConnection, SiteProductsArgs } from '@aligent/bigcommerce-operations';
import { getProductsQuery } from './requests';
import { bcGraphQlRequest, graphqlPaginate } from './client';
import { logAndThrowError } from '@aligent/utils';

export const getBcProductsGraphql = async (
    variables: SiteProductsArgs & { includeTax?: boolean },
    customerImpersonationToken: string
): Promise<ProductConnection | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getProductsQuery,
        variables,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.products;
};

/**
 * Gets all pages of products for the requested arguments
 *
 * @param variables
 * @param customerImpersonationToken
 * @param pageSize
 * @param requestedPage
 */
export const getAllBcGraphqlProductsPages = async (
    variables: SiteProductsArgs & { includeTax?: boolean },
    customerImpersonationToken: string,
    pageSize?: number,
    requestedPage?: number
): Promise<ProductConnection | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const graphqlRequest = {
        headers,
        query: getProductsQuery,
        variables,
    };

    const responsePages = await graphqlPaginate(
        graphqlRequest,
        'site.products.pageInfo',
        pageSize,
        requestedPage
    );

    /* Combine all the products as if they came from one response */
    const combinedProducts: ProductConnection = responsePages.reduce((carry, responsePage) => {
        return {
            ...responsePage,
            edges: [...(carry?.edges || []), ...(responsePage?.site?.products.edges || [])],
        };
    }, {});

    return combinedProducts;
};
