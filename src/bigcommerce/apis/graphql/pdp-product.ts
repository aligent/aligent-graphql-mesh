import { BC_Product, BC_SiterouteArgs } from '../../../meshrc/.mesh';
import { bcGraphQlRequest } from './client';
import { getPdpProductQuery } from './requests/pdp-product';

export const getBcProductByPathGraphql = async (
    path: BC_SiterouteArgs,
    customerImpersonationToken: string
): Promise<BC_Product> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const productsQuery = {
        query: getPdpProductQuery,
        variables: path,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    return response.data.site.route.node;
};
