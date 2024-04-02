import { Customer } from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';
import { GraphqlError, logAndThrowError } from '@aligent/utils';
import { customerAttribute } from './requests/customer-attribute';
import { retrieveCustomerAttributesFromCache } from '../rest/customer';
import { verifyCartEntityId } from './cart';
import { customerWishlists } from './requests/customer-wishlists';
import { createCustomerMutation } from './requests/create-customer';
import { AcCreateCustomerResponse, BcCreateCustomerMutationInput } from '../../types';

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

export const createBcCustomer = async (
    customerInputData: BcCreateCustomerMutationInput,
    customerImpersonationToken: string
): Promise<AcCreateCustomerResponse> => {
    const { firstName, lastName, email, password } = customerInputData;
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
    };

    const createCustomerQuery = {
        query: createCustomerMutation,
        variables: {
            email,
            firstName,
            lastName,
            password,
        },
    };

    try {
        const createCustomerResponse = await bcGraphQlRequest(createCustomerQuery, headers);
        const { errors } = createCustomerResponse.data.customer.registerCustomer;

        if (errors.length > 0) {
            if (errors[0].__typename === 'EmailAlreadyInUseError') {
                throw new GraphqlError(
                    'A customer with the same email address already exists in an associated website.',
                    'input'
                );
            }

            return logAndThrowError(errors, 'createBcCustomer');
        }

        return createCustomerResponse.data.customer.registerCustomer;
    } catch (error) {
        return logAndThrowError(error, 'createBcCustomer');
    }
};
