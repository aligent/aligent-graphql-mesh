import { MutationResolvers } from '@mesh';
import { createEmptyCart } from '../../apis/rest/cart';

export const createEmptyCartResolver: MutationResolvers['createEmptyCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return createEmptyCart();
    },
};
