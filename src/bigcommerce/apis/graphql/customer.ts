import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';
import { customerAttribute } from './requests/customer-attribute';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { getCustomerAttributeId } from '../rest/customer';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;
const CART_ID_ATTRIBUTE_FILED_NAME = 'cart_id';

export const getBcCustomer = async (bcCustomerId: number): Promise<BC_Customer> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
        'x-bc-customer-id': bcCustomerId,
    };
    const customerQuery = {
        query: customer,
    };

    const response = await bcGraphQlRequest(customerQuery, headers);

    if (response.data.errors) {
        console.log(`Error from getBcCustomer: ${response.data.errors}`);
    }

    if (response.data.errors) {
        return logAndThrowError(response.data.errors);
    }

    return response.data.customer;
};

export const getCartIdFromBcCustomerAttribute = async (
    bcCustomerId: number
): Promise<string | null> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
        'x-bc-customer-id': bcCustomerId,
    };

    try {
        const cartAttributeFieldId = await getCustomerAttributeId(CART_ID_ATTRIBUTE_FILED_NAME);

        if (!cartAttributeFieldId) return null;

        const customerAttributeQuery = {
            query: customerAttribute,
            variables: {
                attributeId: cartAttributeFieldId,
            },
        };

        const response = await bcGraphQlRequest(customerAttributeQuery, headers);

        return response.data.customer.attributes.attribute.value;
    } catch (error) {
        console.error(`Error from getCartIdFromBcCustomerAttribute: ${error}`);
        return null;
    }
};
