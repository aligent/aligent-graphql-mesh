import { MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { createEmptyCart } from '../requests/bc-rest-calls';

export const createEmptyCartResolver: MutationResolvers<CustomContext>['createEmptyCart']= {
    resolve: (_root, _args, _context, _info) => {
        return createEmptyCart();
    },
};
