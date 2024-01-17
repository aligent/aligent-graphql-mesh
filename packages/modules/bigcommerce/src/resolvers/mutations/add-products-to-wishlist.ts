import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getTransformedAddProductsToWishlistArgs } from '../../factories/helpers/transform-wishlist-arguments';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerId } from '../../utils';
import { addWishlistItems } from '../../apis/graphql';
import { customerResolver } from '../queries/customer';

export const addProductsToWishlistResolver: MutationResolvers['addProductsToWishlist'] = {
    resolve: async (root, args, context, info) => {
        if (!args.wishlistId) {
            return logAndThrowError(new Error('Wishlist id is missing'));
        }

        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const transformedArgs = getTransformedAddProductsToWishlistArgs(args);

        const response = await addWishlistItems(
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

        return {
            user_errors: [],
            wishlist,
        };
    },
};
