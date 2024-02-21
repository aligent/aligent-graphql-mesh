import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { RequisitionListInputToShoppingListTransformer } from '../../transformers';
import { RequisitionListService } from '../../services/requisition-list-service';

/**
 * Create a new shopping list.
 */
export const createRequisitionListMutation: MutationResolvers['createRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const requisitionListInputToShoppingListTransformer: RequisitionListInputToShoppingListTransformer =
            context.injector.get(RequisitionListInputToShoppingListTransformer);

        const shoppingList = requisitionListInputToShoppingListTransformer.transform({
            data: args.input,
        });

        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const createdShoppingList = await client.postShoppingLists(shoppingList);

        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);
        const transformedRequisitionList = await requisitionListService.getList(
            createdShoppingList.id
        );

        return {
            requisition_list: transformedRequisitionList,
        };
    },
};
