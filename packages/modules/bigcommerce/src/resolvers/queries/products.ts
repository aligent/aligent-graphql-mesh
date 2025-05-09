import { Products, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { logAndThrowError, atob, getPathFromUrlKey } from '@aligent/utils';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import {
    getBcAvailableProductFilters,
    getBcProductByPathGraphql,
    getBcProductSearchGraphql,
    retrieveStoreConfigsFromCache,
} from '../../apis/graphql';
import {
    getTransformedProductArgs,
    getTransformedSortArguments,
} from '../../factories/helpers/transform-product-search-arguments';
import { getIncludesTax } from '../../utils/get-tax';
import { getProductSearchPagination } from '../../apis/graphql/helpers/products-pagination';
import { getBundleItemProducts } from '../../apis/graphql/bundle-item-products';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, context, _info): Promise<Products | null> => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);

        const storeConfig = await retrieveStoreConfigsFromCache(context);
        const { tax: taxSettings } = storeConfig;

        try {
            const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);

            // The PDP passes an "url_key" arg, so if we see this then get product information from Big Commerces "site.route.product" query
            // as it's the only query that accepts a "path". "path" is based on the "url_key" but with a "/" in the front of it.
            if (url_key) {
                const bcProduct = await getBcProductByPathGraphql(
                    {
                        includeTax: getIncludesTax(taxSettings?.pdp),
                        path: url_key,
                        namespace: args.filter?.metafield_namespace?.eq,
                    },
                    customerImpersonationToken
                );

                if (!bcProduct) return null;

                const bundleItemProducts = await getBundleItemProducts(
                    bcProduct,
                    customerImpersonationToken,
                    taxSettings
                );

                return { items: [getTransformedProductData(bcProduct, bundleItemProducts?.items)] };
            }

            const priceFilterFrom = args.filter?.price?.from || undefined;
            const categoryEntityId = atob(args?.filter?.category_uid?.eq || '');
            const searchTerm = args?.search || '';
            const pageSize = args?.pageSize || 24;
            const sort = args?.sort || null;

            /* These base filters will help the "getBcAvailableProductFilters" get the available filters for search and
             * category pages
             * */
            const availableProductFiltersVariables = {
                ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
                ...(searchTerm && { searchTerm: searchTerm }),
                // priceFilterFrom is not used in the getBcAvailableProductFilters but is provided because at least one filter is required
                ...(priceFilterFrom && {
                    price: { maxPrice: 1000, minPrice: 0 },
                }),
            };

            const availableBcProductFilters = await getBcAvailableProductFilters(
                availableProductFiltersVariables,
                customerImpersonationToken
            );

            const transformedFilterArguments = getTransformedProductArgs(
                args,
                availableBcProductFilters
            );

            const transformedSortArguments = getTransformedSortArguments(sort);

            /* Retrieve the pagination cursor for the next set of products we
             * want to query */
            const paginationPage = await getProductSearchPagination(
                { filters: transformedFilterArguments, sort: transformedSortArguments },
                customerImpersonationToken,
                pageSize,
                args?.currentPage
            );

            const bcProducts = await getBcProductSearchGraphql(
                {
                    after: paginationPage?.startCursor,
                    includeTax: getIncludesTax(taxSettings?.plp),
                    filters: transformedFilterArguments,
                    sort: transformedSortArguments,
                    pageSize,
                },
                customerImpersonationToken
            );

            if (!bcProducts) return null;

            return getTransformedProductsData(bcProducts, pageSize, paginationPage.currentPage);
        } catch (error) {
            return logAndThrowError(error);
        }
    },
};
