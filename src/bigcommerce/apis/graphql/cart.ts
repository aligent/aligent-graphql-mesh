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
    getCartEntityIdQuery,
    updateCartLineItemQuery,
} from './requests';
import { logAndThrowError } from '../../../utils';
import { getCustomerAttributeId, upsertCustomerAttributeValue } from '../rest/customer';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const headers = {
    Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
};
const CART_ID_ATTRIBUTE_FILED_NAME = 'cart_id';

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

    const { entityId } = response.data.cart.createCart.cart;
    await updateCartIdAttribute({
        cart_id: entityId,
        customer_id: bcCustomerId,
    });

    return response.data.cart.createCart.cart;
};

export const getCartEntityId = async (
    cartId: string,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
    const cartHeader = {
        ...headers,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const cartQuery = {
        query: getCartEntityIdQuery,
        variables: { entityId: cartId },
    };

    const response = await bcGraphQlRequest(cartQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.cart;
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

// Update cart_id that is saved in customer attribute field
export const updateCartIdAttribute = async (variables: {
    cart_id: string | null;
    customer_id: number | null;
}) => {
    const { cart_id, customer_id } = variables;
    const attribute_id = await getCustomerAttributeId(CART_ID_ATTRIBUTE_FILED_NAME);
    if (cart_id && customer_id && attribute_id) {
        await upsertCustomerAttributeValue(attribute_id, cart_id, customer_id);
    }
};
