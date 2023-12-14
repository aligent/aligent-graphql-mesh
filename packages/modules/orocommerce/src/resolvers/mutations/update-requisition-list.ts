import {MutationResolvers, UpdateRequisitionListOutput} from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { ShoppingListToRequisitionListTransformer } from '../../transformers/shopping-list/shopping-list-to-requisition-list-transformer';
import { RequisitionListInputToShoppingListTransformer } from '../../transformers/shopping-list/requisition-list-input-to-shopping-list-transformer';

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

        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const updatedShoppingList = await client.updateShoppingLists(shoppingList);

        const shoppingListToRequisitionListTransformer: ShoppingListToRequisitionListTransformer =
            context.injector.get(ShoppingListToRequisitionListTransformer);
        return shoppingListToRequisitionListTransformer.transform({
            data: updatedShoppingList,
        }) as UpdateRequisitionListOutput;
    },
};
