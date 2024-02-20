import { MutationResolvers, UpdateRequisitionListItemsInput } from '@aligent/orocommerce-resolvers';
import { UpdateCartItemTransformerChain } from '../../transformers/shopping-list/update-cart-item-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { atob } from '@aligent/utils';
import { RequisitionListService } from '../../services/requisition-list-service';

export const updateRequisitionListItemsMutation: MutationResolvers['updateRequisitionListItems'] = {
    resolve: async (_root, args, context, _info) => {
        const { requisitionListItems, requisitionListUid } = args;

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const updateCartItemTransformer: UpdateCartItemTransformerChain = context.injector.get(
            UpdateCartItemTransformerChain
        );

        for (const item of requisitionListItems) {
            const { quantity, item_id } = <UpdateRequisitionListItemsInput>item;

            if (!quantity || isNaN(quantity)) {
                throw new Error(`There was no quantity value sent for updating item_id ${item_id}`);
            }

            const cartItemId = atob(item_id);

            const transformedCartItemInput = updateCartItemTransformer.transform({
                data: { cartItemId, quantity },
            });

            await shoppingListClient.updateItemInShoppingList(transformedCartItemInput);
        }

        const requisitionListService: RequisitionListService =
            context.injector.get(RequisitionListService);
        const transformedRequisitionList = await requisitionListService.getList(
            atob(requisitionListUid)
        );

        return {
            requisition_list: transformedRequisitionList,
        };
    },
};
