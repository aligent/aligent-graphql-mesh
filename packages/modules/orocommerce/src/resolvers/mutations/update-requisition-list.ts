import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { RequisitionListInputToShoppingListTransformer } from '../../transformers';
import { atob } from '@aligent/utils';
import { RequisitionListService } from '../../services/requisition-list-service';

/**
 * update a new shopping list.
 */
export const updateRequisitionListMutation: MutationResolvers['updateRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const requisitionListInputToShoppingListTransformer: RequisitionListInputToShoppingListTransformer =
            context.injector.get(RequisitionListInputToShoppingListTransformer);

        const shoppingList = requisitionListInputToShoppingListTransformer.transform({
            data: args.input,
        });
        shoppingList.id = atob(args.requisitionListUid);

        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        await client.updateShoppingLists(shoppingList);

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
