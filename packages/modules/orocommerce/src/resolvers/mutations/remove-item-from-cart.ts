import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { logAndThrowError } from '@aligent/utils';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { CartService } from '../../services/cart-service';
import { atob } from '@aligent/utils';

export const removeItemFromCartMutation = {
    resolve: async (_root, args, context, _info) => {
        if (args.input?.cart_item_id) {
            return logAndThrowError(
                'cart_item_id is deprecated, please use cart_item_uid instead.'
            );
        }

        if (!args.input?.cart_item_uid) {
            return logAndThrowError('Missing cart item uid');
        }

        const cartId = args.input.cart_id;
        const cartItemId = atob(args.input.cart_item_uid);

        const shoppingListsClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await shoppingListsClient.deleteItemInShoppingList(cartItemId);

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(cartId);

        return {
            cart: transformedCart,
        };
    },
} satisfies MutationResolvers['removeItemFromCart'];
