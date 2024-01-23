import { WishlistItemInput } from '@aligent/bigcommerce-resolvers';

export const hasConfigurableWishlistItem = (wishlistItems: WishlistItemInput[]): boolean => {
    let isConfigurableWishlist = false;
    for (let i = 0; i < wishlistItems.length; i++) {
        if (wishlistItems[i].selected_options?.length) {
            isConfigurableWishlist = true;
            break;
        }
    }

    return isConfigurableWishlist;
};
