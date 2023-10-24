import { Entity, Attributes } from '.';
export interface ShoppingListWithItems {
    data: ShoppingList;
    included: ShoppingListItem[];
}
export interface ShoppingList extends Entity {
    type: 'shoppinglists';
    attributes: ShoppingListAttribute;
    relationships?: {
        items: {
            data: [
                {
                    type: 'shoppinglistitems';
                    id: string;
                },
            ];
        };
    };
    included?: ShoppingListItem[];
}

export interface ShoppingListAttribute extends Attributes {
    name: string;
    default: boolean;
}

export interface ShoppingListItem extends Entity {
    type: 'shoppinglistitems';
    attributes: {
        checksum: string;
        quantity: number;
        notes: string | null;
        currency: string;
        value: string;
    };
    relationships: {
        product: {
            data: {
                type: 'products';
                id: string;
            };
        };
        parentProduct?: {
            data: {
                type: 'products';
                id: string;
            };
        };
        kitItems: {
            data: [];
        };
        shoppingList: {
            data: {
                type: 'shoppinglists';
                id: string;
            };
        };
        unit: {
            data: {
                type: 'productunits';
                id: string;
            };
        };
    };
}
