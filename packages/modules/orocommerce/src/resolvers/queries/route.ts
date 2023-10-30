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
import { getIdFromLandingPageApiUrl, getUidFromCategoryApiUrl } from '../../utils';

const getRouteTypeData = async (
    root: {},
    args: RequireFields<QueryRouteArgs, 'url'>,
    context: GraphQLModules.ModuleContext,
    info: GraphQLResolveInfo,
    routeData: Routes
): Promise<ResolversTypes['RoutableInterface'] | null> => {
    const {
        attributes: { apiUrl, resourceType, url },
    } = routeData;

    if (resourceType === 'master_catalog_category_product_collection') {
        const categoryId = getUidFromCategoryApiUrl(apiUrl);

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

    /* about us, any other CMS page
     *
     * Home page is a "system_page" "resourceType" but will be treated as
     * a CMS Page with its own landing page
     * */
    if (resourceType === 'landing_page' || url === '/') {
        const cmsPageId = getIdFromLandingPageApiUrl(apiUrl);

        /*
        @todo uncomment and adjust when there's a cms page resolver
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

    /* quick order, account order, home page
     * These routes are defined in the PWA, so it's not expected for this condition
     * to be hit.
     *
     * Home page will be treated as a landing page
     *  */
    if (resourceType === 'system_page') {
        return mockCmsPage;
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
