import { Products, QueryResolvers } from '@aligent/orocommerce-resolvers';
import { ProductsTransformerChain } from '../../transformers/products/products-data-transformer';
import { ProductsClient, ProductsSearchArgsBuilder } from '../../apis/rest';
import { logAndThrowError, slashAtStartOrEnd } from '@aligent/utils';

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
                const urlKeyWithSlashRemoved = url_key.replace(slashAtStartOrEnd, '');
                const oroProductsData = await api.getProductBySlug(urlKeyWithSlashRemoved);
                if (!oroProductsData) return null;
                return transformer.transform({ data: { oroProductsData, pageSize, currentPage } });
            }

            // Continue to search products by provided filters
            const searchQuery = ProductsSearchArgsBuilder.buildSearchQuery(args);
            const productAttributes = await api.getProductAttributes();

            // Currently not working -> will create follow up ticket if PR feedback doenst solve
            //const aggregations = ProductsSearchArgsBuilder.buildAggregations(productAttributes);

            const sort = ProductsSearchArgsBuilder.buildSort(args?.sort);

            const oroProductsData = await api.searchProducts(
                searchQuery, // includes filters and search keywords to narrow down product search results
                '', // includes attributes to request aggregated data which is returned in the meta section of the response, and can be used to build product filters
                pageSize,
                currentPage,
                sort
            );
            return transformer.transform({
                data: { oroProductsData, productAttributes, pageSize, currentPage },
            });
        } catch (error) {
            return logAndThrowError(error);
        }
    },
} satisfies QueryResolvers['products'];
