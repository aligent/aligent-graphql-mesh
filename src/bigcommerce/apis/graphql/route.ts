import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { getRouteQuery } from './requests/route';
import { BC_SiteRouteArgs } from '@mesh/external/BigCommerceGraphqlApi';

export const getRoute = async (
    variables: BC_SiteRouteArgs & { includeTax?: boolean },
    customerImpersonationToken: string
) => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const routeQuery = {
        query: getRouteQuery,
        variables,
    };

    const response = await bcGraphQlRequest(routeQuery, headers);
    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.route.node;
};
