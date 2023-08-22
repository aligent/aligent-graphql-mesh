import { MutationResolvers } from '@mesh';
import { deleteCartLineItem } from '../../apis/graphql';
import { getBcCustomerId, logAndThrowError } from '../../../utils';
import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const removeItemFromCartResolver: MutationResolvers['removeItemFromCart'] = {
    resolve: async (_root, args, context, _info) => {
        if (!args.input?.cart_id || !args.input.cart_item_id) {
            return logAndThrowError('Missing cart id or cart item id');
        }

        const bcCustomerId = getBcCustomerId(context);

        const removeCartItemResponse = await deleteCartLineItem(
            args.input.cart_id,
            args.input.cart_item_id.toString(),
            bcCustomerId
        );

        if (!removeCartItemResponse?.entityId) return null;
        const checkoutResponse = await getCheckout(removeCartItemResponse.entityId, bcCustomerId);

        return {
            cart: getTransformedCartData(checkoutResponse),
        };
    },
};
