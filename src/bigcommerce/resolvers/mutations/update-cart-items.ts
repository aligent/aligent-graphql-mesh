import { mockUpdateCartItems } from '../mocks/update-cart-items';

export const updateCartItemsResolver = {
    resolve: () => {
        return mockUpdateCartItems;
    },
};
