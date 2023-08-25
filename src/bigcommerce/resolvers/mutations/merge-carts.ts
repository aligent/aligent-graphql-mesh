import {
    addProductsToCart,
    getCartIdFromBcCustomerAttribute,
    getCheckout,
} from '../../apis/graphql';
import { MutationResolvers } from '@mesh';
import { getBcCustomerId } from '../../../utils';
import { transformCartItemsToLineItems } from '../../factories/transform-cart-items-to-line-items';
import { getTransformedCartData } from '../../factories/transform-cart-data';

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

        let customerCartId = null;
        // If FE doesn't send destination_cart_id try to get customer cart by customer ID
        if (!destination_cart_id) {
            customerCartId = await getCartIdFromBcCustomerAttribute(
                bcCustomerId,
                customerImpersonationToken
            );
            // If customer has no saved cart -> return guest cart
            if (!customerCartId) {
                return getTransformedCartData(guestCheckout);
            }
        } else {
            // If FE sends destination_cart_id it will become the customer cart id and no need to query customer attributes
            customerCartId = destination_cart_id;
        }

        const customerCheckout = await getCheckout(
            customerCartId,
            bcCustomerId,
            customerImpersonationToken
        );

        // At this point we certainly have the customerCartId so If guest cart doesn't have a cart -> return customer cart
        if (!guestCheckout.cart) {
            return getTransformedCartData(customerCheckout);
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

        const updatedCustomerCheckout = await getCheckout(
            updatedCustomerCartResponse.entityId,
            bcCustomerId,
            customerImpersonationToken
        );

        return getTransformedCartData(updatedCustomerCheckout);
    },
};
