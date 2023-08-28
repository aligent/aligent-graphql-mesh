import { Cart, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getCheckout } from '../../apis/graphql';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { getBcCustomerId } from '@aligent/utils';

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

/**
 * This resolver is used to get a logged in customers cart. This query
 * isn't expected to receive a cart id but instead needs to work out
 * how to get a users previous active cart based on the users customer id
 * from a authorization token.
 */
export const customerCartResolver: QueryResolvers['customerCart'] = {
    resolve: async (_root, _args, context, _info): Promise<Cart> => {
        const bcCustomerId = getBcCustomerId(context);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        if (!bcCustomerId) {
            throw new Error(`An authorized user is required to perform this query.`);
        }

        /*@todo Need to do persist cart logic here for logged in users
         *
         * 1. Attempt to find a logged in users previous cart_id based on their "bcCustomerId"
         * 2. Attempt to query for the cart based on the cart_id
         *    a. If the attempt fails, return an empty cart
         *    b. If a cart is retrieved, return the retrieved cart
         * */
        const cartId = '';

        if (!cartId) return UNDEFINED_CART;

        const response = await getCheckout(cartId, bcCustomerId, customerImpersonationToken);

        if (!response?.entityId) return UNDEFINED_CART;

        return getTransformedCartData(response);
    },
};
