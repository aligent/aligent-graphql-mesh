import { MutationResolvers, CartItemInput } from '@aligent/bigcommerce-resolvers';
import { addProductsToCartResolver } from './add-products-to-cart';
import { getLineItems } from '../../apis/rest/order';
import { getBcCustomerId } from '../../utils';
import { getCartIdFromBcCustomerAttribute } from '../../apis/graphql';
import { transformRestCartLineItems } from '../../factories/transform-rest-cart-line-items';

const UNDEFINED_CART = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (root, { orderNumber }, context, info) => {
        const bcCustomerId = getBcCustomerId(context);

        // Check to see if user is logged in
        if (!bcCustomerId) {
            return {
                cart: UNDEFINED_CART,
                userInputErrors: [
                    {
                        code: 'REORDER_NOT_AVAILABLE',
                        message: `Customer must be logged in to use reorder.`,
                        path: ['headers', 'authorization'],
                    },
                ],
            };
        }

        /*
         * Fetch and Iterate over all the orders line items converting them to input object
         * Data is being transformed from BC -> AC
         * Since we call the add to cart resolver directly it needs to be in AC format
         */
        const cartItems: Array<CartItemInput> = [];
        for await (const lineItem of getLineItems(orderNumber)) {
            cartItems.push(transformRestCartLineItems(lineItem));
        }

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const cartId = await getCartIdFromBcCustomerAttribute(
            bcCustomerId,
            customerImpersonationToken
        );

        // Call existing resolver to add these products to the cart
        const response = await addProductsToCartResolver.resolve(
            root,
            {
                // A new cart will be created if one doesn't exist
                cartId: cartId || '',
                cartItems,
            },
            context,
            info
        );

        return {
            cart: response?.cart || UNDEFINED_CART,
            userInputErrors: response?.user_errors || [],
        };
    },
};
