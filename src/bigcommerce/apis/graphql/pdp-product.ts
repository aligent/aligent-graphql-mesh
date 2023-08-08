import { BC_Product, BC_SiterouteArgs } from '../../../meshrc/.mesh';
import { bcGraphQlRequest } from './client';
import { getPdpProductQuery } from './requests/pdp-product';
import { logAndThrowError } from '../../../utils/error-handling';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcProductByPathGraphql = async (
    path: BC_SiterouteArgs,
): Promise<BC_Product> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const productsQuery = {
        query: getPdpProductQuery,
        variables: path,
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.data.errors) {
        logAndThrowError(
            new Error(
                `Failed to fetch product from BigCommerce: ${JSON.stringify(response.data.errors)}`
            )
        );
    }

    return response.data.site.route.node;
};
