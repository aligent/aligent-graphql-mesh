import { Customer } from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';
import { logAndThrowError } from '@aligent/utils';
import { customerAttribute } from './requests/customer-attribute';
import { retrieveCustomerAttributesFromCache } from '../rest/customer';
import { verifyCartEntityId } from './cart';
import { customerWishlists } from './requests/customer-wishlists';

export const getBcCustomer = async (
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<Customer> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };
    const customerQuery = {
        query: customer,
    };

    const response = await bcGraphQlRequest(customerQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.customer;
};

export const getCartIdFromBcCustomerAttribute = async (
    context: GraphQLModules.ModuleContext,
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<string | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };
    try {
        const { cart_id: cartAttributeId } = await retrieveCustomerAttributesFromCache(context);

        if (!cartAttributeId) return null;

        const customerAttributeQuery = {
            query: customerAttribute,
            variables: {
                attributeId: cartAttributeId,
            },
        };

        const getCustomerCartIdResponse = await bcGraphQlRequest(customerAttributeQuery, headers);

        const entityId = getCustomerCartIdResponse.data.customer.attributes.attribute.value;

        // Query checkout for verifying the cart_id we retrieved from customer attribute is valid
        const cartResponse = await verifyCartEntityId(
            entityId,
            bcCustomerId,
            customerImpersonationToken
        );

        return cartResponse.entityId;
    } catch (error) {
        console.error(`Error from getCartIdFromBcCustomerAttribute: ${error}`);
        return null;
    }
};

export const getCustomerWishlists = async (
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<Customer['wishlists']> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };
    const customerQuery = {
        query: customerWishlists,
    };

    const response = await bcGraphQlRequest(customerQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.customer.wishlists;
};
