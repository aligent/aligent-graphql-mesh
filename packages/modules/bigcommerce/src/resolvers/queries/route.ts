import { productsMock } from '../mocks/products';
import { mockCmsPage } from '../mocks/cms-page';
import { getRoute } from '../../apis/graphql/route';
import { getTransformedCategoryData } from '../../factories/transform-category-data';
import { getTransformedProductData } from '../../factories/transform-products-data';
import { QueryResolvers, RoutableInterface } from '@aligent/bigcommerce-resolvers';
import { Product } from '@aligent/bigcommerce-operations';
import { Category } from '../../types';
import { getTaxSettings } from '../../apis/graphql/settings';
import { getIncludesTax } from '@aligent/utils';

const getTransformedRouteData = (data: Record<string, unknown>): RoutableInterface => {
    const { __typename } = data;
    if (__typename === 'Brand') {
        const transformedBrandData = productsMock.items[0];
        // TODO
        return {
            // FIXME: BRAND is not a valid UrlRewriteEntityTypeEnum value
            // previously 'BRAND' - is this a Takeflight thing?
            redirect_code: 0,
            type: 'CMS_PAGE',
            ...transformedBrandData,
        };
    }

    if (__typename === 'Category') {
        return {
            ...getTransformedCategoryData(data as unknown as Category),
            type: 'CATEGORY',
        };
    }

    if (__typename === 'ContactPage') {
        // TODO
        return {
            // FIXME: CONTACT_PAGE is not a valid UrlRewriteEntityTypeEnum value
            // previously 'CONTACT_PAGE' - is this a Takeflight thing?
            type: 'CMS_PAGE',
            ...mockCmsPage,
        };
    }

    if (__typename === 'NormalPage') {
        return {
            type: 'CMS_PAGE',
            ...mockCmsPage,
        };
    }

    if (__typename === 'Product') {
        const transformedProductData = getTransformedProductData(data as unknown as Product);
        return {
            type: 'PRODUCT',
            redirect_code: 0,
            ...transformedProductData,
        };
    }

    return {
        type: 'CMS_PAGE',
        ...mockCmsPage,
    };
};

// TODO:
// - Clear up why we have Brand, ContactPage and NormalPage as types (are these client-specific?)
// - Re-test this resolver for each type of entity now that types are locking things down
// - Add tests for getTransformedRouteData
export const routeResolver: QueryResolvers['route'] = {
    resolve: async (_root, args, context, _info) => {
        const urlParam = args.url === '/' ? '/home' : args.url;
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const taxSettings = await getTaxSettings(customerImpersonationToken);
        const data = await getRoute(
            {
                includeTax: getIncludesTax(taxSettings?.pdp),
                path: urlParam,
            },
            customerImpersonationToken
        );

        if (!data) {
            return null;
        }

        const { path } = data;

        const transformedRouteData = getTransformedRouteData(data);

        return {
            relative_url: path.replace(/^\//, ''),
            ...transformedRouteData,
        };
    },
};
