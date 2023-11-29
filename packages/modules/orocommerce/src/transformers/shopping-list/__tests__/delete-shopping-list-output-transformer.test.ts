import 'reflect-metadata';
import { DeleteShoppingListOutputTransformer } from '../delete-shopping-list-output-transformer';
import { deleteShoppingListOutputData } from './__data__/delete-shopping-list-data';

describe('Delete shopping list transform tests', () => {
    test('Transform output of delete shopping list status', () => {
        const deleteShoppingListOutputTransformer = new DeleteShoppingListOutputTransformer();
        const transformed = deleteShoppingListOutputTransformer.transform({
            data: { status: true },
        });

        expect(transformed).toEqual(deleteShoppingListOutputData);
    });
});
