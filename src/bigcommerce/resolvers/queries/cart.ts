import { Cart, Maybe, QueryResolvers } from '../../../meshrc/.mesh';
import { getCart } from '../../apis/graphql/cart';

import { getTransformedCartData } from '../../factories/transform-cart-data';
import { GraphQlContext } from '../../../meshrc/types';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQlContext, _info): Promise<Maybe<Cart>> => {
        const response = await getCart(args.cart_id, context);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
