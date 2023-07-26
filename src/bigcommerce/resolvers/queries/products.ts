import { productsMock } from '../mocks/products';

export const productsResolver = {
    resolve: async (_root, _args, _context, _info) => {
        return productsMock;
    },
};
