import {
    addProductsToCart,
    getCartIdFromBcCustomerAttribute,
    getCheckout,
} from '../../apis/graphql';
import { Cart, MutationResolvers } from '@mesh';
import { getBcCustomerId } from '../../../utils';
import { transformCartItemsToLineItems } from '../../factories/transform-cart-items-to-line-items';

const MERGE_CART_CONSTANTS = {
    total_quantity: 0, // This is not being using in FE send 0 until we remove this from FE
    __typename: 'Cart',
};

export const mergeCartsResolver: MutationResolvers['mergeCarts'] = {
    resolve: async (_root, args, context, _info) => {
        const { source_cart_id: guestCartId, destination_cart_id } = args || {};

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        // Source cart id aka guest cart id is required in merge cart query
        if (!guestCartId) throw new Error('Required parameter "source_cart_id" is missing');

        const bcCustomerId = getBcCustomerId(context);

        //  Merge cart can be only performed by a logged-in user
        if (!bcCustomerId)
            throw new Error("The current customer isn't authorized to perform merge cart");

        let customerCartId = null;

        // If FE doesn't send destination_cart_id try to get customer cart by customer ID
        if (!destination_cart_id) {
            customerCartId = await getCartIdFromBcCustomerAttribute(
                bcCustomerId,
                customerImpersonationToken
            );
            // If customer has no previous cart return the guest cart
            if (!customerCartId) {
                return {
                    id: guestCartId,
                    ...MERGE_CART_CONSTANTS,
                } as unknown as Cart;
            }
        } else {
            // If FE sends destination_cart_id it will become the customer cart id and no need to query customer attributes
            customerCartId = destination_cart_id;
        }

        const guestCart = await getCheckout(guestCartId, null, customerImpersonationToken);
        // At this point we certainly have the customerCartId so If guest cart doesn't have a cart return customer cart
        if (!guestCart.cart) {
            return { id: customerCartId, ...MERGE_CART_CONSTANTS } as unknown as Cart;
        }

        const guestCartLineItems = transformCartItemsToLineItems(
            guestCart.cart.lineItems.physicalItems
        );

        //  Merge the gust and customer cart by adding guest cart items to customer cart
        const updatedCustomerCartResponse = await addProductsToCart(
            customerCartId,
            { lineItems: guestCartLineItems },
            customerImpersonationToken,
            bcCustomerId
        );

        return {
            id: updatedCustomerCartResponse.entityId,
            ...MERGE_CART_CONSTANTS,
        } as unknown as Cart;
    },
};
