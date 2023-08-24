import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { Cart, MutationResolvers } from '@mesh';
import { mockMergeCarts } from '../mocks/merge-carts';
import { getBcCustomerId } from '../../../utils';

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

        if (!destination_cart_id) {
            /**
             * TODO: Get customer cart id from bcCustomerId once persist cart is implemented
             * customerCartId = getCartIdFromBcCustomerAttribute();
             */

            if (!customerCartId) {
                return getTransformedCartData(guestCart);
            }
        } else {
            customerCartId = destination_cart_id;
        }

        const customerCart = await getCheckout(customerCartId, bcCustomerId);

        return mockMergeCarts as unknown as Cart;
    },
};
