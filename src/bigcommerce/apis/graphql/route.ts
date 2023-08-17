import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { bcGraphQlRequest } from './client';
import { getRouteQuery } from './requests/route';
import { BC_SiteRouteArgs } from '@mesh/external/BigCommerceGraphqlApi';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getRoute = async (variables: BC_SiteRouteArgs & { includeTax?: boolean }) => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const routeQuery = {
        query: getRouteQuery,
        variables,
    };

    const response = await bcGraphQlRequest(routeQuery, headers);
    if (response.data.errors) {
        return logAndThrowError(response.data.errors);
    }

    return response.data.site.route.node;
};
