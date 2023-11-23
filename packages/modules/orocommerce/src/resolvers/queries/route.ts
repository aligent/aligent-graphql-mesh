import {
    QueryResolvers,
    QueryRouteArgs,
    RequireFields,
    ResolversTypes,
} from '@aligent/orocommerce-resolvers';
import { GraphQLResolveInfo } from 'graphql/type';
import { Route } from '../../types/routes';
import { RoutesClient } from '../../apis/rest/routes';

import { getCategoryUidFromCategoryApiUrl, getIdFromLandingPageApiUrl } from '../../utils';
import { slashAtStartOrEnd } from '@aligent/utils';

import { categoriesResolver, cmsPageResolver, productsResolver } from './';

const getRouteTypeData = async (
    root: object,
    args: RequireFields<QueryRouteArgs, 'url'>,
    context: GraphQLModules.ModuleContext,
    info: GraphQLResolveInfo,
    routeData: Route
): Promise<ResolversTypes['RoutableInterface'] | null> => {
    const {
        attributes: { apiUrl, resourceType, url },
    } = routeData;

    if (resourceType === 'master_catalog_category_product_collection') {
        const categoryId = getCategoryUidFromCategoryApiUrl(apiUrl);

        const categoriesResolverData = await categoriesResolver.resolve(
            root,
            { filters: { category_uid: { eq: categoryId } }, currentPage: 1, pageSize: 1 },
            context,
            info
        );

        return categoriesResolverData.items[0];
    }

    if (resourceType === 'product') {
        const urlKey = url.replace(slashAtStartOrEnd, '');

        const productsResolverData = await productsResolver.resolve(
            root,
            { filter: { url_key: { eq: urlKey } }, pageSize: 1, currentPage: 1 },
            context,
            info
        );

        return productsResolverData?.items?.[0] || null;
    }

    /* home page, about us, any other CMS page */
    if (resourceType === 'landing_page') {
        const cmsPageId = getIdFromLandingPageApiUrl(apiUrl);

        const cmsPageData = await cmsPageResolver.resolve(
            root,
            { id: Number(cmsPageId) },
            context,
            info
        );

        return cmsPageData;
    }

    /* quick order, account order
     * These routes are defined in the PWA, so it's not expected for this condition
     * to be hit.
     *  */
    if (resourceType === 'system_page') {
        /* If no page can be found return null which will prompt the PWA to raise its 404 page */
        return null;
    }

    /* If no page can be found return null which will prompt the PWA to raise its 404 page */
    return null;
};

export const routeResolver: QueryResolvers['route'] = {
    resolve: async (root, args, context, info) => {
        const urlParam = args.url.replace(/\//g, ':');

        const routesClient: RoutesClient = context.injector.get(RoutesClient);
        const routeData = await routesClient.getRoutes(urlParam);

        if (!routeData) return null;

        const { url, redirectStatusCode } = routeData.attributes;

        const transformedRouteData = await getRouteTypeData(root, args, context, info, routeData);

        /* If no page can be found return null which will prompt the PWA to raise its 404 page */
        if (!transformedRouteData) return null;

        return {
            ...transformedRouteData,
            redirect_code: !redirectStatusCode ? 0 : redirectStatusCode,
            relative_url: url ? url.replace(/^\//, '') : args.url,
        };
    },
};
