import { mockAddProductsToCart } from '../mocks/add-products-to-cart';

export const addProductsToCartResolver = {
    resolve: () => {
        return mockAddProductsToCart;
    },
};
