import { getBcProduct } from '../lib/bc-graphql-calls';
import { createAcReadyProduct } from '../lib/mesh-transforms';

export const productsResolver = {
    resolve: async (_root, args, _context, _info) => {
        console.log({ args });
        const bcProduct = await getBcProduct(args.search);

        console.log({ bcProduct });

        return createAcReadyProduct(bcProduct);
    },
};
