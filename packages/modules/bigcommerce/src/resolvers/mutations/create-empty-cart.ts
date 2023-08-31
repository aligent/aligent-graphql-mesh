import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { createEmptyCart } from '../../apis/rest/cart';

/**
 * @deprecated function - TF is planning to remove the empty cart usage
 * TODO: Once TF removes the usage of empty cart remove it from the mesh as well
 */
export const createEmptyCartResolver: MutationResolvers['createEmptyCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return createEmptyCart();
    },
};
