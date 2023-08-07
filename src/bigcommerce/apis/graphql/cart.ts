import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { GraphQlContext } from '../../../meshrc/types';

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
