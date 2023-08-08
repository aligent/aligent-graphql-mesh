import { Maybe, Products, QueryResolvers } from '../../../meshrc/.mesh';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql/pdp-product';
import { getBcProductGraphql } from '../../apis/graphql/product';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info): Promise<Maybe<Products>> => {
       // const customerImpersonationToken = await context.cache.get('customerImpersonationToken');
        const url_key = args.filter?.url_key?.eq;

        if (url_key) {
            const bcProduct = await getBcProductByPathGraphql(
                { path: url_key },
            );

            if (!bcProduct) return null;
            return { items: [getTransformedProductData(bcProduct)] };
        }

        const hasFilters = Object.keys(args?.filter || {}).length > 0;

        const filters = hasFilters
            ? {
                  ...(args.filter?.category_uid?.in
                      ? { ids: args.filter.category_uid?.in }
                      : { ids: [] }),
                  ...(args.filter?.url_key?.eq ? { path: args.filter.url_key?.eq } : { path: '' }),
              }
            : {};

        const bcProducts = await getBcProductGraphql(filters);
        return getTransformedProductsData(bcProducts);
    },
};
