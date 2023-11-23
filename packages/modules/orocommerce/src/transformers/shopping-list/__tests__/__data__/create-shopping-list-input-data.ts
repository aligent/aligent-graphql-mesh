import { ShoppingList } from '../../../../types';

export const createShoppingListInputData: ShoppingList = {
    id: '1',
    type: 'shoppinglists',
    attributes: {
        name: 'Name1',
        notes: '',
        default: false,
    },
    relationships: {
        items: {
            data: [],
        },
    },
};
