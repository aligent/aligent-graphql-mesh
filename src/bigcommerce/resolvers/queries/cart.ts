import { Cart, Maybe, QueryResolvers } from '@mesh';
import { getCart } from '../../apis/graphql/cart';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { GraphQlContext } from '../../../meshrc/types';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQlContext, _info): Promise<Maybe<Cart>> => {
        // const customerImpersonationToken = await context.cache.get('customerImpersonationToken');
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers['mesh-token']);

        const response = await getCart(args.cart_id, bcCustomerId);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
