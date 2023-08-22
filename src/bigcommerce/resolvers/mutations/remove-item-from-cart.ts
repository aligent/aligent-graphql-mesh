import { MutationResolvers } from '@mesh';
import { deleteCartLineItem } from '../../apis/graphql';
import { logAndThrowError } from '../../../utils';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const removeItemFromCartResolver: MutationResolvers['removeItemFromCart'] = {
    resolve: async (_root, args, context, _info) => {
        if (!args.input?.cart_id || !args.input.cart_item_id) {
            return logAndThrowError('Missing cart id or cart item id');
        }

        const removeCartItemResponse = await deleteCartLineItem(
            args.input.cart_id,
            args.input.cart_item_id.toString()
        );

        if (!removeCartItemResponse?.entityId) return null;
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const checkoutResponse = await getCheckout(removeCartItemResponse.entityId, bcCustomerId);

        return {
            cart: getTransformedCartData(checkoutResponse),
        };
    },
};
