import { bcGraphQlRequest } from './client';
import { addProductsToCartMutation } from './requests/add-products-to-cart';
import {
    BC_AddCartLineItemsDataInput,
    BC_Cart,
    BC_CartLineItemInput,
    InputMaybe,
} from '@mesh/external/BigCommerceGraphqlApi';
import { createCartMutation } from './requests/create-cart';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

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

    if (response.data.error) {
        return logAndThrowError(response.data.error);
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

    if (response.data.error) {
        return logAndThrowError(response.data.error);
    }

    return response.data.cart.createCart.cart;
};
