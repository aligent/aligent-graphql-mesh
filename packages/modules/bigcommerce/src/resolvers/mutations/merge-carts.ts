import {
    BundleCartItem,
    ConfigurableCartItem,
    MutationResolvers,
    SimpleCartItem,
} from '@aligent/bigcommerce-resolvers';
import { GraphqlError } from '@aligent/utils';
import {
    addProductsToCart,
    assignGuestCartToNewUserAccount,
    getCartIdFromBcCustomerAttribute,
} from '../../apis/graphql';
import { getBcCustomerId } from '../../utils';
import { transformCartItemsToLineItems } from '../../factories/transform-cart-items-to-line-items';
import { getEnrichedCart } from '../../apis/graphql/enriched-cart';

export const mergeCartsResolver: MutationResolvers['mergeCarts'] = {
    resolve: async (_root, args, context, _info) => {
        const { source_cart_id: guestCartId, destination_cart_id } = args || {};

        const bcCustomerId = getBcCustomerId(context);

        //  Merge cart can be only performed by a logged-in user
        if (!bcCustomerId)
            throw new GraphqlError(
                'authorization',
                "The current customer isn't authorized to perform merge cart"
            );

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const guestCheckoutQuery = getEnrichedCart({ cart_id: guestCartId }, context, null);

        // There may be a cart to merge provided by the FE or already attached to the customer
        const customerCartIdQuery =
            destination_cart_id ||
            getCartIdFromBcCustomerAttribute(bcCustomerId, customerImpersonationToken);

        const [guestCheckout, customerCartId] = await Promise.all([
            guestCheckoutQuery,
            customerCartIdQuery,
        ]);

        /* This is for guest users who have a guest cart and are creating a new account.
         * Since we know the user doesn't have a cart attached to a user account we assign
         * their guest cart to their new customer account */
        if (!customerCartId) {
            await assignGuestCartToNewUserAccount(
                guestCartId,
                bcCustomerId,
                customerImpersonationToken
            );

            return guestCheckout;
        }

        // At this point we certainly have the customerCartId so If guest cart doesn't have a cart -> return customer cart
        if (!guestCheckout.items) {
            const customerCheckout = await getEnrichedCart(
                { cart_id: customerCartId },
                context,
                bcCustomerId
            );

            return customerCheckout;
        }

        const guestCartLineItems = transformCartItemsToLineItems(
            guestCheckout.items as Array<ConfigurableCartItem | BundleCartItem | SimpleCartItem>
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
            context,
            bcCustomerId
        );
    },
};
