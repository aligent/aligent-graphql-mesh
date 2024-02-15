import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { ShoppingListToRequisitionListTransformer } from '../../transformers/shopping-list/shopping-list-to-requisition-list-transformer';
import { RequisitionListInputToShoppingListTransformer } from '../../transformers/shopping-list/requisition-list-input-to-shopping-list-transformer';

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

        const shoppingListToRequisitionListTransformer: ShoppingListToRequisitionListTransformer =
            context.injector.get(ShoppingListToRequisitionListTransformer);

        return {
            requisition_list: shoppingListToRequisitionListTransformer.transform({
                data: createdShoppingList,
            }),
        };
    },
};
