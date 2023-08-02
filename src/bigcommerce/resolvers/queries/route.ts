import { mockCategories } from '../mocks/categories';
import { productsMock } from '../mocks/products';
import { mockCmsPage } from '../mocks/cms-page';
import { getRoute } from '../requests/bc-graphql-calls';
import { getTransformedCategoriesData } from '../../factories/transform-category-data';
import { getTransformedProductData } from '../../factories/transform-products.data';

const getTransformedRouteData = data => {
    const { __typename } = data;
    if (__typename === 'Brand') {
        const transformedBrandData = productsMock.items[0];
        return {
            type: 'BRAND',
            ...transformedBrandData,
        };
    }

    if (__typename === 'Category') {
        return {
            ...getTransformedCategoriesData(data),
            type: 'CATEGORY',
            __typename: 'CategoryTree',
        };
    }

    if (__typename === 'ContactPage') {
        return {
            type: 'CONTACT_PAGE',
            mockRestResponse: {
                ...mockCategories.items[0].children[1],
                products: productsMock,
            },
        };
    }

    if (__typename === 'NormalPage') {
        const transformedCmsData = mockCmsPage;
        return { type: 'CMS_PAGE', ...transformedCmsData };
    }

    if (__typename === 'Product') {
        const transformedProductData = getTransformedProductData(data);
        return {
            type: 'PRODUCT',
            ...transformedProductData,
        };
    }

    const transformedCmsData = mockCmsPage;
    return { type: 'CMS_PAGE', ...transformedCmsData };
};

export const routeResolver = {
    resolve: async (
        root: any,
        args: { url: string },
        context: {
            headers: { authorization: string };
        },
        info: any
    ): Promise<any> => {
        const urlParam = args.url === '/' ? '/home' : args.url;

        const data = await getRoute(urlParam);

        if (!data) {
            return null;
        }

        const { path } = data;

        const transformedRouteData = getTransformedRouteData(data);

        return {
            redirect_code: 0,
            relative_url: path.replace(/^\//, ''),
            ...transformedRouteData,
        };
    },
};
