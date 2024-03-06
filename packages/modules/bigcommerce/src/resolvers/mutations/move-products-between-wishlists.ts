import { Customer, MutationResolvers, WishlistItemInterface } from '@aligent/bigcommerce-resolvers';
import {
    getTransformedCopyProductsBetweenWishlistsArgs,
    getTransformedDeleteWishlistItemsArgs,
} from '../../factories/helpers/transform-wishlist-arguments';
import { logAndThrowError } from '@aligent/utils';
import { getBcCustomerId } from '../../utils';
import { addWishlistItems, deleteWishlistItems } from '../../apis/graphql';
import { customerResolver } from '../queries/customer';
import { customerWishlistsResolver } from '../queries/sub-query-resolvers';

export const moveProductsBetweenWishlistsResolver: MutationResolvers['moveProductsBetweenWishlists'] =
    {
        resolve: async (root, args, context, info) => {
            const { sourceWishlistUid, destinationWishlistUid, wishlistItems } = args;

            if (!sourceWishlistUid || !destinationWishlistUid) {
                return logAndThrowError(new Error('Wishlist id is missing'));
            }

            const customerImpersonationToken = (await context.cache.get(
                'customerImpersonationToken'
            )) as string;
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

            // Add wishlist items to the destination wishlist
            const addItemsResponse = await addWishlistItems(
                transformedArgs,
                bcCustomerId,
                customerImpersonationToken
            );

            const { entityId: updatedDestinationWishlistId } = addItemsResponse;

            const transformedDeleteWishlistItemsArgs = getTransformedDeleteWishlistItemsArgs({
                wishlistId: sourceWishlistUid,
                wishlistItemsIds: wishlistItems.map((item) => item.wishlist_item_id),
            });

            // Delete same wishlist items from the source wishlist
            const deleteItemsResponse = await deleteWishlistItems(
                transformedDeleteWishlistItemsArgs,
                bcCustomerId,
                customerImpersonationToken
            );

            const { entityId: updatedSourceWishlistId } = deleteItemsResponse;

            // Have to use Customer resolver to fetch fresh wishlist data
            // as BC wishlist mutations run into max depth of query error if requesting item->product
            const updatedWishlists = await customerWishlistsResolver.resolve(
                root as Customer,
                { currentPage: 1, pageSize: 50 },
                context,
                info
            );

            let updatedSourceWishlist;
            let updatedDestinationWishlist;

            updatedWishlists.forEach((wishlist) => {
                if (wishlist?.id === String(updatedSourceWishlistId)) {
                    updatedSourceWishlist = wishlist;
                } else if (wishlist?.id === String(updatedDestinationWishlistId)) {
                    updatedDestinationWishlist = wishlist;
                }
            });

            if (!updatedSourceWishlist || !updatedDestinationWishlist) {
                return logAndThrowError(
                    new Error('Fail to retrieve customer wishlists, try again')
                );
            }

            return {
                source_wishlist: updatedSourceWishlist,
                destination_wishlist: updatedDestinationWishlist,
                user_errors: [],
            };
        },
    };
