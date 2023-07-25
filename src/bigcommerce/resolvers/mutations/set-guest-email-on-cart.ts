import { mockSetGuestEmailOnCart } from "../mocks/set-guest-email-on-cart";

export const setGuestEmailOnCartResolver = {
    resolve: () => {
        return mockSetGuestEmailOnCart;
    },
};
