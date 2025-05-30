import { MutationResolvers, UpdateCartItemsOutput } from '@aligent/bigcommerce-resolvers';
import { updateCartLineItem } from '../../apis/graphql/cart';
import { getDeconstructedCartItemUid } from '@aligent/utils';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';
import { getBcCustomerId } from '../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const updateCartItemsResolver: MutationResolvers['updateCartItems'] = {
    resolve: async (_root, args, context, _info): Promise<UpdateCartItemsOutput | null> => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const { cart_id, cart_items } = args.input || {};

        if (!cart_id || !cart_items?.[0]?.cart_item_uid) {
            throw new Error(`Missing update cart information`);
        }

        const { quantity } = cart_items[0];

        if (quantity === 0) {
            throw new Error(`Quantity cannot be "0"`);
        }

        if (!quantity || isNaN(quantity)) {
            throw new Error(`Cart item quantity is incorrect`);
        }

        const bcCustomerId = getBcCustomerId(context);

        /**
         * Extracts the "lineItemEntityId", "productEntityId" and "variantEntityId" properties from the "cartItemUid".
         * The cartItemUid is initial formed via:
         * @see createCartItemUid
         */
        const { lineItemEntityId, productEntityId, variantEntityId } = getDeconstructedCartItemUid(
            cart_items[0].cart_item_uid
        );

        const { cart: cartMutationResponse } = await updateCartLineItem(
            {
                cartEntityId: cart_id,
                lineItemEntityId,
                data: {
                    lineItem: {
                        productEntityId,
                        ...(variantEntityId && { variantEntityId }),
                        quantity,
                    },
                },
            },
            bcCustomerId,
            customerImpersonationToken
        );

        /* We fall back to using the "cartId" arg when the "addProductsToCart" errors
         * due to "user_errors", This way we can query for the user existing
         * cart and return it to them along with the user_error */
        const cartIdToQuery = cartMutationResponse?.entityId || cart_id;

        /* The response from update cart doesn't supply enough data which Take Flight is expecting
         * so we have to follow up with a getCheckout query to get more enriched data. */
        const checkoutResponse = await getEnrichedCart(
            { cart_id: cartIdToQuery },
            context,
            bcCustomerId
        );

        return {
            cart: checkoutResponse,
        };
    },
};
