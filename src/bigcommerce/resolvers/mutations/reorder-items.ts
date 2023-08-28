import { MutationResolvers, CartItemInput } from '@mesh';
import { addProductsToCartResolver } from './add-products-to-cart';
import { getLineItems, getOrder } from '../../apis/rest/order';
import { getBcCustomerId } from '../../../utils';
import { getCartIdFromBcCustomerAttribute, getCheckout } from '../../apis/graphql';
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

        // Fetch the order to confirm the user has access to it
        const order = await getOrder(orderNumber);

        // If this user does not own this order return an error of "Order not found"
        // so we don't confirm that this order id exists
        if (order.customer_id !== order.customer_id) {
            return {
                cart: UNDEFINED_CART,
                userInputErrors: [
                    {
                        code: 'REORDER_NOT_AVAILABLE',
                        message: `Order not found.`,
                        path: ['orderNumber'],
                    },
                ],
            };
        }

        // Fetch and Iterate over all the orders line items converting them to input object
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
        const customerCheckout = cartId
            ? await getCheckout(cartId, bcCustomerId, customerImpersonationToken)
            : null;

        // @TODO: Shows error in IDE but it does work
        // Call existing resolver to add these products to the cart
        const response = await addProductsToCartResolver.resolve(
            root,
            {
                // A new cart will be created if one doesn't exist
                cartId: customerCheckout?.cart ? cartId || '' : '',
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
