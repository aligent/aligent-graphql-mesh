import { updateWishlistMutation } from './requests';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '@aligent/utils';
import { UpdateWishlistInput, Wishlist } from '@aligent/bigcommerce-operations';

export const updateWishlist = async (
    updateWishlistArgs: UpdateWishlistInput,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<Wishlist> => {
    const cartHeaders = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        // We need to pass the "bcCustomerId" in the headers to valid logged in user carts.
        // guest user don't required a "x-bc-customer-id" header
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const wishlistMutation = {
        query: updateWishlistMutation,
        variables: {
            input: updateWishlistArgs,
        },
    };

    const response = await bcGraphQlRequest(wishlistMutation, cartHeaders);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.wishlist.updateWishlist.result;
};
