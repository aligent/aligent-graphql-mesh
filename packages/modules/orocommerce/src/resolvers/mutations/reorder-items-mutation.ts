import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CartService } from '../../services/cart-service';
import { ShoppingListService } from '../../services/shopping-list-service';
import { OrdersClient } from '../../apis/rest/orders';
import { arrayFromAsyncGenerator } from '@aligent/utils';

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        const api: OrdersClient = context.injector.get(OrdersClient);

        const paginator = api.getOrderLineItems(Number(mutationParams.orderNumber));

        const orderLineItems = (await arrayFromAsyncGenerator(paginator)).flatMap(
            (generatorResult) => generatorResult.data
        );

        const service: ShoppingListService = context.injector.get(ShoppingListService);
        const updatedShoppingList = await service.addItemsFromOrderLineItems(orderLineItems);

        const cartService: CartService = context.injector.get(CartService);
        const cart = await cartService.getCart(updatedShoppingList);

        return {
            cart: cart,
            userInputErrors: [],
        };
    },
};
