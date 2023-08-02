import { mockCart } from "../mocks/cart";

export const cartResolver = {
    resolve: () => {
        return mockCart;
    },
};
