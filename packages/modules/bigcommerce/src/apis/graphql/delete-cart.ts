import { DeleteCartResult } from '@aligent/bigcommerce-operations';

import { logAndThrowError } from '@aligent/utils';
import { bcGraphQlRequest } from './client';
import { getDeleteCartQuery } from './requests/delete-cart';

export const deleteCart = async (
    cartEntityId: string,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<DeleteCartResult> => {
    const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const productsQuery = {
        query: getDeleteCartQuery,
        variables: { cartEntityId },
    };

    const response = await bcGraphQlRequest(productsQuery, headers);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.cart.deleteCart;
};
