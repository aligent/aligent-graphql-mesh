import { Cart, Maybe, QueryResolvers } from '@mesh';
import { getCheckout } from '../../apis/graphql/checkout';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { GraphQlContext } from '../../../meshrc/types';
import { getBcCustomerId } from '../../../utils';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQlContext, _info): Promise<Maybe<Cart>> => {
        const bcCustomerId = getBcCustomerId(context);

        const response = await getCheckout(args.cart_id, bcCustomerId);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
