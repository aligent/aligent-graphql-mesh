import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { getProductsQuery } from './requests/products';
import { BC_ProductConnection, BC_SiteproductsArgs } from '../../../meshrc/.mesh';

export const getBcProductGraphql = async (
    filters: BC_SiteproductsArgs,
    customerImpersonationToken: string
): Promise<BC_ProductConnection> => {
    const { ids } = filters;

    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getProductsQuery,
        variables: {
            ids,
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

    return response.data.site.products;
};
