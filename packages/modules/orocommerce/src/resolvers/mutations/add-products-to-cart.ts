import { Cart, MutationResolvers } from '@aligent/orocommerce-resolvers';
// import { CartService } from '../../services/cart-service';
// import { ShoppingListsClient } from '../../apis/rest';
import { AddProductsToCartTransformerChain } from '../../transformers/shopping-list/add-products-to-cart-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';
import { ShoppingListService } from '../../services/shopping-list-service';

const UNDEFINED_CART: Cart = {
    id: '',
    items: [],
    total_quantity: 0,
    available_gift_wrappings: [],
    gift_receipt_included: false,
    is_virtual: false,
    printed_card_included: false,
    shipping_addresses: [],
};

export const addProductsToCartResolver: MutationResolvers['addProductsToCart'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        // Transform input -> ORO
        // If no ID is sent then ORO will attempt to add the default shopping list
        // If no list exists a new one will be created
        const shoppingListId = mutationParams.cartId === '' ? 'default' : mutationParams.cartId;

        const addProductToCartTransformer: AddProductsToCartTransformerChain = context.injector.get(
            AddProductsToCartTransformerChain
        );
        const transformedAddProductsToCartInput = addProductToCartTransformer.transform({
            data: mutationParams.cartItems,
        });

        // Add items to shopping list
        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await shoppingListClient.addItemsToShoppingList(
            shoppingListId, 
            transformedAddProductsToCartInput
        );

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService)
        const shoppingList = await shoppingListService.getShoppingListWithItems(shoppingListId)

        // Transform shopping list -> cart
        const cartService: CartService = context.injector.get(CartService);

        const transformedCart = await cartService.getCart(shoppingList);

        return {
            cart: transformedCart,
            user_errors: [],
        };
    },
};
