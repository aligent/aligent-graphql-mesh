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

const CART_ID_ATTRIBUTE_FILED_NAME = 'cart_id';

export const addProductsToCart = async (
    cartId: string,
    cartItems: BC_AddCartLineItemsDataInput,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
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
    lineItems: InputMaybe<Array<BC_CartLineItemInput>>,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
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

    // Save cart_id in customer attribute field for logged in users
    const { entityId } = response.data.cart.createCart.cart;
    await updateCartIdAttribute({
        cartId: entityId,
        customerId: bcCustomerId,
    });

    return response.data.cart.createCart.cart;
};

export const deleteCartLineItem = async (
    cartEntityId: string,
    lineItemEntityId: string,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<BC_Cart> => {
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
    variables: BC_UpdateCartLineItemInput,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<BC_Cart> => {
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

// Update cart_id that is saved in customer attribute field
export const updateCartIdAttribute = async (variables: {
    cartId: string | null;
    customerId: number | null;
}) => {
    const { cartId, customerId } = variables;
    /* If we're not dealing with a logged-in customer don't worry about trying to
     * store a cart id on a customer attribute.*/
    if (!customerId) {
        return;
    }

    const attributeId = await getCustomerAttributeId(CART_ID_ATTRIBUTE_FILED_NAME);

    if (attributeId && cartId) {
        await upsertCustomerAttributeValue(attributeId, cartId, customerId);
    }
};

export const verifyCartEntityId = async (
    entityId: string | null,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<BC_Cart> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const cartQuery = {
        query: getCartEntityIdQuery,
        variables: {
            entityId,
        },
    };

    const response = await bcGraphQlRequest(cartQuery, cartHeader);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.cart;
};
