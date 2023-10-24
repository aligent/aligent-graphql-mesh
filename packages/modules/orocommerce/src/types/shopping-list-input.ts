import { Entity, ShoppingListAttribute } from '.';

export interface ShoppingListWithItemsInput {
    data: ShoppingListInput;
    included: ShoppingListItemInput[];
}

export interface ShoppingListInput extends Entity {
    type: 'shoppinglists';
    attributes: ShoppingListAttribute;
    relationships: {
        items: {
            data: {
                type: 'shoppinglistitems';
                id: string;
            }[];
        };
    };
}

export interface ShoppingListItemInputWithoutID extends Omit<ShoppingListItemInput, 'id'> {}

export interface ShoppingListItemInput extends Entity {
    type: 'shoppinglistitems';
    attributes: {
        quantity: number;
    };
    relationships: {
        product: {
            data: {
                type: 'products';
                id: string;
            };
        };
        unit: {
            data: {
                type: 'productunits';
                id: string;
            };
        };
        shoppingList?: {
            data: {
                type: 'shoppinglists';
                id: string;
            };
        };
    };
}
