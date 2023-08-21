import { Cart, Maybe, QueryResolvers } from '@mesh';
import { getCheckout } from '../../apis/graphql/checkout';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { GraphQlContext } from '../../../meshrc/types';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQlContext, _info): Promise<Maybe<Cart>> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers['mesh-token']);

        const response = await getCheckout(args.cart_id, bcCustomerId, customerImpersonationToken);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
