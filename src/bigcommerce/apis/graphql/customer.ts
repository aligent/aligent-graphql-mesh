import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getBcCustomer = async (bcCustomerId: number): Promise<BC_Customer> => {
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
        return logAndThrowError(response.data.errors);
    }

    return response.data.customer;
};
