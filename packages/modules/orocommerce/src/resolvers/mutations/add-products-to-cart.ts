import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { AddProductsToCartTransformerChain } from '../../transformers/shopping-list/add-products-to-cart-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';
import { ShoppingListService } from '../../services/shopping-list-service';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        // If no ID is sent then ORO will attempt to add the default shopping list
        // If no list exists a new one will be created
        const shoppingListId = mutationParams.cartId === '' ? 'default' : mutationParams.cartId;

        const addProductToCartTransformer: AddProductsToCartTransformerChain = context.injector.get(
            AddProductsToCartTransformerChain
        );
        const transformedAddProductsToCartInput = addProductToCartTransformer.transform({
            data: mutationParams.cartItems,
        });

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await shoppingListClient.addItemsToShoppingList(
            shoppingListId,
            transformedAddProductsToCartInput
        );

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingListWithItems =
            await shoppingListService.getShoppingListWithItems(shoppingListId);

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(shoppingListWithItems);

        return {
            cart: transformedCart,
            user_errors: [],
        };
    },
};
