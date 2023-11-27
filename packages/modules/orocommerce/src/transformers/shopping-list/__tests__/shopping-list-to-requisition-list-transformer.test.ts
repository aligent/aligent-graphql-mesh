import 'reflect-metadata';
import { ShoppingListToRequisitionListTransformer } from '../shopping-list-to-requisition-list-transformer';
import { shoppingList } from './__data__/create-shopping-list-input-data';
import { createShoppingListOutputData } from './__data__/create-shopping-list-output-data';

describe('Shopping list to requisition list transform tests', () => {
    test('Transform a shopping list into a requisition list test', () => {
        const shoppingListToRequisitionListTransformer =
            new ShoppingListToRequisitionListTransformer();
        const transformed = shoppingListToRequisitionListTransformer.transform({
            data: shoppingList,
        });

        expect(transformed).toEqual(createShoppingListOutputData);
    });
});
