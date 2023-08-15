import {
    getWishListVisibility,
    getTransformedWishListItems,
    getTransformedWishlists,
} from '../transform-wishlists';
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
        const result = getWishListVisibility(true);

        expect(result).toEqual('PUBLIC');
    });
    it('Returns wishlists visibility PRIVATE', () => {
        const result = getWishListVisibility(false);

        expect(result).toEqual('PRIVATE');
    });

    it('Returns transformed wishlist items', () => {
        const inputBcWishListItems = bcWishListItems;
        const expectedTransformedWishlistItems = transformedWishlistItems;

        const result = getTransformedWishListItems(inputBcWishListItems);

        expect(result).toEqual(expectedTransformedWishlistItems);
    });
    it('Returns empty array when no wishlist', () => {
        const bcWishListItems = bcWishListItemsEmpty;

        const result = getTransformedWishListItems(bcWishListItems);

        expect(result).toEqual([]);
    });
    it('Returns empty array when no wishlist items', () => {
        const bcWishListItems = bcWishListItemsNoEdges;

        const result = getTransformedWishListItems(bcWishListItems);

        expect(result).toEqual([]);
    });

    it('Returns transformed wishlists', () => {
        const inputBcWishList = bcWishList;
        const expectedTransformedWishlist = transformedWishlist;

        const result = getTransformedWishlists(inputBcWishList);

        expect(result).toEqual(expectedTransformedWishlist);
    });
    it('Returns empty array when no wishlists', () => {
        const bcWishList = bcWishlistNoEdges;

        const result = getTransformedWishlists(bcWishList);

        expect(result).toEqual([]);
    });
    it('Returns empty array when no wishlists items', () => {
        const bcWishList = bcWishListNoItemEdges;

        const result = getTransformedWishlists(bcWishList);

        expect(result).toEqual([]);
    });
});
