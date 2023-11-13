import { QueryResolvers } from '@aligent/orocommerce-resolvers';
import { CartService, ShoppingListService } from '../../services';

export const cartResolver: QueryResolvers['cart'] = {
    resolve: async (_root, { cart_id }, context, _info) => {
        // If no ID is sent then ORO will attempt to add the default shopping list
        // If no list exists a new one will be created
        const shoppingListId = cart_id === '' ? 'default' : cart_id;

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingListWithItems =
            await shoppingListService.getShoppingListWithItems(shoppingListId);

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(shoppingListWithItems);

        return transformedCart;
    },
};
