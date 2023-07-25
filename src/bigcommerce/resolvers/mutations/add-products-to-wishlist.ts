import { mockAddProductsToWishlist } from '../mocks/add-products-to-wishlist';

export const addProductsToWishlistResolver = {
    resolve: () => {
        return mockAddProductsToWishlist;
    },
};
