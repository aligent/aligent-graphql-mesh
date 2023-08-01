import { QueryResolvers } from '../../../meshrc/.mesh';
import { getTransformedProductsData } from '../../factories/transform-products.data';
import { getBcProductsGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info) => {
        const hasFilters = Object.keys(args?.filter || {}).length > 0;

        const filters = hasFilters
            ? {
                  ...(args.filter?.category_uid?.in
                      ? { ids: args.filter.category_uid?.in }
                      : { ids: [] }),
              }
            : {};

        const bcProduct = await getBcProductsGraphql(filters);

        return getTransformedProductsData(bcProduct);
    },
};
