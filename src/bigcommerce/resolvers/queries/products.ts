import { QueryResolvers } from '../../../meshrc/.mesh';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products.data';
import { getBcProductByPathGraphql, getBcProductsGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info) => {
        const url_key = args.filter?.url_key?.eq;

        if (url_key) {
            const bcProduct = await getBcProductByPathGraphql({ path: url_key });

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

        const bcProducts = await getBcProductsGraphql(filters);
        return getTransformedProductsData(bcProducts);
    },
};
