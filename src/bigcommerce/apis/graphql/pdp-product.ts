import { BC_Product, BC_SiteRouteArgs } from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { getPdpProductQuery } from './requests/pdp-product';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcProductByPathGraphql = async (
    variables: BC_SiteRouteArgs & { includeTax?: boolean }
): Promise<BC_Product> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const productsQuery = {
        query: getPdpProductQuery,
        variables: variables,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowError(response.data.errors);
    }

    return response.data.site.route.node;
};
