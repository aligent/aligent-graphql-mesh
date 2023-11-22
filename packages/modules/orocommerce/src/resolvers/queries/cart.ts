import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CartService } from '../../services';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context, _info) => {
        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = cartService.getCart(args.cart_id);

        return transformedCart;
    },
};
