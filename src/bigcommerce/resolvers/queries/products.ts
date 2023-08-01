import { QueryResolvers } from '../../../meshrc/.mesh';
import { productsMock } from '../mocks/products';

export const productsResolver: QueryResolvers['products'] = {
    resolve: async (_root, _args, _context, _info) => {
        return productsMock;
    },
};
