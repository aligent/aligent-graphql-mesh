import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { GraphQlContext } from '../../../meshrc/types';

export const getCart = async (entityId: string, context: GraphQlContext) => {
    const customerImpersonationToken = await context.cache.get('customerImpersonationToken');

    const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers['mesh-token']);

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
