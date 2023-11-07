import { Cart, MutationResolvers } from '@aligent/orocommerce-resolvers';
// import { CartService } from '../../services/cart-service';
// import { ShoppingListsClient } from '../../apis/rest';
import { AddProductsToCartTransformerChain } from '../../transformers/shopping-list/add-products-to-cart-transformer';

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
        console.log('test', mutationParams);

        const addProductToCartTransformer: AddProductsToCartTransformerChain = context.injector.get(
            AddProductsToCartTransformerChain
        );

        const transfomedAddToCartTranformer = addProductToCartTransformer.transform({
            data: mutationParams.cartItems,
        });

        console.log(transfomedAddToCartTranformer);
        // Add items to shopping list
        // const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        // const updatedShoppingList = await shoppingListClient.addItemsToShoppingList()

        // Transform shopping list -> cart
        // const cartService: CartService = context.injector.get(CartService);
        // const cart = await cartService.getCart(updatedShoppingList);

        return {
            cart: UNDEFINED_CART,
            user_errors: [],
        };
    },
};
