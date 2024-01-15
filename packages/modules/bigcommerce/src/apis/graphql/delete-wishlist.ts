import { deleteWishlistMutation } from './requests';
import { bcGraphQlRequest } from './client';
import { logAndThrowError } from '@aligent/utils';
import { DeleteWishlistsInput } from '@aligent/bigcommerce-operations';

export const deleteWishlist = async (
    deleteWishlistArgs: DeleteWishlistsInput,
    bcCustomerId: number | null,
    customerImpersonationToken: string
): Promise<string> => {
    const cartHeaders = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        // We need to pass the "bcCustomerId" in the headers to valid logged in user carts.
        // guest user don't required a "x-bc-customer-id" header
        ...(bcCustomerId && { 'x-bc-customer-id': bcCustomerId }),
    };

    const wishlistMutation = {
        query: deleteWishlistMutation,
        variables: {
            input: deleteWishlistArgs,
        },
    };

    const response = await bcGraphQlRequest(wishlistMutation, cartHeaders);

    if (response.errors) {
        return logAndThrowError(response.errors);
    }

    return response.data.wishlist.deleteWishlists.result;
};
