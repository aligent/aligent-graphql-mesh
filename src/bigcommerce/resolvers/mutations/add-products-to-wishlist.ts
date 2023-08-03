import { AddProductsToWishlistOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { mockAddProductsToWishlist } from '../mocks/add-products-to-wishlist';

export const addProductsToWishlistResolver: MutationResolvers['addProductsToWishlist'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockAddProductsToWishlist as unknown as AddProductsToWishlistOutput;
    },
};
