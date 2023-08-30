import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import {
    addProductsToCart,
    getCartIdFromBcCustomerAttribute,
    getCheckout,
} from '../../apis/graphql';
import { getBcCustomerId } from '../../utils';
import { transformCartItemsToLineItems } from '../../factories/transform-cart-items-to-line-items';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

export const mergeCartsResolver: MutationResolvers['mergeCarts'] = {
    resolve: async (_root, args, context, _info) => {
        const { source_cart_id: guestCartId, destination_cart_id } = args || {};

        const bcCustomerId = getBcCustomerId(context);

        //  Merge cart can be only performed by a logged-in user
        if (!bcCustomerId)
            throw new Error("The current customer isn't authorized to perform merge cart");

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const guestCheckout = await getCheckout(guestCartId, null, customerImpersonationToken);

        // There may be a cart to merge provided by the FE or already attached to the customer
        const customerCartId =
            destination_cart_id ||
            (await getCartIdFromBcCustomerAttribute(bcCustomerId, customerImpersonationToken));

        if (!customerCartId) {
            // Nothing to merge, return the guest cart
            return getTransformedCartData(guestCheckout);
        }

        const customerCheckout = getEnrichedCart(
            { cart_id: customerCartId },
            bcCustomerId,
            customerImpersonationToken
        );

        // At this point we certainly have the customerCartId so If guest cart doesn't have a cart -> return customer cart
        if (!guestCheckout.cart) {
            return customerCheckout;
        }

        const guestCartLineItems = transformCartItemsToLineItems(
            guestCheckout.cart.lineItems.physicalItems
        );

        // Merge the guest and customer cart by adding line items of guest cart to customer cart
        const updatedCustomerCartResponse = await addProductsToCart(
            customerCartId,
            { lineItems: guestCartLineItems },
            customerImpersonationToken,
            bcCustomerId
        );

        return getEnrichedCart(
            { cart_id: updatedCustomerCartResponse.entityId },
            bcCustomerId,
            customerImpersonationToken
        );
    },
};
