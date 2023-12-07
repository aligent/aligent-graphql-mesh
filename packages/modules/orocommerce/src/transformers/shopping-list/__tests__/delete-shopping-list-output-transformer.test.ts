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
import { ShoppingListsToRequisitionListsTransformer } from '../shopping-lists-to-requisition-lists-transformer';

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

        const deleteShoppingListOutputTransformer = new DeleteShoppingListOutputTransformer();
        const transformed = deleteShoppingListOutputTransformer.transform({
            data: { status: true },
        });

        const shoppingListToCartTransformer: ShoppingListToCartTransformer =
            new ShoppingListToCartTransformer();
        const shoppingListWithItemsToRequisitionListTransformer: ShoppingListWithItemsToRequisitionListTransformer =
            new ShoppingListWithItemsToRequisitionListTransformer(shoppingListToCartTransformer);
        const shoppingListsToRequisitionListsTransformer =
            new ShoppingListsToRequisitionListsTransformer(
                shoppingListWithItemsToRequisitionListTransformer
            );
        transformed.requisition_lists = shoppingListsToRequisitionListsTransformer.transform({
            data: { data: [shoppingListWithItems.data], included: shoppingListWithItems.included },
        });
        expect(transformed).toEqual(deleteShoppingListWithItemsOutputData);
    });

    test('Transform list of shopping list to requisition lists', () => {
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

        const shoppingListToCartTransformer: ShoppingListToCartTransformer =
            new ShoppingListToCartTransformer();
        const shoppingListWithItemsToRequisitionListTransformer: ShoppingListWithItemsToRequisitionListTransformer =
            new ShoppingListWithItemsToRequisitionListTransformer(shoppingListToCartTransformer);
        const shoppingListsToRequisitionListsTransformer =
            new ShoppingListsToRequisitionListsTransformer(
                shoppingListWithItemsToRequisitionListTransformer
            );
        const transformed = shoppingListsToRequisitionListsTransformer.transform({
            data: { data: [shoppingListWithItems.data], included: shoppingListWithItems.included },
        });
        expect(transformed).toEqual(deleteShoppingListWithItemsOutputData.requisition_lists);
    });
});
