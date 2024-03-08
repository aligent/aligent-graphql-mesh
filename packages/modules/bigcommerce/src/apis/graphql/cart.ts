import { bcGraphQlRequest } from './client';
import {
    AddCartLineItemsDataInput,
    UpdateCartLineItemInput,
    Cart,
    CartLineItemInput,
    InputMaybe,
    CustomerAttributes,
    Maybe,
} from '@aligent/bigcommerce-operations';
import { CartUserErrors } from '../../types';
import {
    addProductsToCartMutation,
    createCartMutation,
    deleteCartLineItemMutation,
    getCartEntityIdQuery,
    updateCartLineItemQuery,
} from './requests';
import { GraphqlError, logAndThrowError } from '@aligent/utils';
import {
    retrieveCustomerAttributesFromCache,
    upsertCustomerAttributeValue,
} from '../rest/customer';
import { assignCartToCustomerMutation } from './requests/assign-cart';
import { getCartUserErrors } from '../../utils/error-handling';

export const addProductsToCart = async (
    cartId: string,
    cartItems: AddCartLineItemsDataInput,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<{
    cart: Maybe<Cart>;
    userErrors: CartUserErrors;
}> => {
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

    const userErrors = getCartUserErrors(response.errors);

    if (response.errors && userErrors.length === 0) {
        logAndThrowError(response.errors);
    }

    return {
        cart: response.data.cart.addCartLineItems?.cart || null,
        userErrors,
    };
};

export const createCart = async (
    context: GraphQLModules.ModuleContext,
    lineItems: InputMaybe<Array<CartLineItemInput>>,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<{
    cart: Cart;
    userErrors: CartUserErrors;
}> => {
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

    const userErrors = getCartUserErrors(response.errors);

    if (response.errors && userErrors.length === 0) {
        logAndThrowError(response.errors);
    }

    const { cart } = response.data.cart.createCart || {};

    // Save cart_id in customer attribute field for logged in users
    if (cart?.entityId) {
        await updateCartIdAttribute(context, {
            cartId: cart.entityId,
            customerId: bcCustomerId,
        });
    }

    return {
        cart: cart?.entityId ? cart : null,
        userErrors,
    };
};

export const assignCartToCustomer = async (
    cartEntityId: string,
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<Cart> => {
    const header = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };

    const assignCartToCustomerQuery = {
        query: assignCartToCustomerMutation,
        variables: {
            input: {
                cartEntityId,
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
): Promise<{
    cart: Cart;
    userErrors: CartUserErrors;
}> => {
    const cartHeader = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const updateCartItemQuery = {
        query: updateCartLineItemQuery,
        variables,
    };

    const response = await bcGraphQlRequest(updateCartItemQuery, cartHeader);

    /* Update cart throws an error and returns a "null" cart when there's a stock issue
     * instead of returning "user_errors" and the current cart like the
     *  create cart and add to cart methods do.  */
    getCartUserErrors(response.errors, true);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.updateCartLineItem.cart;
};

// Update cart_id that is saved in customer attribute field
export const updateCartIdAttribute = async (
    context: GraphQLModules.ModuleContext,
    variables: {
        cartId: string | null;
        customerId: number | null;
    }
): Promise<CustomerAttributes | undefined> => {
    const { cartId, customerId } = variables;
    /* If we're not dealing with a logged-in customer don't worry about trying to
     * store a cart id on a customer attribute.*/
    if (!customerId) return;

    const { cart_id: cartAttributeId } = await retrieveCustomerAttributesFromCache(context);

    if (!cartAttributeId || !cartId) return;
    return upsertCustomerAttributeValue(cartAttributeId, cartId, customerId);
};

export const verifyCartEntityId = async (
    entityId: string | null,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<Cart> => {
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

/**
 * Handles assigning a guest cart to a new user account and updates the customer
 * account "cart_id" attribute with the cart id.
 *
 * @param cartId
 * @param bcCustomerId
 * @param customerImpersonationToken
 */
export const assignGuestCartToNewUserAccount = async (
    context: GraphQLModules.ModuleContext,
    cartId: string,
    bcCustomerId: number,
    customerImpersonationToken: string
) => {
    const assignCartToCustomerQuery = assignCartToCustomer(
        cartId,
        bcCustomerId,
        customerImpersonationToken
    );

    const storeCartIdOnUserAccountQuery = updateCartIdAttribute(context, {
        cartId,
        customerId: bcCustomerId,
    });

    const [assignedCartResponse, storedCartIdResponse] = await Promise.all([
        assignCartToCustomerQuery,
        storeCartIdOnUserAccountQuery,
    ]);

    if (assignedCartResponse.entityId !== cartId || !storedCartIdResponse) {
        throw new GraphqlError(
            "The guest cart couldn't properly be assigned to the new user account",
            'no-such-entity'
        );
    }
};
