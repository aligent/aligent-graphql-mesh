import { ProductInterfaceResolvers, Products, ProductsResolvers } from '../../../meshrc/.mesh';
import { createAcReadyProduct } from '../../factories/transform-products.data';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: ProductsResolvers<Products> = {
    // __isTypeOf(obj, context, info) {
    //     console.log('ff');
    //     obj.
    //     if (obj.configurable) {
    //         return 'ConfigurableProduct';
    //     } else {
    //         return 'SimpleProduct'
    //     }
    // },
    resolve: async (_root, args, _context, _info) => {
        const bcProduct = await getBcProductGraphql(args.filter.sku.eq);

        const acReadyProduct = createAcReadyProduct(bcProduct);
        console.log(acReadyProduct);
        return acReadyProduct;
    },
};
