import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';

export const getCart = async (
    entityId: string,
    customerImpersonationToken: string,
    bcCustomerId: number | null
) => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const checkoutQuery = {
        query: checkout,
        variables: {
            entityId,
        },
    };

    const response = await bcGraphQlRequest(checkoutQuery, headers);

    return response.data.site.checkout;
};
