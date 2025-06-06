import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { addProductsToCart, createCart } from '../../apis/graphql';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { atob } from '@aligent/utils';
import { getEnrichedCart, UNDEFINED_CART } from '../../apis/graphql/enriched-cart';
import { getBcCustomerId } from '../../utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const addProductsToCartResolver = {
    resolve: async (_root, args, context, _info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const { cartId, cartItems } = args;

        const lineItems = cartItems.map((cartItem) => {
            const { quantity, selected_options, uid } = cartItem;

            // The "uid" is the encoded product id with "Product:" at the beginning e.g. "Product:492"
            const productEntityId = Number(atob(String(uid || '')).replace('Product:', ''));

            return {
                quantity,
                productEntityId,
                ...(selected_options && {
                    selectedOptions: transformSelectedOptions(selected_options),
                }),
            };
        });

        const bcCustomerId = getBcCustomerId(context);
        const { cart: cartMutationResponse, userErrors } = cartId
            ? await addProductsToCart(
                  cartId,
                  { lineItems },
                  customerImpersonationToken,
                  bcCustomerId
              )
            : await createCart(context, lineItems, customerImpersonationToken, bcCustomerId);

        const hasFailedCreatingCart = !cartId && !cartMutationResponse?.entityId;

        if (hasFailedCreatingCart) {
            return {
                cart: UNDEFINED_CART,
                user_errors: userErrors,
            };
        }

        /* We fall back to using the "cartId" arg when the "addProductsToCart" errors
         * due to "user_errors", This way we can query for the user existing
         * cart and return it to them along with the user_error */
        const cartIdToQuery = cartMutationResponse?.entityId || cartId;

        // Even though add to cart mutations return cart details, Big Commerce site.cart query doesn't
        // return all the same information to satisfy the Adobe commerce cart response.
        // The BC cart lacks a lot of the pricing information as well as shipping and billing information.
        // Shipping information can be pretty important before reaching the checkout. This is where the site.checkout
        // query comes in which is called when the above getCheckout is invoked.
        // We’re not actually querying site.cart but site.checkout instead.
        const checkoutResponse = await getEnrichedCart(
            { cart_id: cartIdToQuery },
            context,
            bcCustomerId
        );
        return {
            cart: checkoutResponse,
            user_errors: userErrors,
        };
    },
} satisfies MutationResolvers['addProductsToCart'];
