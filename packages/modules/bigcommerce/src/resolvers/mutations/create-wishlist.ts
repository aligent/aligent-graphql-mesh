import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { createWishlist } from '../../apis/graphql/create-wishlist';
import { customerResolver } from '../queries/customer';
import { logAndThrowError } from '@aligent/utils';
import { getTransformedCreateWishlistArgs } from '../../factories/helpers/transform-wishlist-arguments';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const createWishListResolver: MutationResolvers['createWishlist'] = {
    resolve: async (root, { input }, context, info) => {
        const customerImpersonationToken =
            await retrieveCustomerImpersonationTokenFromCache(context);
        const bcCustomerId = getBcCustomerId(context);

        const transformedArgs = getTransformedCreateWishlistArgs(input);

        const response = await createWishlist(
            transformedArgs,
            bcCustomerId,
            customerImpersonationToken
        );

        const { entityId } = response;

        // Have to use Customer resolver to fetch fresh wishlist data
        // as BC wishlist mutations run into max depth of query error if requesting item->product
        const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

        const { wishlists } = currentCustomerInfo;

        const wishlist = wishlists.find((wishlist) => wishlist?.id === String(entityId));

        if (!wishlist) {
            return logAndThrowError(new Error('Fail to retrieve customer wishlists, try again'));
        }

        return { wishlist };
    },
};
