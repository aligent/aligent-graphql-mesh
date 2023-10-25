import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { CartDetailsService } from '../../services/cart-details-service';
import { ShoppingListService } from '../../services/shopping-list-service';
import { OrdersClient } from '../../apis/rest/orders';
import { ReorderItemsTransformerChain } from '../../transformers/reorder-items/reorder-items-transformer';

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        const api: OrdersClient = context.injector.get(OrdersClient);
        const orderLineItems = await api.getOrderLineItems(Number(mutationParams.orderNumber));

        const service: ShoppingListService = context.injector.get(ShoppingListService);
        const updatedShoppingList = await service.addItemsFromOrderLineItems(orderLineItems);

        const cartService: CartDetailsService = context.injector.get(CartDetailsService);
        const cart = await cartService.getCart(updatedShoppingList);

        const reorderEnricher: ReorderItemsTransformerChain = context.injector.get(
            ReorderItemsTransformerChain
        );

        return reorderEnricher.transform({
            data: {
                cart: cart,
                userInputErrors: [],
            },
        });
    },
};
