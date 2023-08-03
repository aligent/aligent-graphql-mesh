import { Cart, QueryResolvers } from '../../../meshrc/.mesh';
import { mockCart } from '../mocks/cart';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockCart as unknown as Cart;
    },
};
