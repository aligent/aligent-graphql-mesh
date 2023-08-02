import { Cart, Maybe, QueryResolvers } from '../../../meshrc/.mesh';
import { getCart } from '../requests/bc-graphql-calls';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, _context, _info): Promise<Maybe<Cart>> => {
        const response = await getCart(args.cart_id);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
