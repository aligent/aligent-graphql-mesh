import { logAndThrowError } from '../../../utils/error-handling/error-handling';
import { bcGraphQlRequest } from './client';
import { checkout } from './requests/checkout';

const BC_GRAPHQL_TOKEN = process.env.BC_GRAPHQL_TOKEN as string;

export const getCart = async (entityId: string, bcCustomerId: number | null) => {
    const headers = {
        Authorization: `Bearer ${BC_GRAPHQL_TOKEN}`,
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

    const response = await bcGraphQlRequest(checkoutQuery, headers);

    if (response.data.errors) {
        return logAndThrowError(response.data.errors);
    }

    return response.data.site.checkout;
};
