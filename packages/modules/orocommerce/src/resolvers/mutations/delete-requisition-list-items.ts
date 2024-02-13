import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { ShoppingListWithItemsToRequisitionListTransformer } from '../../transformers/shopping-list/shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListService } from '../../services';

export const deleteRequisitionListItemsMutation: MutationResolvers['deleteRequisitionListItems'] = {
    resolve: async (_root, args, context, _info) => {
        const ids = args.requisitionListItemUids.map(atob).join(',');

        const clientShoppingList: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await clientShoppingList.deleteItemsInShoppingList(ids);

        const shoppingListService: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingList = await shoppingListService.getShoppingListWithItems(
            atob(args.requisitionListUid)
        );

        if (!shoppingList) {
            throw new Error('Shopping list not found.');
        }

        const shoppingListTransformer: ShoppingListWithItemsToRequisitionListTransformer =
            context.injector.get(ShoppingListWithItemsToRequisitionListTransformer);

        const requisitionList = shoppingListTransformer.transform({
            data: shoppingList,
        });

        return { requisition_list: requisitionList };
    },
};
