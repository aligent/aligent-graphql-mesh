import { ApplyGiftCardToCartOutput, MutationResolvers } from "../../../meshrc/.mesh";
import { CustomContext } from "../../types";
import { mockApplyGiftCardToCart } from "../mocks/apply-gift-card-to-cart";

export const applyGiftCardToCartResolver: MutationResolvers<CustomContext>['applyGiftCardToCart']= {
    resolve: (_root, _args, _context, _info) => {
        return (mockApplyGiftCardToCart as unknown) as ApplyGiftCardToCartOutput;
    },
};
