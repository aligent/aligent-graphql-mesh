import { MutationResolvers } from '@mesh';
import { getBcCustomerId } from '../../../utils';
import { getLineItems, getOrder } from '../../apis/rest/order';
import { CartItemInput } from "@mesh/sources/TakeFlightGraphqlApi/types";
import { addProductsToCartResolver } from "./add-products-to-cart";
import { getCheckout } from '../../apis/graphql';

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
                        code: "REORDER_NOT_AVAILABLE",
                        message: `Customer must be logged in to use reorder.`,
                        path: [
                            "headers",
                            "authorization"
                        ]
                    }
                ]
            }
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
                        code: "REORDER_NOT_AVAILABLE",
                        message: `Order not found.`,
                        path: [
                            "orderNumber"
                        ]
                    }
                ]
            }
        }

        // Fetch and Iterate over all the orders line items converting them to input object
        const cartItems: Array<CartItemInput> = [];
        for await (const lineItem of getLineItems(orderNumber)) {
            cartItems.push({
                quantity: lineItem.quantity,
                // The addProductsToCartResolver actually receives the product id as the uid
                // See: src/bigcommerce/resolvers/mutations/add-products-to-cart.ts:15
                uid: btoa(`Product:${lineItem.product_id}`),
                // The addProductsToCartResolver receives the variant product id as the sku
                // @TODO: Confirm this is ok w/ Chamal + Brett
                // See: src/bigcommerce/resolvers/mutations/add-products-to-cart.ts:16
                sku: btoa(`Variant:${lineItem.variant_id}`),
                // The addProductsToCart resolver expects selected options to be encoded as base64
                // "configurable/{option_id}/{product_option_id}"
                selected_options: lineItem.product_options.map((option) => {
                    return btoa(['configurable', option.option_id, option.product_option_id].join("/"))
                })
            });
        }

        // @TODO: Update to use Alan's getCartIdFromBcCustomerAttribute and validate carts existence by fetching cart by id once merged
        // const cartId = await getCartIdFromBcCustomerAttribute(bcCustomerId);
        const cartId = "";
        const cart = null // getCart(cartId, bcCustomerId);

        // @TODO: Shows error in IDE but it does work
        // Call existing resolver to add these products to the cart
        const response = await addProductsToCartResolver.resolve(
            root,
            {
                // A new cart will be created if one doesn't exist
                cartId: cart ? cartId : "",
                cartItems
            },
            context,
            info,
        );

        return {
            cart: response?.cart || UNDEFINED_CART,
            userInputErrors: response?.userInputErrors || []
        };
    },
};
