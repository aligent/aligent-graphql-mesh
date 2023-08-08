import { Maybe, Products, QueryResolvers } from '../../../meshrc/.mesh';
import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql/pdp-product';
import { getBcProductsGraphql } from '../../apis/graphql/product';
import { atob, getPathFromUrlKey } from '../../../utils';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info): Promise<Maybe<Products>> => {
        //const customerImpersonationToken = await context.cache.get('customerImpersonationToken');
        const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);

        if (url_key) {
            const bcProduct = await getBcProductByPathGraphql(
                { path: url_key },
            );

            if (!bcProduct) return null;
            return { items: [getTransformedProductData(bcProduct)] };
        }

        const categoryEntityId = atob(args?.filter?.category_uid?.eq || '');

        const filters = {
            ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
        };

        const bcProducts = await getBcProductsGraphql(filters);
        return getTransformedProductsData(bcProducts);
    },
};
