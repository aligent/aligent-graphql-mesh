import { Products, QueryResolvers } from '@aligent/orocommerce-resolvers';
import { ProductsTransformerChain } from '../../transformers/products/products-data-transformer';
import { ProductsClient, ProductsSearchArgsBuilder } from '../../apis/rest';
import { atob, logAndThrowError } from '@aligent/utils';

const DEFAULT_PLP_PRODUCTS_DISPLAY = 24;

export const productsResolver = {
    resolve: async (_root, args, context, _info): Promise<Products | null> => {
        const api: ProductsClient = context.injector.get(ProductsClient);
        try {
            const url_key = args.filter?.url_key?.eq;
            const pageSize = args?.pageSize || DEFAULT_PLP_PRODUCTS_DISPLAY;
            const currentPage = args?.currentPage || 1;

            const transformer: ProductsTransformerChain =
                context.injector.get(ProductsTransformerChain);

            // The PDP passes an "url_key" arg, so if we see this then get product information from Oro "site.route.product" query
            if (url_key) {
                const oroProductsData = await api.getProductBySlug(url_key);
                if (!oroProductsData) return null;

                return transformer.transform({ data: { oroProductsData, pageSize, currentPage } });
            }
            console.log(args);
            const categoryUid = args.filter?.category_uid?.eq as string;
            const decodedCategoryUid = atob(categoryUid);
            const categoryId = JSON.parse(decodedCategoryUid)
            categoryId.id
            // Continue to search products by provided filters
            // const searchQuery = ProductsSearchArgsBuilder.buildSearchQuery(args);
            // console.log(searchQuery, 'ssssssssssssssssssss');
            const productAttributes = await api.getProductAttributes();
            console.log(productAttributes);
            // const aggregations = ProductsSearchArgsBuilder.buildAggregations(productAttributes);
            // console.log(aggregations);
            const sort = ProductsSearchArgsBuilder.buildSort(args?.sort);

            const oroProductsData = await api.searchProducts(
                `category =${categoryId.id}`, // includes filters and search keywords to narrow down product search results
                '', // includes attributes to request aggregated data which is returned in the meta section of the response, and can be used to build product filters
                pageSize,
                currentPage,
                sort
            );
            console.log(oroProductsData);
            return transformer.transform({
                data: { oroProductsData, productAttributes, pageSize, currentPage },
            });
        } catch (error) {
            return logAndThrowError(error);
        }
    },
} satisfies QueryResolvers['products'];
