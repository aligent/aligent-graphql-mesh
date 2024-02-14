import 'reflect-metadata';
import { shoppingListWithItems } from './__data__/create-shopping-list-input-data';
import { ShoppingListWithItemsToRequisitionListTransformer } from '../shopping-list-with-items-to-requisition-list-transformer';
import {
    CategoriesTransformer,
    ProductsTransformer,
    ShoppingListToCartTransformer,
} from '../../../transformers';
import { requisitionList } from './__data__/delete-shopping-list-data';

describe('Shopping list with items to requisition list transform tests', () => {
    test('Transform a shopping list with itmes into a requisition list test', () => {
        const shoppingListToCartTransformer = new ShoppingListToCartTransformer(
            new ProductsTransformer(new CategoriesTransformer())
        );
        const shoppingListWithItemsToRequisitionListTransformer =
            new ShoppingListWithItemsToRequisitionListTransformer(shoppingListToCartTransformer);

        const transformed = shoppingListWithItemsToRequisitionListTransformer.transform({
            data: shoppingListWithItems,
        });

        expect(transformed).toEqual(requisitionList);
    });
});
