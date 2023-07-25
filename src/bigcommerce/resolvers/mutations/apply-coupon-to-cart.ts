import { mockApplyCouponToCart } from "../mocks/apply-coupon-to-cart";

export const applyCouponToCartResolver = {
    resolve: () => {
        return mockApplyCouponToCart;
    },
};
