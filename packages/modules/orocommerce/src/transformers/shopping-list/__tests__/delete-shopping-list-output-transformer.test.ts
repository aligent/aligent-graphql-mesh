import 'reflect-metadata';
import { DeleteShoppingListOutputTransformer } from '../delete-shopping-list-output-transformer';
import { deleteShoppingListWithItemsOutputData } from './__data__/delete-shopping-list-data';
import { ShoppingListWithItemsToRequisitionListTransformer } from '../shopping-list-with-items-to-requisition-list-transformer';
import {
    OrderLineItemsToNewShoppingListTransformer,
    OrderLineItemToShoppingListItemTransformer,
    ShoppingListToCartTransformer,
} from '../../../transformers';
import { getOroMockOrderLineItems } from './__data__/order-line-items-data';

describe('Delete shopping list transform tests', () => {
    test('Transform output of delete shopping list status', () => {
        const orderLineItems = getOroMockOrderLineItems();
        const lineItemTransformer = new OrderLineItemToShoppingListItemTransformer();
        const shoppingListWithItems = new OrderLineItemsToNewShoppingListTransformer(
            lineItemTransformer
        ).transform({
            data: {
                newShoppingList: { default: true, name: 'Name1', notes: 'description' },
                orderLineItems: orderLineItems,
            },
        });

        const shoppingListToCartTransformer = new ShoppingListToCartTransformer();
        const shoppingListWithItemsToRequisitionListTransformer =
            new ShoppingListWithItemsToRequisitionListTransformer(shoppingListToCartTransformer);
        const deleteShoppingListOutputTransformer = new DeleteShoppingListOutputTransformer(
            shoppingListWithItemsToRequisitionListTransformer
        );
        const transformed = deleteShoppingListOutputTransformer.transform({
            data: { status: true, shopping_list_with_items: shoppingListWithItems },
        });

        expect(transformed).toEqual(deleteShoppingListWithItemsOutputData);
    });
});
