import { MutationResolvers, WishlistItemInterface } from '@aligent/bigcommerce-resolvers';
import { getTransformedCopyProductsBetweenWishlistsArgs } from '../../factories/helpers/transform-wishlist-arguments';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerId } from '../../utils';
import { addWishlistItems } from '../../apis/graphql';
import { customerResolver } from '../queries/customer';
import { retrieveCustomerImpersonationTokenFromCache } from '../../apis/rest';

export const copyProductsBetweenWishlistsResolver: MutationResolvers['copyProductsBetweenWishlists'] =
    {
        resolve: async (root, args, context, info) => {
            const { sourceWishlistUid, destinationWishlistUid, wishlistItems } = args;

            if (!sourceWishlistUid || !destinationWishlistUid) {
                return logAndThrowError(new Error('Wishlist id is missing'));
            }

            const customerImpersonationToken =
                await retrieveCustomerImpersonationTokenFromCache(context);

            const bcCustomerId = getBcCustomerId(context);

            const currentCustomerInfo = await customerResolver.resolve(root, {}, context, info);

            const { wishlists } = currentCustomerInfo;

            const sourceWishlist = wishlists.find(
                (wishlist) => wishlist?.id === String(sourceWishlistUid)
            );

            if (!sourceWishlist) {
                return logAndThrowError(
                    new Error('Fail to retrieve customer wishlists, try again')
                );
            }

            // get detailed wishlist item info by wishlist_item_id
            const enrichedWishlistItems = sourceWishlist?.items_v2?.items.filter((item) => {
                return wishlistItems.find((i) => i.wishlist_item_id === item?.id);
            });

            if (!enrichedWishlistItems?.length) {
                return logAndThrowError(
                    new Error('Fail to retrieve customer wishlists, try again')
                );
            }

            const transformedArgs = getTransformedCopyProductsBetweenWishlistsArgs({
                wishlistId: destinationWishlistUid,
                wishlistItems: enrichedWishlistItems as WishlistItemInterface[],
            });

            const response = await addWishlistItems(
                transformedArgs,
                bcCustomerId,
                customerImpersonationToken
            );

            const { entityId } = response;

            // Have to use Customer resolver to fetch fresh wishlist data
            // as BC wishlist mutations run into max depth of query error if requesting item->product
            const updatedCurrentCustomerInfo = await customerResolver.resolve(
                root,
                {},
                context,
                info
            );

            const { wishlists: updatedWishlists } = updatedCurrentCustomerInfo;

            const destinationWishlist = updatedWishlists.find(
                (wishlist) => wishlist?.id === String(entityId)
            );

            if (!destinationWishlist) {
                return logAndThrowError(
                    new Error('Fail to retrieve customer wishlists, try again')
                );
            }

            return {
                source_wishlist: sourceWishlist,
                destination_wishlist: destinationWishlist,
                user_errors: [],
            };
        },
    };
