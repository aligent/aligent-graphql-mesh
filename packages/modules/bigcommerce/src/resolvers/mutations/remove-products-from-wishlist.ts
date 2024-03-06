import { Customer, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedDeleteWishlistItemsArgs } from '../../factories/helpers/transform-wishlist-arguments';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerId } from '../../utils';
import { deleteWishlistItems } from '../../apis/graphql';
import { customerWishlistsResolver } from '../queries/sub-query-resolvers';

export const removeProductsFromWishlistResolver: MutationResolvers['removeProductsFromWishlist'] = {
    resolve: async (root, args, context, info) => {
        if (!args.wishlistId) {
            return logAndThrowError(new Error('Wishlist id is missing'));
        }

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const transformedArgs = getTransformedDeleteWishlistItemsArgs(args);

        const response = await deleteWishlistItems(
            transformedArgs,
            bcCustomerId,
            customerImpersonationToken
        );

        const { entityId } = response;

        // Have to use Customer resolver to fetch fresh wishlist data
        // as BC wishlist mutations run into max depth of query error if requesting item->product
        const wishlists = await customerWishlistsResolver.resolve(
            root as Customer,
            { currentPage: 1, pageSize: 50 },
            context,
            info
        );

        const wishlist = wishlists.find((wishlist) => wishlist?.id === String(entityId));

        if (!wishlist) {
            return logAndThrowError(new Error('Fail to retrieve customer wishlists, try again'));
        }

        return {
            user_errors: [],
            wishlist,
        };
    },
};
