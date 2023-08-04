import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';

export const getCart = async (entityId: string, customerImpersonationToken: string) => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
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
