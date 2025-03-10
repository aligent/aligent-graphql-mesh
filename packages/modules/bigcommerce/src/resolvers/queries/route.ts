import { QueryResolvers, RoutableInterface, StoreConfig } from '@aligent/bigcommerce-resolvers';
import {
    Blog,
    BlogPost,
    Brand,
    ContactPage,
    NormalPage,
    Product,
    RawHtmlPage,
    Settings,
    TaxDisplaySettings,
} from '@aligent/bigcommerce-operations';
import { getRoute, retrieveStoreConfigsFromCache } from '../../apis/graphql';
import { getTransformedCategoryData } from '../../factories/transform-category-data';
import { getTransformedProductData } from '../../factories/transform-products-data';
import { getTransformedPageData } from '../../factories/get-transformed-page-data';
import { productsMock } from '../mocks/products';
import { mockCmsPage } from '../mocks/cms-page';
import { Category } from '../../types';
import { getIncludesTax } from '../../utils/get-tax';
import { getBundleItemProducts } from '../../apis/graphql/bundle-item-products';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

interface TransformedRouteData {
    data: Blog | BlogPost | Brand | Category | ContactPage | NormalPage | Product | RawHtmlPage;
    storeConfig: StoreConfig & Settings;
    customerImpersonationToken: string;
    taxSettings?: TaxDisplaySettings | null;
}

const getTransformedRouteData = async ({
    data,
    storeConfig,
    customerImpersonationToken,
    taxSettings,
}: TransformedRouteData): Promise<RoutableInterface> => {
    const { __typename } = data;
    if (__typename === 'Brand') {
        const transformedBrandData = productsMock.items[0];
        // TODO
        return {
            // FIXME: BRAND is not a valid UrlRewriteEntityTypeEnum value
            // previously 'BRAND' - is this a Takeflight thing?
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

    if (__typename === 'NormalPage' || __typename === 'RawHtmlPage') {
        const cdnUrl = storeConfig.url.cdnUrl;

        return {
            ...getTransformedPageData(data as NormalPage | RawHtmlPage, cdnUrl),
            type: 'CMS_PAGE',
        };
    }

    if (__typename === 'Product') {
        const bcProduct = data as unknown as Product;
        const bundleItemProducts = await getBundleItemProducts(
            bcProduct,
            customerImpersonationToken,
            taxSettings
        );
        const transformedProductData = getTransformedProductData(
            bcProduct,
            bundleItemProducts?.items
        );
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
export const routeResolver = {
    resolve: async (_root, args, context, _info) => {
        const urlParam = args.url === '/' ? '/home' : args.url;
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const storeConfig = await retrieveStoreConfigsFromCache(context);
        const { tax: taxSettings } = storeConfig;

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

        const transformedRouteData = await getTransformedRouteData({
            data,
            storeConfig,
            customerImpersonationToken,
            taxSettings,
        });

        return {
            relative_url: path.replace(/^\//, ''),
            ...transformedRouteData,
        };
    },
} satisfies QueryResolvers['route'];
