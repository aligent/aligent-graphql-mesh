import { addProductsToCart, getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { MutationResolvers } from '@mesh';
import { getBcCustomerId } from '../../../utils';
import { transformCartItemsToLineItems } from '../../factories/transform-cart-items-to-line-items';

export const mergeCartsResolver: MutationResolvers['mergeCarts'] = {
    resolve: async (_root, args, context, _info) => {
        const { source_cart_id: guestCartId, destination_cart_id } = args || {};

        // Source cart id aka guest cart id is required in merge cart query
        if (!guestCartId) throw new Error('Required parameter "source_cart_id" is missing');

        const bcCustomerId = getBcCustomerId(context);

        //  Merge cart can be only performed by a logged-in user
        if (!bcCustomerId)
            throw new Error("The current customer isn't authorized to perform merge cart");

        let customerCartId = '';
        const guestCart = await getCheckout(guestCartId, bcCustomerId);

        // If FE doesn't send destination_cart_id try to get customer cart by customer ID
        if (!destination_cart_id) {
            /**
             * TODO: Get customer cart id from bcCustomerId once persist cart is implemented
             * customerCartId = getCartIdFromBcCustomerAttribute();
             */

            // If customer has no previous cart return the guest cart
            if (!customerCartId) {
                return getTransformedCartData(guestCart);
            }
        } else {
            // If FE sends destination_cart_id it will become the customer cart id and no need to query customer attributes
            customerCartId = destination_cart_id;
        }

        const customerCart = await getCheckout(customerCartId, bcCustomerId);

        // At this point we certainly have the customerCartId so If guest cart doesn't have a cart return customer cart
        if (!guestCart.cart) {
            return getTransformedCartData(customerCart);
        }

        const guestCartLineItems = transformCartItemsToLineItems(guestCart.cart.lineItems.physicalItems);

        //  Merge the gust and customer cart by adding guest cart items to customer cart
        const updatedCustomerCartResponse = await addProductsToCart(
            customerCartId,
            { lineItems: guestCartLineItems },
            bcCustomerId
        );
        const updatedCustomerCart = await getCheckout(
            updatedCustomerCartResponse.entityId,
            bcCustomerId
        );

        return getTransformedCartData(updatedCustomerCart);
    },
};
