import { Customer, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { customerWishlistsResolver } from '../queries/sub-query-resolvers';
import { deleteWishlist } from '../../apis/graphql';
import { logAndThrowError } from '@aligent/utils';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const deleteWishListResolver: MutationResolvers['deleteWishlist'] = {
    resolve: async (root, { wishlistId }, context, info) => {
        if (!wishlistId) {
            return logAndThrowError(new Error('Wishlist id is missing'));
        }

        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const bcCustomerId = getBcCustomerId(context);

        const deleteWishlistArgs = {
            entityIds: [Number(wishlistId)],
        };

        const response = await deleteWishlist(
            deleteWishlistArgs,
            bcCustomerId,
            customerImpersonationToken
        );

        // Have to use Customer resolver to fetch fresh wishlist data
        // as BC wishlist mutations run into max depth of query error if requesting item->product
        const wishlists = await customerWishlistsResolver.resolve(
            {} as Customer,
            { currentPage: 1, pageSize: 50 },
            context,
            info
        );

        return { status: response === 'success', wishlists };
    },
};
