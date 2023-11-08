import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CartService } from '../../services/cart-service';
import { ShoppingListService } from '../../services/shopping-list-service';
import { OrdersClient } from '../../apis/rest/orders';
import { arrayFromAsyncGenerator } from '@aligent/utils';

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        const ordersClient: OrdersClient = context.injector.get(OrdersClient);

        const orderLineItemsPaginator = ordersClient.getOrderLineItems(Number(mutationParams.orderNumber));

        const orderLineItems = (await arrayFromAsyncGenerator(orderLineItemsPaginator)).flatMap(
            (generatorResult) => generatorResult.data
        );

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const updatedShoppingList = await shoppingListService.addItemsFromOrderLineItems(orderLineItems);

        const cartService: CartService = context.injector.get(CartService);
        const cart = await cartService.getCart(updatedShoppingList);

        return {
            cart: cart,
            userInputErrors: [],
        };
    },
};
