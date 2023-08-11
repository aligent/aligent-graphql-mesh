import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

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
        logAndThrowError(
            new Error(
                `Failed to fetch customers from BigCommerce: ${JSON.stringify(
                    response.data.errors
                )}`
            )
        );
    }

    return response.data.customer;
};
