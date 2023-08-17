import { Cart, MutationResolvers } from '@mesh';
import { addProductsToCart, createCart, getCart } from '../../apis/graphql/cart';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { EMPTY_CART_ID } from '../../apis/rest/cart';
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

        const addToCartResponse =
            cartId === EMPTY_CART_ID
                ? await createCart(lineItems)
                : await addProductsToCart(cartId, { lineItems });

        if (!addToCartResponse?.entityId) return null;
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers['mesh-token']);

        const cartResponse = await getCart(addToCartResponse.entityId, bcCustomerId);
        return {
            cart: getTransformedCartData(cartResponse) as Cart,
            user_errors: [], // TODO: Decide what are the user errors which we can return
        };
    },
};
