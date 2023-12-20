import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { RequisitionListService } from '../../services/requisition-list-service';

export const deleteRequisitionListMutation: MutationResolvers['deleteRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const deleteShoppingListResult = await client.deleteShoppingList(
            atob(args.requisitionListUid)
        );
        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);
        return {
            status: deleteShoppingListResult,
            requisition_lists: await requisitionListService.getLists(),
        };
    },
};
