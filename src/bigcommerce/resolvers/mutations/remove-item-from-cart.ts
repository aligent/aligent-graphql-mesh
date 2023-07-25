import { mockRemoveItemFromCart } from '../mocks/remove-item-from-cart';

export const removeItemFromCartResolver = {
    resolve: () => {
        return mockRemoveItemFromCart;
    },
};
