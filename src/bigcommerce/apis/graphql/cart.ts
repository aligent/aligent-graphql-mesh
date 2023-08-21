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

export const addProductsToCart = async (
    cartId: string,
    cartItems: BC_AddCartLineItemsDataInput,
    customerImpersonationToken: string
): Promise<BC_Cart> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
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
    lineItems: InputMaybe<Array<BC_CartLineItemInput>>,
    customerImpersonationToken: string
): Promise<BC_Cart> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };
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
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<BC_Cart> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
