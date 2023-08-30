import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { deleteCartLineItem } from '../../apis/graphql';
import { getBcCustomerId, getDeconstructedCartItemUid, logAndThrowError } from '@aligent/utils';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

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
        if (args.input?.cart_item_id) {
            return logAndThrowError(
                'cart_item_id is deprecated, please use cart_item_uid instead.'
            );
        }

        if (!args.input?.cart_id || !args.input.cart_item_uid) {
            return logAndThrowError('Missing cart id or cart item uid');
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
        const { lineItemEntityId } = getDeconstructedCartItemUid(args.input.cart_item_uid);

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

        const checkoutResponse = await getEnrichedCart(
            { cart_id: removeCartItemResponse.entityId },
            bcCustomerId,
            customerImpersonationToken
        );

        return {
            cart: checkoutResponse,
        };
    },
};
