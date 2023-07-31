import { Products, ProductsResolvers } from '../../../meshrc/.mesh';
import { createAcReadyProduct } from '../../factories/transform-products.data';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: ProductsResolvers<Products> = {
    resolve: async (_root, args, _context, _info) => {
        const bcProduct = await getBcProductGraphql(args.filter.sku.eq);

        return  createAcReadyProduct(bcProduct);
    },
};
