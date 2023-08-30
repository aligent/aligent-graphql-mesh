import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from './client';
import { getRouteQuery } from './requests/route';
import { SiteRouteArgs } from '@aligent/bigcommerce-operations';

export const getRoute = async (
    variables: SiteRouteArgs & { includeTax?: boolean },
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
