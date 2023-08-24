import { MutationResolvers } from '@mesh';
import {addProductsToCart, assignCartToCustomer, createCart, getCheckout} from '../../apis/graphql';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { atob, getBcCustomerId } from '../../../utils';
import { getTransformedCartData } from '../../factories/transform-cart-data';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, args, context, _info) => {
        const { cartId, cartItems } = args;

        const lineItems = cartItems.map((cartItem) => {
            const { quantity, selected_options, uid, sku } = cartItem;

            // The "uid" is the encoded product id with "Product:" at the beginning e.g. "Product:492"
            const productEntityId = Number(atob(String(uid || '')).replace('Product:', ''));
            const variantEntityId = Number(atob(String(sku || '')).replace('Variant:', ''));

            return {
                quantity,
                productEntityId,
                variantEntityId,
                ...(selected_options && {
                    selectedOptions: transformSelectedOptions(selected_options),
                }),
            };
        });

        const bcCustomerId = getBcCustomerId(context);
        const addToCartResponse = cartId
            ? await addProductsToCart(cartId, { lineItems }, bcCustomerId)
            : await createCart(lineItems, bcCustomerId);

        if (!addToCartResponse?.entityId) return null;

        // ensure the cart is assigned to the customer otherwise a checkout will not be created
        if (bcCustomerId) {
            await assignCartToCustomer(addToCartResponse.entityId, bcCustomerId);
        }

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
