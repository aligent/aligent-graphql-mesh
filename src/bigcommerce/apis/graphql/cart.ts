import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';
import { addProductsToCartMutation } from './requests/add-products-to-cart';
import { BC_AddCartLineItemsDataInput, BC_Cart, Maybe } from '../../../meshrc/.mesh';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};

export const getCart = async (entityId: string, bcCustomerId: number | null) => {
    const cartHeaders = {
        ...headers,
        // We need to pass the "bcCustomerId" in the headers to valid logged in user carts.
        // guest user don't required a "x-bc-customer-id" header
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const checkoutQuery = {
        query: checkout,
        variables: {
            entityId,
        },
    };

    const response = await bcGraphQlRequest(checkoutQuery, cartHeaders);

    return response.data.site.checkout;
};

export const addProductsToCart = async (
    cartId: string,
    cartItems: BC_AddCartLineItemsDataInput
): Promise<Maybe<BC_Cart>> => {
    const addToCartQuery = {
        query: addProductsToCartMutation,
        variables: {
            cartId,
            cartItems,
        },
    };

    const response = await bcGraphQlRequest(addToCartQuery, headers);

    return response.data.cart.addCartLineItems.cart;
};
