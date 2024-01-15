import { WishlistVisibilityEnum } from '@aligent/bigcommerce-resolvers';
import {
    getTransformedCreateWishlistArgs,
    getTransformedUpdateWishlistArgs,
} from '../transform-wishlist-arguments';

describe('transform wishlist arguments', () => {
    it('Returns the transformed BC create wishlist arguments', () => {
        const bcCreateWishlistArgs = {
            name: 'New Wishlist',
            visibility: 'PUBLIC' as WishlistVisibilityEnum,
        };
        const expectResult = {
            name: 'New Wishlist',
            isPublic: true,
        };

        const result = getTransformedCreateWishlistArgs(bcCreateWishlistArgs);

        expect(result).toEqual(expectResult);
    });

    it('Returns the transformed BC update wishlist arguments', () => {
        const bcUpdateWishlistArgs = {
            wishlistId: '10',
            name: 'Updated Wishlist',
            visibility: 'PUBLIC' as WishlistVisibilityEnum,
        };
        const expectResult = {
            entityId: 10,
            data: {
                name: 'Updated Wishlist',
                isPublic: true,
            },
        };

        const result = getTransformedUpdateWishlistArgs(bcUpdateWishlistArgs);

        expect(result).toEqual(expectResult);
    });
});
