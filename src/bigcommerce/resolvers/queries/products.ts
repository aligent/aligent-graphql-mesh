import { Products, QueryResolvers } from '@mesh';

import {
    getTransformedProductData,
    getTransformedProductsData,
} from '../../factories/transform-products-data';
import { getBcProductByPathGraphql } from '../../apis/graphql/pdp-product';
import { getBcProductsGraphql } from '../../apis/graphql/product';
import { atob, getIncludesTax, getPathFromUrlKey } from '../../../utils';
import { getTaxSettings } from '../../apis/graphql/settings';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info): Promise<Products | null> => {
        const taxSettings = await getTaxSettings();

        const url_key = getPathFromUrlKey(args.filter?.url_key?.eq || null);

        if (url_key) {
            const bcProduct = await getBcProductByPathGraphql({
                includeTax: getIncludesTax(taxSettings?.pdp),
                path: url_key,
            });

            if (!bcProduct) return null;
            return { items: [getTransformedProductData(bcProduct)] };
        }

        const categoryEntityId = atob(args?.filter?.category_uid?.eq || '');

        const filters = {
            ...(categoryEntityId && { categoryEntityId: Number(categoryEntityId) }),
        };

        const bcProducts = await getBcProductsGraphql({
            includeTax: getIncludesTax(taxSettings?.plp),
            ...filters,
        });
        if (!bcProducts) return null;

        return getTransformedProductsData(bcProducts);
    },
};
