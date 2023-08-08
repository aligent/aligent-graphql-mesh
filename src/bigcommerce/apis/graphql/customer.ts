import { BC_Customer } from '../../../meshrc/.mesh';
import { logAndThrowError } from '../../../utils/error-handling';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';

export const getBcCustomer = async (
    customerImpersonationToken: string,
    bcCustomerId: number
): Promise<BC_Customer> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
