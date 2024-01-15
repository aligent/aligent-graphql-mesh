import { MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomerId } from '../../utils';
import { createWishlist } from '../../apis/graphql/create-wishlist';
import { customerResolver } from '../queries/customer';
import { logAndThrowError } from '@aligent/utils';
import { getTransformedCreateWishlistArgs } from '../../factories/helpers/transform-wishlist-arguments';

export const createWishListResolver: MutationResolvers['createWishlist'] = {
    resolve: async (root, { input }, context, info) => {
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;
        const bcCustomerId = getBcCustomerId(context);

        const transformedArgs = getTransformedCreateWishlistArgs(input);

        const response = await createWishlist(
            transformedArgs,
            bcCustomerId,
            customerImpersonationToken
        );

        const { entityId } = response;

        const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

        const { wishlists } = currentCustomerInfo;

        const wishlist = wishlists.find((wishlist) => wishlist?.id === String(entityId));

        if (!wishlist) {
            return logAndThrowError(new Error('Fail to retrieve customer wishlists, try again'));
        }

        return { wishlist };
    },
};
