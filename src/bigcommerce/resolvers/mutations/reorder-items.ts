import { MutationResolvers } from '@mesh';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { getLineItems, getOrder } from '../../apis/rest/order';
import { logAndThrowError } from "../../../utils/error-handling/error-handling";
import { getTransformedCartData } from "../../factories/transform-cart-data";
import { getCheckout } from "../../apis/graphql/checkout";
import { CartItemInput } from "@mesh/sources/TakeFlightGraphqlApi/types";

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (root, { orderNumber }, context, info) => {
        if (!context.headers["authorization"]) {
            return logAndThrowError(
                'RuntimeError: User must be logged in to reorder.'
            );
        }

        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers['authorization']);
        //@TODO: Remove this
        const cartId: string = "fe5561a1-e653-479b-8c31-8e6b071a665d";

        // Fetch the order to confirm the user has access to it
        const order = await getOrder(orderNumber);

        // Get the users passed in existing checkout object so we can return it if there is an error
        const checkout = await getCheckout(cartId, bcCustomerId);

        // If this user does not own this order return an error of "Order not found"
        // so we don't confirm that this order id exists
        if (order.customer_id !== order.customer_id) {
            return {
                cart: getTransformedCartData(checkout),
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

        // Use existing resolver to add all of the products to the existing cart
        const response = await context.TakeFlightGraphqlApi.Mutation.addProductsToCart({
            root,
            info,
            args: {
                cartId,
                cartItems
            },
            context
        });

        return {
            cart: response?.cart
        };
    },
};
