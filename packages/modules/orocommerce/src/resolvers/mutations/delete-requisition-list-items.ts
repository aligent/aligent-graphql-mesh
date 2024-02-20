import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { RequisitionListService } from '../../services/requisition-list-service';

export const deleteRequisitionListItemsMutation: MutationResolvers['deleteRequisitionListItems'] = {
    resolve: async (_root, args, context, _info) => {
        const ids = args.requisitionListItemUids.map(atob).join(',');

        const clientShoppingList: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await clientShoppingList.deleteItemsInShoppingList(ids);

        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);

        const transformedRequisitionList = await requisitionListService.getList(
            atob(args.requisitionListUid)
        );

        return {
            requisition_list: transformedRequisitionList,
        };
    },
};
