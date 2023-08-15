import {
    getWishListVisibility,
    getTransformedWishListItems,
    getTransformedWishlists,
} from '../transform-wishlists';
import { Wishlist, WishlistItemInterface } from '@mesh';
import {
    bcWishListItems,
    transformedWishlistItems,
    bcWishListItemsEmpty,
    bcWishListItemsNoEdges,
    bcWishList,
    transformedWishlist,
    bcWishlistNoEdges,
    bcWishListNoItemEdges,
} from './__data__/transform-customer-wishlist-data';

describe('transform customer wishlists', () => {
    it('Returns wishlists visibility PUBLIC', () => {
        const inputVisibility = true;
        const expectResult = 'PUBLIC';

        const result = getWishListVisibility(inputVisibility);

        expect(result).toEqual(expectResult);
    });
    it('Returns wishlists visibility PRIVATE', () => {
        const inputVisibility = false;
        const expectResult = 'PRIVATE';

        const result = getWishListVisibility(inputVisibility);

        expect(result).toEqual(expectResult);
    });

    it('Returns transformed wishlist items', () => {
        const inputBcWishListItems = bcWishListItems;
        const inputTransformedWishlistItems = transformedWishlistItems;

        const result = getTransformedWishListItems(inputBcWishListItems);

        expect(result).toEqual(inputTransformedWishlistItems);
    });
    it('Returns empty array when no wishlist', () => {
        const inputBcWishListItems = bcWishListItemsEmpty;
        const inputTransformedWishlistItems: WishlistItemInterface[] = [];

        const result = getTransformedWishListItems(inputBcWishListItems);

        expect(result).toEqual(inputTransformedWishlistItems);
    });
    it('Returns empty array when no wishlist items', () => {
        const inputBcWishListItems = bcWishListItemsNoEdges;
        const inputTransformedWishlistItems: WishlistItemInterface[] = [];

        const result = getTransformedWishListItems(inputBcWishListItems);

        expect(result).toEqual(inputTransformedWishlistItems);
    });

    it('Returns transformed wishlists', () => {
        const inputBcWishList = bcWishList;
        const inputTransformedWishlist = transformedWishlist;

        const result = getTransformedWishlists(inputBcWishList);

        expect(result).toEqual(inputTransformedWishlist);
    });
    it('Returns empty array when no wishlists', () => {
        const inputBcWishList = bcWishlistNoEdges;
        const inputTransformedWish: Wishlist[] = [];

        const result = getTransformedWishlists(inputBcWishList);

        expect(result).toEqual(inputTransformedWish);
    });
    it('Returns empty array when no wishlists items', () => {
        const inputBcWishList = bcWishListNoItemEdges;
        const inputTransformedWish: Wishlist[] = [];

        const result = getTransformedWishlists(inputBcWishList);

        expect(result).toEqual(inputTransformedWish);
    });
});
