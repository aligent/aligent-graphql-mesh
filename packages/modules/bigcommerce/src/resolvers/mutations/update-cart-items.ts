import { MutationResolvers, UpdateCartItemsOutput } from '@aligent/bigcommerce-resolvers';
import { updateCartLineItem } from '../../apis/graphql/cart';
import { getDeconstructedCartItemUid } from '@aligent/utils';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';
import { getBcCustomerId } from '../../utils';

export const updateCartItemsResolver: MutationResolvers['updateCartItems'] = {
    resolve: async (_root, args, context, _info): Promise<UpdateCartItemsOutput | null> => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
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

        const updateCartResponse = await updateCartLineItem(
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

        if (!updateCartResponse?.entityId) return null;

        /* The response from update cart doesn't supply enough data which Take Flight is expecting
         * so we have to follow up with a getCheckout query to get more enriched data. */
        const checkoutResponse = await getEnrichedCart(
            { cart_id: updateCartResponse.entityId },
            bcCustomerId,
            customerImpersonationToken
        );

        return {
            cart: checkoutResponse,
        };
    },
};
