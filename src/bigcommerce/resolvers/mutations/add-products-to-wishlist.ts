import { AddProductsToWishlistOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockAddProductsToWishlist } from '../mocks/add-products-to-wishlist';

export const addProductsToWishlistResolver: MutationResolvers<CustomContext>['addProductsToWishlist']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockAddProductsToWishlist as unknown) as AddProductsToWishlistOutput;
    },
};
