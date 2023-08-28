import { bcGraphQlRequest } from './client';
import {
    AddCartLineItemsDataInput,
    UpdateCartLineItemInput,
    Cart,
    CartLineItemInput,
    InputMaybe,
} from '@aligent/bigcommerce-operations';
import {
    addProductsToCartMutation,
    createCartMutation,
    deleteCartLineItemMutation,
    updateCartLineItemQuery,
} from './requests';
import { logAndThrowError } from '@aligent/utils';

export const addProductsToCart = async (
    cartId: string,
    cartItems: AddCartLineItemsDataInput,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<Cart> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
    lineItems: InputMaybe<Array<CartLineItemInput>>,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<Cart> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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

export const deleteCartLineItem = async (
    cartEntityId: string,
    lineItemEntityId: string,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<Cart> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
    variables: UpdateCartLineItemInput,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<Cart> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
