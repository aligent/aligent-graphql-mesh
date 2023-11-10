import { Products, QueryResolvers } from '@aligent/orocommerce-resolvers';
import { ProductsTransformerChain } from '../../transformers/products/products-data-transformer';
import { ProductsClient, ProductsSearchArgsBuilder } from '../../apis/rest';
import { logAndThrowError, getPathFromUrlKey } from '@aligent/utils';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, context, _info): Promise<Products | null> => {
        const api: ProductsClient = context.injector.get(ProductsClient);

        try {
            const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);
            const pageSize = args?.pageSize || 24;
            const currentPage = args?.currentPage || 1;

            const transformer: ProductsTransformerChain =
                context.injector.get(ProductsTransformerChain);

            // PDP - find product by "url_key" arg
            if (url_key) {
                const oroProductsData = await api.getProductBySlug('url_key');

                if (!oroProductsData) return null;

                return transformer.transform({ data: { oroProductsData, pageSize, currentPage } });
            }

            // PLP - search products
            const searchQuery = ProductsSearchArgsBuilder.buildSearchQuery(args);
            const productAttributes = await api.getProductAttributes();
            const aggregations = ProductsSearchArgsBuilder.buildAggregations(productAttributes);
            const sort = ProductsSearchArgsBuilder.buildSort(args?.sort);

            const oroProductsData = await api.searchProducts(
                searchQuery,
                aggregations,
                pageSize,
                currentPage,
                sort
            );

            return transformer.transform({ data: { oroProductsData, pageSize, currentPage } });
        } catch (error) {
            return logAndThrowError(error);
        }
    },
};
