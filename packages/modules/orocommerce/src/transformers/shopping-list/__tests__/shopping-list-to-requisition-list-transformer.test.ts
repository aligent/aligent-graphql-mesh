import 'reflect-metadata';
import { shoppingListWithItems } from './__data__/create-shopping-list-input-data';
import {
    CategoriesTransformer,
    ProductsTransformer,
    ShoppingListToCartTransformer,
    ShoppingListToRequisitionListTransformer,
} from '../../../transformers';
import { requisitionList } from './__data__/delete-shopping-list-data';

describe('Shopping list with items to requisition list transform tests', () => {
    test('Transform a shopping list with items into a requisition list test', () => {
        const shoppingListToCartTransformer = new ShoppingListToCartTransformer(
            new ProductsTransformer(new CategoriesTransformer())
        );
        const shoppingListToRequisitionListTransformer =
            new ShoppingListToRequisitionListTransformer(shoppingListToCartTransformer);

        const transformed = shoppingListToRequisitionListTransformer.transform({
            data: shoppingListWithItems,
        });

        expect(transformed).toEqual(requisitionList);
    });
});
