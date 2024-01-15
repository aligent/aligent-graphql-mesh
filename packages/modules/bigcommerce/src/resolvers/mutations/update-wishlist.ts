import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { updateWishlist } from '../../apis/graphql/update-wishlist';
import { getTransformedUpdateWishlistArgs } from '../../factories/helpers/transform-wishlist-arguments';
import { logAndThrowError } from '@aligent/utils';

export const updateWishListResolver: MutationResolvers['updateWishlist'] = {
    resolve: async (_root, args, context, _info) => {
        if (!args.wishlistId) {
            return logAndThrowError(new Error('Wishlist id is missing'));
        }

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const response = await updateWishlist(
            getTransformedUpdateWishlistArgs({
                wishlistId: args.wishlistId,
                name: args.name,
                visibility: args.visibility,
            }),
            bcCustomerId,
            customerImpersonationToken
        );

        const { entityId, name, isPublic } = response;

        return {
            name,
            uid: String(entityId),
            visibility: isPublic ? 'PUBLIC' : 'PRIVATE',
        };
    },
};
