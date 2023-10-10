import { Entity, Attributes } from '.';

export interface ShoppingList extends Entity {
    type: 'shoppinglists';
    attributes: ShoppingListAttribute;
}

interface ShoppingListAttribute extends Attributes {
    name: string;
    default: boolean;
}
