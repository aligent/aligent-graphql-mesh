import 'reflect-metadata';
import { CreateShoppingListTransformer } from '../create-shopping-list-transformer';
import { createShoppingListInputData } from './__data__/create-shopping-list-input-data';
import { createShoppingListOutputData } from './__data__/create-shopping-list-output-data';

describe('Create ShoppingList data transform tests', () => {
    test('return transformed Create ShoppingList output', () => {
        const createShoppingListTransformer = new CreateShoppingListTransformer();
        const transformed = createShoppingListTransformer.transform({
            data: createShoppingListInputData,
        });

        expect(transformed).toEqual(createShoppingListOutputData);
    });
});
