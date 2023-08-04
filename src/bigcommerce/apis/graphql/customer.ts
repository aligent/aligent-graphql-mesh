import { BC_Customer } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';

export const getBcCustomer = async (
    customerImpersonationToken: string,
    bcCustomerId: number
): Promise<BC_Customer> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
