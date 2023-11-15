import { MutationResolvers, UpdateCartItemsOutput } from '@aligent/orocommerce-resolvers';
import { UpdateProductToCartTransformerChain } from '../../transformers/shopping-list/update-product-to-cart-transfomer';
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

        const updateProductToCartTransformer: UpdateProductToCartTransformerChain =
            context.injector.get(UpdateProductToCartTransformerChain);
        const transformedupdateProductToCartInput = updateProductToCartTransformer.transform({
            data: { cartItemId, quantity },
        });

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await shoppingListClient.updateItemToShoppingList(
            transformedupdateProductToCartInput,
            cartItemId
        );

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(cart_id);

        return {
            cart: transformedCart,
        };
    },
};
