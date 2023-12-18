import {
    MutationResolvers,
    UpdateRequisitionListItemsInput,
    UpdateRequisitionListItemsOutput,
} from '@aligent/orocommerce-resolvers';
import { UpdateCartItemTransformerChain } from '../../transformers/shopping-list/update-cart-item-transformer';
import { ShoppingListsClient } from '../../apis/rest';
import { CartService } from '../../services/cart-service';
import { atob } from '@aligent/utils';

export const updateRequisitionListItemsMutation: MutationResolvers['updateRequisitionListItems'] = {
    resolve: async (_root, args, context, _info): Promise<UpdateRequisitionListItemsOutput> => {
        const { requisition_list_id, requisition_list_items } = args.input || {};

        const shoppingListClient: ShoppingListsClient = context.injector.get(ShoppingListsClient);
        const updateCartItemTransformer: UpdateCartItemTransformerChain = context.injector.get(
            UpdateCartItemTransformerChain
        );

        if (!requisition_list_id || !Array.isArray(requisition_list_items)) {
            throw new Error(`Missing update requisition list information`);
        }

        for (const item of requisition_list_items) {
            const { quantity, item_id } = <UpdateRequisitionListItemsInput>item;

            if (!requisition_list_id) {
                throw new Error(`Missing update cart information`);
            }

            if (quantity === 0) {
                throw new Error(`Quantity cannot be "0"`);
            }

            if (!quantity || isNaN(quantity)) {
                throw new Error(`Cart item quantity is incorrect`);
            }

            const cartItemId = atob(item_id);

            const transformedCartItemInput = updateCartItemTransformer.transform({
                data: { cartItemId, quantity },
            });

            await shoppingListClient.updateItemInShoppingList(transformedCartItemInput);
        }

        const cartService: CartService = context.injector.get(CartService);
        const transformedRequisitionList =
            await cartService.getRequisitionList(requisition_list_id);

        return {
            requisition_list: transformedRequisitionList,
        };
    },
};
