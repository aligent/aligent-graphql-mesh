import { MutationResolvers } from '../../../meshrc/.mesh';
import { addProductsToCart } from '../../apis/graphql/cart';
import { transformSelectedOptions } from '../../factories/transform-selected-options';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, args, _context, _info) => {
        const { cartId, cartItems } = args;
        const lineItems = cartItems.map(({ sku, quantity, selected_options }) => ({
            quantity,
            productEntityId: parseInt(sku), // TF FE Will send BC entity ID as SKU
            ...(selected_options && {
                selectedOptions: transformSelectedOptions(selected_options as string[]),
            }),
        }));

        const response = await addProductsToCart(cartId, { lineItems });
        return response;
    },
};
