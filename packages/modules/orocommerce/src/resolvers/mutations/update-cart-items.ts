import { MutationResolvers, UpdateCartItemsOutput } from '@aligent/orocommerce-resolvers';
import { UpdateCartItemTransformerChain } from '../../transformers/shopping-list/update-cart-item-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';
import { atob } from '@aligent/utils';

export const updateCartItemsMutation: MutationResolvers['updateCartItems'] = {
    resolve: async (_root, args, context, _info): Promise<UpdateCartItemsOutput> => {
        const { cart_id, cart_items } = args.input || {};

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const updateCartItemTransformer: UpdateCartItemTransformerChain = context.injector.get(
            UpdateCartItemTransformerChain
        );

        // OTF-132:Enhancement feature to handle updating multiple items for a cart in one batch update API call.
        for (const item of cart_items) {
            const { quantity, cart_item_uid } = item;

            if (!cart_id || !cart_item_uid) {
                throw new Error(`Missing update cart information`);
            }

            if (quantity === 0) {
                throw new Error(`Quantity cannot be "0"`);
            }

            if (!quantity || isNaN(quantity)) {
                throw new Error(`Cart item quantity is incorrect`);
            }

            const cartItemId = atob(cart_item_uid);

            const transformedCartItemInput = updateCartItemTransformer.transform({
                data: { cartItemId, quantity },
            });

            await shoppingListClient.updateItemInShoppingList(transformedCartItemInput);
        }

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(cart_id);

        return {
            cart: transformedCart,
        };
    },
};
