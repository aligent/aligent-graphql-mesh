import { MutationResolvers } from '@mesh';
import { addProductsToCart, createCart } from '../../apis/graphql/cart';
import { transformSelectedOptions } from '../../factories/transform-selected-options';
import { EMPTY_CART_ID } from '../../apis/rest/cart';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, args, _context, _info) => {
        const { cartId, cartItems } = args;
        const lineItems = cartItems.map(({ sku, quantity, selected_options }) => ({
            quantity,
            productEntityId: parseInt(sku), // TF FE Will send BC entity ID as SKU
            ...(selected_options && {
                selectedOptions: transformSelectedOptions(selected_options),
            }),
        }));

        let cart;

        if (cartId === EMPTY_CART_ID) {
            cart = await createCart(lineItems);
            return {
                cart: {
                    ...cart,
                    id: cart?.entityId,
                },
            };
        }
        cart = await addProductsToCart(cartId, { lineItems });
        return { cart };
    },
};
