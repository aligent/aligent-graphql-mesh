import { MutationResolvers } from '../../../meshrc/.mesh';
import { mockUpdateCartItems } from '../mocks/update-cart-items';

export const updateCartItemsResolver: MutationResolvers['updateCartItems'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockUpdateCartItems;
    },
};
