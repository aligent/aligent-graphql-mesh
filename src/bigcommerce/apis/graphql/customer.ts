import { BC_Customer } from '@mesh/external/BigCommerceGraphqlApi';
import { bcGraphQlRequest } from './client';
import { customer } from './requests/customer';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';

export const getBcCustomer = async (
    bcCustomerId: number,
    customerImpersonationToken: string
): Promise<BC_Customer> => {
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
