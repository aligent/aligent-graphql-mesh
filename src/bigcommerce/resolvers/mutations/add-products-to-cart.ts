import { MutationResolvers } from '@mesh';
import { addProductsToCart, createCart } from '../../apis/graphql';
import { getCheckout } from '../../apis/graphql';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { getTransformedCartData } from '../../factories/transform-cart-data';
import { getBcCustomerId } from '../../../utils';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, args, context, _info) => {
        const { cartId, cartItems } = args;
        const lineItems = cartItems.map(({ sku, quantity, selected_options }) => ({
            quantity,
            productEntityId: parseInt(sku), // TF FE Will send BC entity ID as SKU
            ...(selected_options && {
                selectedOptions: transformSelectedOptions(selected_options),
            }),
        }));

        const bcCustomerId = getBcCustomerId(context);
        const addToCartResponse = cartId
            ? await addProductsToCart(cartId, { lineItems }, bcCustomerId)
            : await createCart(lineItems, bcCustomerId);

        if (!addToCartResponse?.entityId) return null;

        // Even though add to cart mutations return cart details, Big Commerce site.cart query doesn't
        // return all the same information to satisfy the Adobe commerce cart response.
        // The BC cart lacks a lot of the pricing information as well as shipping and billing information.
        // Shipping information can be pretty important before reaching the checkout. This is where the site.checkout
        // query comes in which is called when the above getCheckout is invoked.
        // We’re not actually querying site.cart but site.checkout instead.
        const checkoutResponse = await getCheckout(addToCartResponse.entityId, bcCustomerId);
        return {
            cart: getTransformedCartData(checkoutResponse),
            user_errors: [], // TODO: Decide what are the user errors which we can return
        };
    },
};
