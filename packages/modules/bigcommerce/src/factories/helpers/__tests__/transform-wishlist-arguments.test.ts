import { WishlistVisibilityEnum } from '@aligent/bigcommerce-resolvers';
import {
    getTransformedAddProductsToWishlistArgs,
    getTransformedCreateWishlistArgs,
    getTransformedDeleteWishlistItemsArgs,
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

    it('Returns the transformed BC add wishlist items arguments', () => {
        const bcAddWishlistItemsArgs = {
            wishlistId: '10',
            wishlistItems: [
                {
                    sku: 'WJ07',
                    uid: 'UHJvZHVjdDo1MDc=',
                    quantity: 1,
                },
            ],
        };
        const expectResult = {
            entityId: 10,
            items: [
                {
                    productEntityId: 507,
                },
            ],
        };

        const result = getTransformedAddProductsToWishlistArgs(bcAddWishlistItemsArgs);

        expect(result).toEqual(expectResult);
    });

    it('Returns the transformed BC delete wishlist items arguments', () => {
        const bcDeleteWishlistItemsArgs = {
            wishlistId: '10',
            wishlistItemsIds: ['507'],
        };
        const expectResult = {
            entityId: 10,
            itemEntityIds: [507],
        };

        const result = getTransformedDeleteWishlistItemsArgs(bcDeleteWishlistItemsArgs);

        expect(result).toEqual(expectResult);
    });
});
