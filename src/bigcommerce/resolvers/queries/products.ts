import { QueryResolvers } from '../../../meshrc/.mesh';
import { createAcReadyProduct } from '../../factories/transform-products.data';
import { getBcProductGraphql } from '../requests/bc-graphql-calls';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, args, _context, _info) => {
        const sku = args.filter?.sku?.eq || '';

        const bcProduct = await getBcProductGraphql(sku);

        return createAcReadyProduct(bcProduct);
    },
};
