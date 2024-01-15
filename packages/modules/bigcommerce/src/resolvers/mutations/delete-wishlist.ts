import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { customerResolver } from '../queries/customer';
import { deleteWishlist } from '../../apis/graphql';
import { logAndThrowError } from '@aligent/utils';

export const deleteWishListResolver: MutationResolvers['deleteWishlist'] = {
    resolve: async (root, { wishlistId }, context, info) => {
        if (!wishlistId) {
            return logAndThrowError(new Error('Wishlist id is missing'));
        }

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const deleteWishlistArgs = {
            entityIds: [Number(wishlistId)],
        };

        const response = await deleteWishlist(
            deleteWishlistArgs,
            bcCustomerId,
            customerImpersonationToken
        );

        const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

        const { wishlists } = currentCustomerInfo;

        return { status: response === 'success', wishlists };
    },
};
