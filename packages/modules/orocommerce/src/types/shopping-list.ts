import { CartUserInputError, CheckoutUserInputError } from '@aligent/orocommerce-resolvers';

import {
    Entity,
    Attributes,
    Relationships,
    Product,
    ProductImage,
    Category,
    InventoryStatus,
} from '.';

export type ShoppingListWithItemsIncluded =
    | ShoppingListItem
    | Product
    | ProductImage
    | Category
    | InventoryStatus;

export interface ShoppingListsWithItems {
    data: ShoppingList[];
    included?: ShoppingListWithItemsIncluded[];
}

export interface ShoppingListWithItems {
    data: ShoppingList;
    included?: ShoppingListWithItemsIncluded[];
}

export interface ShoppingList extends Entity {
    type: 'shoppinglists';
    attributes: ShoppingListInputAttribute | ShoppingListAttribute;
    relationships: ShoppingListRelationships;
}
/**
 * This interface is used to create a new shopping list
 */
export interface ShoppingListInputAttribute extends Attributes {
    name: string;
    notes: string | null;
    default: boolean;
}
export interface ShoppingListAttribute extends ShoppingListInputAttribute {
    createdAt: string;
    updatedAt: string;
    currency: string;
    total: string;
    subTotal: string;
    default: boolean;
}
export interface ShoppingListRelationships extends Relationships {
    items: {
        data: {
            type: 'shoppinglistitems';
            id: string;
        }[];
    };
    customerUser?: {
        data: {
            type: 'customerusers';
            id: string;
        };
    };
    customer?: {
        data: {
            type: 'customers';
            id: string;
        };
    };
}
export type ShoppingListItemInput = Omit<ShoppingListItem, 'id'>;

export interface ShoppingListItem extends Entity {
    type: 'shoppinglistitems';
    attributes: ShoppingListItemInputAttributes | ShoppingListItemAttributes;
    relationships?: ShoppingListItemInputRelationships | ShoppingListItemRelationships;
}
export interface ShoppingListItemInputAttributes extends Attributes {
    quantity: number;
}
export interface ShoppingListItemAttributes extends ShoppingListItemInputAttributes {
    checksum: string;
    notes: string | null;
    currency: string;
    value: string;
}
export interface ShoppingListItemInputRelationships extends Relationships {
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
}
export interface ShoppingListItemRelationships extends ShoppingListItemInputRelationships {
    kitItems: {
        data: []; // Todo: Update with actual type
    };
    parentProduct?: ProductData;
    shoppingList: {
        data: {
            type: 'shoppinglists';
            id: string;
        };
    };
    product: ProductData;
}

interface ProductData {
    data: {
        type: 'products';
        id: string;
    };
}

export type CartUserErrors = Array<CartUserInputError & CheckoutUserInputError>;
