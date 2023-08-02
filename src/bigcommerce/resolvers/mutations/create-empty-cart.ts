import { createEmptyCart } from '../requests/bc-rest-calls';

export const createEmptyCartResolver = {
    resolve: (_root, _args, _context, _info) => {
        return createEmptyCart();
    },
};
