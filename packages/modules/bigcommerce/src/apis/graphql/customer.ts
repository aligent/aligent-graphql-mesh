import { Customer } from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';
import { logAndThrowError } from '@aligent/utils';
import { customerAttribute } from './requests/customer-attribute';
import { getCustomerAttributeId } from '../rest/customer';
import { verifyCartEntityId } from './cart';

const CART_ID_ATTRIBUTE_FILED_NAME = 'cart_id';

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
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<string | null> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };
    try {
        //TODO: Try to get this value from cache first before sending request
        const cartAttributeFieldId = await getCustomerAttributeId(CART_ID_ATTRIBUTE_FILED_NAME);

        if (!cartAttributeFieldId) return null;

        const customerAttributeQuery = {
            query: customerAttribute,
            variables: {
                attributeId: cartAttributeFieldId,
            },
        };

        const response = await bcGraphQlRequest(customerAttributeQuery, headers);

        const entityId = response.data.customer.attributes.attribute.value;

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