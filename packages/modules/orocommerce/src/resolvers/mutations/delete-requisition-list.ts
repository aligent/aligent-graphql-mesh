import { MutationResolvers } from '@aligent/orocommerce-resolvers';
import { ShoppingListsClient } from '../../apis/rest/shopping-list-api-client';
import { DeleteShoppingListOutputTransformerChain } from '../../transformers/shopping-list/delete-shopping-list-output-transformer';
export const deleteRequisitionListMutation: MutationResolvers['deleteRequisitionList'] = {
    resolve: async (_root, args, context, _info) => {
        const client: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const deleteShoppingListResult = await client.deleteShoppingLists(args.requisitionListUid);

        const deleteShoppingListOutputTransformer: DeleteShoppingListOutputTransformerChain =
            context.injector.get(DeleteShoppingListOutputTransformerChain);
        return deleteShoppingListOutputTransformer.transform({
            data: { status: deleteShoppingListResult },
        });
    },
};
