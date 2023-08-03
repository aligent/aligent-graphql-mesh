import { MutationResolvers, RemoveItemFromCartOutput } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockRemoveItemFromCart } from '../mocks/remove-item-from-cart';

export const removeItemFromCartResolver: MutationResolvers<CustomContext>['removeItemFromCart']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockRemoveItemFromCart as unknown) as RemoveItemFromCartOutput;
    },
};
