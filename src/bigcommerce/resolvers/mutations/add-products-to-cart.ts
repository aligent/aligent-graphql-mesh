import { AddProductsToCartOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { mockAddProductsToCart } from '../mocks/add-products-to-cart';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return (mockAddProductsToCart as unknown) as AddProductsToCartOutput;
    },
};
