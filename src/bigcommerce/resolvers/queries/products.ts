import { createAcReadyProduct } from '../../factories/transform-products.data';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver = {
    resolve: async (_root, args, _context, _info) => {
        const bcProduct = await getBcProductGraphql(args.filter.sku.eq);

        const acReadyProduct = createAcReadyProduct(bcProduct);

        if (acReadyProduct.configurable_options) {
            acReadyProduct.items[0].__typename = 'ConfigurableProduct'
            return acReadyProduct;
        } else {
            acReadyProduct.items[0].__typename = 'SimpleProduct'
            return acReadyProduct
        }

    },
};
