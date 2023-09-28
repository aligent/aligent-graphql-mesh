import { Products, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedProductsData } from '../../factories/transform-products-data';
import { getTaxSettings } from '../../apis/graphql';
import { getProducts } from '../../apis/rest/products';
import { getBcProductsGraphql } from '../../apis/graphql';
import { AxiosGraphqlError, getIncludesTax, getSortedProducts, transformGQLSortArgsToRestSortArgs } from '@aligent/utils';

/* This is the maximum page size we're allowing for a products by sku look up */
const MAX_SKU_QUERY_LIMIT = 50;

/* A mapping how we want sort args property names translated to names the products
 * rest GET can work with.
 *  */
const sortKeyMapping: { [index: string]: string } = {
    position: 'sku',
};

export const productsBySkuResolver: QueryResolvers['productsBySku'] = {
    resolve: async (_root, args, context, _info): Promise<Products | null> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const taxSettings = await getTaxSettings(customerImpersonationToken);

        /* Convert sort args coming from the FE to a sort structure the rest products query will accept */
        const transformedSort = transformGQLSortArgsToRestSortArgs(args.sort, sortKeyMapping);

        const skus = args?.filter?.sku;

        /* This whole query is based on getting products by sku so if we don't receive a sku arg return null*/
        if (!skus) return null;

        const combinedSkus = [skus.eq, ...(skus.in || [])].filter(Boolean);

        /* Collects unique skus to pass the the rest Products query*/
        const uniqueSkus = [...new Set(combinedSkus)];

        const skuLength = uniqueSkus.length;

        if (skuLength > MAX_SKU_QUERY_LIMIT) {
            throw new AxiosGraphqlError('Cannot have more than 50 skus');
        }

        /* This whole query is based on getting products by sku so if we don't have an array of skus
         * at this point return null*/
        if (skuLength === 0) return null;

        /* Since Big Commerce graphql product queries don't have both options to get products by sku and sorting,
         * we need to make a products rest GET request to look up products by sku to collect their product ids.
         * We also sort the products here so the rest request returns the products id in the desired sort order */
        const productsBySku = await getProducts({
            ...(skuLength === 1 && { sku: uniqueSkus[0] || '' }),
            ...(skuLength > 1 && { 'sku:in': uniqueSkus as string[] }),
            include_fields: 'id,name,sku',
            limit: args.pageSize,
            sort: transformedSort.sort,
        });

        if (!productsBySku?.data) return null;

        /* Collect all the rest products ids. They should be in the correct sort order */
        const productIds = productsBySku.data.map((product) => product.id);

        /* If we pass an empty array to the graphql products query it will return all products, so
         * return null instead */
        if (productIds.length === 0) return null;

        /* Query for the products through the graphql products query with the collected product ids from the
         * rest GET request.
         * We make this second products query as the "getTransformedProductsData" function knows how to
         * transform graphql products data and doesn't deal with rest products data */
        const bcProducts = await getBcProductsGraphql(
            { entityIds: productIds, includeTax: getIncludesTax(taxSettings?.plp) },
            customerImpersonationToken
        );

        if (!bcProducts?.edges) return null;

        /* Work out which product identifiers we should sort by.
         *
         * If we received the sort.position arg we want to sort the products by the position of
         * the skus listed in the "sku" arg.
         * Any other sort arg we will use the order of the product ids returned from the products rest request.
         * */
        const sortByIdentifiers = args.sort?.position
            ? { skus: uniqueSkus as string[] }
            : { ids: productIds };

        /* The "graphql" products query doesn't return products in the same order as the ids passed as arguments
         * and doesn't have a sorting argument option, so we have to work out the sorting with our own functions
         * according either to the "sku" arg or order of the ids returned from the products rest request. */
        const sortedProducts = getSortedProducts(
            bcProducts.edges,
            sortByIdentifiers,
            transformedSort.direction
        );

        return getTransformedProductsData({ products: { ...bcProducts, edges: sortedProducts } });
    },
};
