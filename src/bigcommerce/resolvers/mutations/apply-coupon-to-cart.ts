import { ApplyCouponToCartOutput, MutationResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockApplyCouponToCart } from "../mocks/apply-coupon-to-cart";

export const applyCouponToCartResolver: MutationResolvers<CustomContext>['applyCouponToCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return (mockApplyCouponToCart as unknown) as ApplyCouponToCartOutput;
    },
};
