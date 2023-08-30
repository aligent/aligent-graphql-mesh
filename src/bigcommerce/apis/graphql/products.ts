import { BC_ProductConnection, BC_SiteProductsArgs } from '@mesh/external/BigCommerceGraphqlApi';
import { getProductsQuery } from './requests';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '../../../utils';

export const getBcProductsGraphql = async (
    variables: BC_SiteProductsArgs & { includeTax?: boolean },
    customerImpersonationToken: string
): Promise<BC_ProductConnection | null> => {
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
