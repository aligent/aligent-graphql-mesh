import { MutationResolvers } from '@mesh';
import { deleteCartLineItem } from '../../apis/graphql';
import { getBcCustomerId, getDeconstructedCartItemUid, logAndThrowError } from '../../../utils';
import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const UNDEFINED_CART = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

export const removeItemFromCartResolver: MutationResolvers['removeItemFromCart'] = {
    resolve: async (_root, args, context, _info) => {
        if (!args.input?.cart_id || !args.input.cart_item_uid) {
            return logAndThrowError('Missing cart id or cart item id');
        }
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcCustomerId = getBcCustomerId(context);

        /**
         * Extracts the "lineItemEntityId", "productEntityId" and "variantEntityId" properties from the "cartItemUid".
         * The cartItemUid is initial formed via:
         * @see createCartItemUid
         */
        const { lineItemEntityId, productEntityId, variantEntityId } = getDeconstructedCartItemUid(
            args.input.cart_item_uid
        );

        const removeCartItemResponse = await deleteCartLineItem(
            args.input.cart_id,
            lineItemEntityId,
            customerImpersonationToken,
            bcCustomerId
        );

        if (!removeCartItemResponse?.entityId)
            return {
                cart: UNDEFINED_CART,
            };

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
