import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { DeleteShoppingListOutputTransformerChain } from '../../transformers/shopping-list/delete-shopping-list-output-transformer';
import { ShoppingListService } from '../../services/shopping-list-service';

export const deleteRequisitionListMutation: MutationResolvers['deleteRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const deleteShoppingListResult = await client.deleteShoppingList(args.requisitionListUid);

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingListWithItems = await shoppingListService.getShoppingListWithItems();

        const deleteShoppingListOutputTransformer: DeleteShoppingListOutputTransformerChain =
            context.injector.get(DeleteShoppingListOutputTransformerChain);
        return deleteShoppingListOutputTransformer.transform({
            data: {
                status: deleteShoppingListResult,
                shopping_list_with_items: shoppingListWithItems,
            },
        });
    },
};
