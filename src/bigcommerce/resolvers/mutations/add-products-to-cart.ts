import { AddProductsToCartOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { CustomContext } from '../../types';
import { mockAddProductsToCart } from '../mocks/add-products-to-cart';

export const addProductsToCartResolver: MutationResolvers<CustomContext>['addProductsToCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return (mockAddProductsToCart as unknown) as AddProductsToCartOutput;
    },
};
