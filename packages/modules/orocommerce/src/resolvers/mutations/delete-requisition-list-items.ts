import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { ShoppingListWithItemsToRequisitionListTransformer } from '../../transformers/shopping-list/shopping-list-with-items-to-requisition-list-transformer';
import { ShoppingListService } from '../../services';

export const deleteRequisitionListItemsMutation: MutationResolvers['deleteRequisitionListItems'] = {
    resolve: async (_root, args, context, _info) => {
        const ids = args.requisitionListItemUids.map(atob).join(',');

        const clientShoppingList: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await clientShoppingList.deleteItemsInShoppingList(ids);

        const shoppingListSerice: ShoppingListService = context.injector.get(ShoppingListService);
        const shoppingList = await shoppingListSerice.getShoppingListWithItems(
            atob(args.requisitionListUid)
        );

        const shoppingListTransformenr: ShoppingListWithItemsToRequisitionListTransformer =
            context.injector.get(ShoppingListWithItemsToRequisitionListTransformer);

        if (!shoppingList) {
            throw new Error('no product to delete');
        }
        const requisitionList = shoppingListTransformenr.transform({
            data: shoppingList,
        });

        return { requisition_list: requisitionList };
    },
};
