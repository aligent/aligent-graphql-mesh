import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { deleteCartLineItem } from '../../apis/graphql';
import { getBcCustomerId, logAndThrowError } from '@aligent/utils';
import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const removeItemFromCartResolver: MutationResolvers['removeItemFromCart'] = {
    resolve: async (_root, args, context, _info) => {
        if (!args.input?.cart_id || !args.input.cart_item_id) {
            return logAndThrowError('Missing cart id or cart item id');
        }
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcCustomerId = getBcCustomerId(context);

        const removeCartItemResponse = await deleteCartLineItem(
            args.input.cart_id,
            args.input.cart_item_id.toString(),
            customerImpersonationToken,
            bcCustomerId
        );

        if (!removeCartItemResponse?.entityId) return null;
        const checkoutResponse = await getCheckout(
            removeCartItemResponse.entityId,
            bcCustomerId,
            customerImpersonationToken
        );

        return {
            cart: getTransformedCartData(checkoutResponse),
        };
    },
};
