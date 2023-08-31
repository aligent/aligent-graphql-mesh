import { ProductConnection, SiteProductsArgs } from '@aligent/bigcommerce-operations';
import { getProductsQuery } from './requests';
import { bcGraphQlRequest } from './client';
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
