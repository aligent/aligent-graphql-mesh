import {
    AddCheckoutShippingConsignmentsInput,
    Checkout,
    UpdateCheckoutShippingConsignmentInput,
} from '@aligent/bigcommerce-operations';
import { bcGraphQlRequest } from './client';
import { getCartUserErrors } from '../../utils/error-handling';
import { logAndThrowError } from '@aligent/utils';
import {
    addCheckoutShippingConsignmentsMutation,
    updateCheckoutShippingConsignmentMutation,
} from './requests';

export const setCheckoutShippingConsignment = async (
    input: AddCheckoutShippingConsignmentsInput | UpdateCheckoutShippingConsignmentInput,
    hasShippingConsignmentAttached: boolean,
    customerImpersonationToken: string,
    bcCustomerId: number | null
): Promise<Checkout> => {
    const header = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const checkoutShippingConsignmentMutation = {
        query: hasShippingConsignmentAttached
            ? updateCheckoutShippingConsignmentMutation
            : addCheckoutShippingConsignmentsMutation,
        variables: {
            input,
        },
    };

    const response = await bcGraphQlRequest(checkoutShippingConsignmentMutation, header);

    const userErrors = getCartUserErrors(response.errors);

    if (response.errors && userErrors.length === 0) {
        logAndThrowError(response.errors);
    }

    return response;
};
