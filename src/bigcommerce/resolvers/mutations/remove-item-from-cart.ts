import { MutationResolvers, RemoveItemFromCartOutput } from '../../../meshrc/.mesh';
import { mockRemoveItemFromCart } from '../mocks/remove-item-from-cart';

export const removeItemFromCartResolver: MutationResolvers['removeItemFromCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockRemoveItemFromCart as unknown as RemoveItemFromCartOutput;
    },
};
