import { BC_Customer } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcCustomer = async (
    bcCustomerId: number
): Promise<BC_Customer> => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
        'x-bc-customer-id': bcCustomerId,
    };
    const getCustomer = {
        query: `query customer {
            customer{
            entityId
            email
          }
        }`,
    };

    const response = await bcGraphQlRequest(getCustomer, headers);

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
