import { ApplyCouponToCartOutput, MutationResolvers } from '../../../meshrc/.mesh';
import { mockApplyCouponToCart } from '../mocks/apply-coupon-to-cart';

export const applyCouponToCartResolver: MutationResolvers['applyCouponToCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockApplyCouponToCart as unknown as ApplyCouponToCartOutput;
    },
};
