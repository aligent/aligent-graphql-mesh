import { WishlistVisibilityEnum } from '@aligent/bigcommerce-resolvers';
import { getTransformedCreateWishlistArgs } from '../trasform-create-wishlist-arguments';

describe('transform create wishlist arguments', () => {
    it('Returns the transformed AC Customer Addresses', () => {
        const inputBcCreateWishlistArgs = {
            name: 'New Wishlist',
            visibility: 'PUBLIC' as WishlistVisibilityEnum,
        };
        const expectResult = {
            name: 'New Wishlist',
            isPublic: true,
        };

        const result = getTransformedCreateWishlistArgs(inputBcCreateWishlistArgs);

        expect(result).toEqual(expectResult);
    });
});
