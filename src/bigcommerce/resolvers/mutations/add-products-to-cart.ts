import { MutationResolvers } from '@mesh';
import { addProductsToCart, createCart } from '../../apis/graphql/cart';
import { getCheckout } from '../../apis/graphql/checkout';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { getTransformedCartData } from '../../factories/transform-cart-data';

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

        const addToCartResponse = cartId
            ? await createCart(lineItems)
            : await addProductsToCart(cartId, { lineItems });

        if (!addToCartResponse?.entityId) return null;
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);

        // Even though add to cart mutations return cart details, Big Commerce site.cart query doesn't
        // return all the same information to satisfy the Adobe commerce cart response.
        // The BC cart lacks a lot of the pricing information as well as shipping and billing information.
        // Shipping information can be pretty important before reaching the checkout. This is where the site.checkout
        // query comes in which is called when the above getCheckout is invoked.
        // We’re not actually querying site.cart but site.checkout instead.
        const cartResponse = await getCheckout(addToCartResponse.entityId, bcCustomerId);
        return {
            cart: getTransformedCartData(cartResponse),
            user_errors: [], // TODO: Decide what are the user errors which we can return
        };
    },
};
