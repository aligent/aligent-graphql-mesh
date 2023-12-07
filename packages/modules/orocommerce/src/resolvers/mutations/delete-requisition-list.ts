import { DeleteRequisitionListOutput, MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { DeleteShoppingListOutputTransformerChain } from '../../transformers/shopping-list/delete-shopping-list-output-transformer';
import { RequisitionListService } from '../../services/requisition-list-service';

export const deleteRequisitionListMutation: MutationResolvers['deleteRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const deleteShoppingListResult = await client.deleteShoppingList(
            atob(args.requisitionListUid)
        );

        const deleteShoppingListOutputTransformer: DeleteShoppingListOutputTransformerChain =
            context.injector.get(DeleteShoppingListOutputTransformerChain);
        const deleteRequisitionListOutput: DeleteRequisitionListOutput =
            deleteShoppingListOutputTransformer.transform({
                data: {
                    status: deleteShoppingListResult,
                },
            });
        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);
        deleteRequisitionListOutput.requisition_lists = await requisitionListService.getLists();

        return deleteRequisitionListOutput;
    },
};
