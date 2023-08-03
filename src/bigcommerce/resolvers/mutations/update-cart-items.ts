import { MutationResolvers, UpdateCartItemsOutput } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockUpdateCartItems } from '../mocks/update-cart-items';

export const updateCartItemsResolver: MutationResolvers<CustomContext>['updateCartItems'] = {
    resolve: (_root, _args, _context, _info) => {
        return (mockUpdateCartItems as unknown) as UpdateCartItemsOutput;
    },
};
