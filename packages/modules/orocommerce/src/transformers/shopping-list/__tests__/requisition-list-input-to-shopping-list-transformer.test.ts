import 'reflect-metadata';
import { RequisitionListInputToShoppingListTransformer } from '../requisition-list-input-to-shopping-list-transformer';
import {
    createRequisitionListInput,
    shoppingList,
} from './__data__/create-shopping-list-input-data';

describe('Requisition list input to shopping list transform tests', () => {
    test('return transformed shopping list', () => {
        const requisitionListInputToShoppingListTransformer =
            new RequisitionListInputToShoppingListTransformer();
        const transformed = requisitionListInputToShoppingListTransformer.transform({
            data: createRequisitionListInput,
        });

        expect(transformed).toEqual(shoppingList);
    });
});
