import { Cart, Maybe, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getCheckout } from '../../apis/graphql/checkout';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { getBcCustomerId } from '@aligent/utils';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context: GraphQLModules.Context, _info): Promise<Maybe<Cart>> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const response = await getCheckout(args.cart_id, bcCustomerId, customerImpersonationToken);
        if (!response?.entityId) return null;
        return getTransformedCartData(response);
    },
};
