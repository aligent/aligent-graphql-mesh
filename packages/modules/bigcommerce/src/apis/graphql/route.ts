import {
    Blog,
    BlogPost,
    Brand,
    Category,
    ContactPage,
    NormalPage,
    Product,
    RawHtmlPage,
    SiteRouteArgs,
} from '@aligent/bigcommerce-operations';
import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from './client';
import { getRouteQuery } from './requests';

export const getRoute = async (
    variables: SiteRouteArgs & { includeTax?: boolean },
    customerImpersonationToken: string
): Promise<Blog | BlogPost | Brand | Category | ContactPage | NormalPage | Product | RawHtmlPage> => {
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
