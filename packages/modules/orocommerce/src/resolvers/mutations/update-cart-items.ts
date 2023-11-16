import { MutationResolvers, UpdateCartItemsOutput } from '@aligent/orocommerce-resolvers';
import { UpdateCartItemTransformerChain } from '../../transformers/shopping-list/update-cart-item-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';
import { atob } from '@aligent/utils';

export const updateCartItemsMutation: MutationResolvers['updateCartItems'] = {
    resolve: async (_root, args, context, _info): Promise<UpdateCartItemsOutput> => {
        const { cart_id, cart_items } = args.input || {};

        if (!cart_id || !cart_items?.[0]?.cart_item_uid) {
            throw new Error(`Missing update cart information`);
        }

        const { quantity } = cart_items[0];

        if (quantity === 0) {
            throw new Error(`Quantity cannot be "0"`);
        }

        if (!quantity || isNaN(quantity)) {
            throw new Error(`Cart item quantity is incorrect`);
        }

        const cartItemId = atob(cart_items?.[0]?.cart_item_uid);

        const updateCartItemTransformer: UpdateCartItemTransformerChain = context.injector.get(
            UpdateCartItemTransformerChain
        );
        const transformedCartItemInput = updateCartItemTransformer.transform({
            data: { cartItemId, quantity },
        });

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await shoppingListClient.updateItemInShoppingList(transformedCartItemInput);

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(cart_id);

        return {
            cart: transformedCart,
        };
    },
};
