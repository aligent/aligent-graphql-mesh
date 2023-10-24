import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import {
    ReorderItemsClient,
    ReorderItemsClientArgsBuilder,
} from '../../apis/rest/reorder-items-api-client';
import { CartDetailsService } from '../../services/cart-details-service';
import { ShoppingListService } from '../../services/shopping-list-service';

export const reorderItemsResolver: MutationResolvers['reorderItems'] = {
    resolve: async (_root, mutationParams, context, _info) => {
        const api: ReorderItemsClient = context.injector.get(ReorderItemsClient);
        const service: ShoppingListService = context.injector.get(ShoppingListService);

        const orderNumber = ReorderItemsClientArgsBuilder.buildParams(mutationParams);

        const orderLineItems = await api.getOrderLineItems(orderNumber);

        const updatedShoppingList = await service.addItemsFromOrderLineItems(orderLineItems);

        const cartService: CartDetailsService = context.injector.get(CartDetailsService);

        return {
            cart: await cartService.getCart(updatedShoppingList),
            userInputErrors: [],
        };
    },
};
