import { bcGraphQlRequest } from './client';
import {
    BC_AddCartLineItemsDataInput,
    BC_UpdateCartLineItemInput,
    BC_Cart,
    BC_CartLineItemInput,
    InputMaybe,
} from '@mesh/external/BigCommerceGraphqlApi';
import { addProductsToCartMutation, createCartMutation, updateCartLineItemQuery } from './requests';
import { logAndThrowError } from '../../../utils';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};

export const addProductsToCart = async (
    cartId: string,
    cartItems: BC_AddCartLineItemsDataInput
): Promise<BC_Cart> => {
    const addToCartQuery = {
        query: addProductsToCartMutation,
        variables: {
            cartId,
            cartItems,
        },
    };

    const response = await bcGraphQlRequest(addToCartQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.addCartLineItems.cart;
};

export const createCart = async (
    lineItems: InputMaybe<Array<BC_CartLineItemInput>>
): Promise<BC_Cart> => {
    const createCartQuery = {
        query: createCartMutation,
        variables: {
            lineItems,
        },
    };

    const response = await bcGraphQlRequest(createCartQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.createCart.cart;
};

export const updateCartLineItem = async (
    variables: BC_UpdateCartLineItemInput,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const updateCartItemQuery = {
        query: updateCartLineItemQuery,
        variables,
    };

    const response = await bcGraphQlRequest(updateCartItemQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.updateCartLineItem.cart;
};
