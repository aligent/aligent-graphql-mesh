import { ApplyGiftCardToCartOutput, MutationResolvers } from '@aligent/bigcommerce-resolvers';
import { mockApplyGiftCardToCart } from '../mocks/apply-gift-card-to-cart';

export const applyGiftCardToCartResolver: MutationResolvers['applyGiftCardToCart'] = {
    resolve: (_root, _args, _context, _info) => {
        return mockApplyGiftCardToCart as unknown as ApplyGiftCardToCartOutput;
    },
};
