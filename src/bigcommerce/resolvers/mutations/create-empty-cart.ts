import { MutationResolvers } from '../../../meshrc/.mesh';
import { createEmptyCart } from '../requests/bc-rest-calls';

export const createEmptyCartResolver: MutationResolvers['createEmptyCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return createEmptyCart();
    },
};
