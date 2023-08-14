import { bcGraphQlRequest } from './client';
import { getRouteQuery } from './requests/route';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getRoute = async (url: string) => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
    };

    const routeQuery = {
        query: getRouteQuery,
        variables: {
            /* @todo add "includeTax" from admin setting.
             * "includeTax" is only for "Product" routes. This is hardcoded at the moment as there's no admin setting to control this.
             */
            includeTax: true,
            path: url,
        },
    };

    const response = await bcGraphQlRequest(routeQuery, headers);
    return response.data.site.route.node;
};
