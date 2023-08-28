import { Product, SiteRouteArgs } from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { getPdpProductQuery } from './requests/pdp-product';
import { logAndThrowError } from '@aligent/utils';

export const getBcProductByPathGraphql = async (
    variables: SiteRouteArgs & { includeTax?: boolean },
    customerImpersonationToken: string
): Promise<Product> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getPdpProductQuery,
        variables: variables,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.route.node;
};
