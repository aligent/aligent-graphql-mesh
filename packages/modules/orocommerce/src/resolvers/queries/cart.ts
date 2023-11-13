import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CartService, ShoppingListService } from '../../services';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, args, context, _info) => {
        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingListWithItems =
            await shoppingListService.getShoppingListWithItems(args.cart_id)

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(shoppingListWithItems);

        return transformedCart;
    },
};
