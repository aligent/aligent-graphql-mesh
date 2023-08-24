import { Cart, MutationResolvers } from '@mesh';
import { mockMergeCarts } from '../mocks/merge-carts';

export const mergeCartsResolver: MutationResolvers['mergeCarts'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockMergeCarts as unknown as Cart;
    },
};
