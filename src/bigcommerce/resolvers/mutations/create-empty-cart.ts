import { mockCreateEmptyCart } from "../mocks/create-cart";

export const createEmptyCartResolver = {
    resolve: () => {
        return mockCreateEmptyCart;
    },
};
