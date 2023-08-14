import { Products, QueryResolvers } from '@mesh';

import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql/pdp-product';
import { getBcProductsGraphql } from '../../apis/graphql/product';
import { atob, getPathFromUrlKey } from '../../../utils';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info): Promise<Products | null> => {
        /* There's no setting in the admin to switch between including and excluding gst prices. We can send a boolean value to the products query to
         * get either prices. */
        const includeTax = true;
        const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);

        if (url_key) {
            const bcProduct = await getBcProductByPathGraphql({ includeTax, path: url_key });

            if (!bcProduct) return null;
            return { items: [getTransformedProductData(bcProduct)] };
        }

        const categoryEntityId = atob(args?.filter?.category_uid?.eq || '');

        const filters = {
            ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
        };

        const bcProducts = await getBcProductsGraphql({ includeTax, ...filters });
        if (!bcProducts) return null;

        return getTransformedProductsData(bcProducts);
    },
};
