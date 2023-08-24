import { bcGraphQlRequest } from './client';
import {
    BC_AddCartLineItemsDataInput,
    BC_UpdateCartLineItemInput,
    BC_Cart,
    BC_CartLineItemInput,
    InputMaybe,
} from '@mesh/external/BigCommerceGraphqlApi';
import {
    addProductsToCartMutation,
    createCartMutation,
    deleteCartLineItemMutation,
    updateCartLineItemQuery,
} from './requests';
import { logAndThrowError } from '../../../utils';
import {assignCartToCustomerMutation} from "./requests/assign-cart";

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};

export const addProductsToCart = async (
    cartId: string,
    cartItems: BC_AddCartLineItemsDataInput,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const cartHeader = {
        ...headers,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const addToCartQuery = {
        query: addProductsToCartMutation,
        variables: {
            cartId,
            cartItems,
        },
    };

    const response = await bcGraphQlRequest(addToCartQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.addCartLineItems.cart;
};

export const createCart = async (
    lineItems: InputMaybe<Array<BC_CartLineItemInput>>,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const cartHeader = {
        ...headers,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const createCartQuery = {
        query: createCartMutation,
        variables: {
            lineItems,
        },
    };

    const response = await bcGraphQlRequest(createCartQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.createCart.cart;
};

export const assignCartToCustomer = async (
    cartEntityId: string,
    bcCustomerId: number
): Promise<BC_Cart> => {
    const header = {
        ...headers,
        'x-bc-customer-id': bcCustomerId,
    };

    const assignCartToCustomerQuery = {
        query: assignCartToCustomerMutation,
        variables: {
            input: {
                cartEntityId
            },
        },
    };

    const response = await bcGraphQlRequest(assignCartToCustomerQuery, header);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.assignCartToCustomer.cart;
};

export const deleteCartLineItem = async (
    cartEntityId: string,
    lineItemEntityId: string,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const cartHeader = {
        ...headers,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const deleteCartLineItemQuery = {
        query: deleteCartLineItemMutation,
        variables: {
            cartEntityId,
            lineItemEntityId,
        },
    };

    const response = await bcGraphQlRequest(deleteCartLineItemQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.deleteCartLineItem.cart;
};

export const updateCartLineItem = async (
    variables: BC_UpdateCartLineItemInput,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const cartHeader = {
        ...headers,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const updateCartItemQuery = {
        query: updateCartLineItemQuery,
        variables,
    };

    const response = await bcGraphQlRequest(updateCartItemQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.updateCartLineItem.cart;
};
