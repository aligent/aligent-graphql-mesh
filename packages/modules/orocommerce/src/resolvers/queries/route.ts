import {
    QueryResolvers,
    QueryRouteArgs,
    RequireFields,
    ResolversTypes,
} from '@aligent/orocommerce-resolvers';
import { GraphQLResolveInfo } from 'graphql/type';
import { Routes } from '../../types/routes';
import { RoutesClient } from '../../apis/rest/routes';
import { mockCmsPage } from '../mocks/cms-page';
import { productMock } from '../mocks/products';
import { categoriesResolver } from './categories';
import { getCategoryUidFromCategoryApiUrl } from '../../utils';

const getRouteTypeData = async (
    root: object,
    args: RequireFields<QueryRouteArgs, 'url'>,
    context: GraphQLModules.ModuleContext,
    info: GraphQLResolveInfo,
    routeData: Routes
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
        /*
        @todo uncomment and adjust when there's a products resolver
        const urlKey = id.replace(':', '');
        const productsResolverData = await productsResolver.resolve(
            root,
            { url_key: urlKey},
            context,
            info
        );

        return productsResolverData
        */

        return {
            ...productMock,
        };
    }

    /* home page, about us, any other CMS page */
    if (resourceType === 'landing_page') {
        /*
        @todo uncomment and adjust when there's a cms page resolver
        const cmsPageId = getIdFromLandingPageApiUrl(apiUrl);

        const cmsPageData = await cmsPageResolver.resolve(
            root,
            { id },
            context,
            info
        );

        return cmsPageData
        */

        return mockCmsPage;
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
