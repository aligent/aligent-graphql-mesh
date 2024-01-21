import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { AddProductsToCartTransformerChain } from '../../transformers/shopping-list/add-products-to-cart-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        // If no ID is sent then ORO will attempt to add the default shopping list
        // If no list exists a new one will be created
        let shoppingListId = mutationParams.cartId === '' ? 'default' : mutationParams.cartId;

        const addProductToCartTransformer: AddProductsToCartTransformerChain = context.injector.get(
            AddProductsToCartTransformerChain
        );
        const transformedAddProductsToCartInput = addProductToCartTransformer.transform({
            data: mutationParams.cartItems,
        });

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const itemAddedToShoppingList = await shoppingListClient.addItemsToShoppingList(
            shoppingListId,
            transformedAddProductsToCartInput
        );

        // A new shoppinglist could have been created by addItemsToShoppingList(),
        // Using the recently added item to the shopping list will ensure the correct list is returned
        const currentShoppingList = await shoppingListClient.getShoppingListByItemId(
            itemAddedToShoppingList[0].id
        );

        if(currentShoppingList.relationships?.shoppingList){
            shoppingListId =  currentShoppingList.relationships.shoppingList.data.id
        }

        const cartService: CartService = context.injector.get(CartService);
        const transformedCart = await cartService.getCart(shoppingListId);

        return {
            cart: transformedCart,
            user_errors: [], // TODO: To be completed in a follow up ticket -> OTF-114
        };
    },
};
