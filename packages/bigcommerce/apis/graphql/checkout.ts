import { checkout } from './requests/checkout';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { BC_Checkout } from '@mesh/external/BigCommerceGraphqlApi';

export const getCheckout = async (
    entityId: string,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<BC_Checkout> => {
    const cartHeaders = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        // We need to pass the "bcCustomerId" in the headers to valid logged in user carts.
        // guest user don't required a "x-bc-customer-id" header
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const checkoutQuery = {
        query: checkout,
        variables: {
            entityId,
        },
    };

    const response = await bcGraphQlRequest(checkoutQuery, cartHeaders);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.site.checkout;
};
