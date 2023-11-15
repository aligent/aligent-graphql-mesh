import { Entity, Attributes, Relationships } from '.';
export interface ShoppingListWithItems {
    data: ShoppingList;
    included: (ShoppingListItem | IncludedProduct)[];
}

export interface IncludedProduct {
    type: 'products';
    id: string;
    attributes: ProductAttribute;
    relationships: ProductRelationships;
}

interface ProductRelationships {
    images: {
        links: Links;
        data: [{ type: 'productimages'; id: string }];
    };
    productFamily: {
        links: {
            self: string;
            related: string;
        };
        data: { type: 'productfamilies'; id: string };
    };
    kitItems: {
        links: {
            self: string;
            related: string;
        };
        data: [];
    };
    category: {
        links: {
            self: string;
            related: string;
        };
        data: { type: 'mastercatalogcategories'; id: string };
    };
    inventoryStatus: {
        links: {
            self: string;
            related: string;
        };
        data: { type: 'productinventorystatuses'; id: string };
    };
    variantProducts: {
        links: {
            self: string;
            related: string;
        };
        data: []; // Todo: Update with actual type
    };
    parentProducts: {
        links: {
            self: string;
            related: string;
        };
        data: []; // Todo: Update with actual type
    };
}

interface Links {
    self: string;
    related: string;
}

export interface ProductAttribute extends Attributes {
    sku: string;
    createdAt: Date;
    updatedAt: Date;
    productType: string;
    featured: boolean;
    newArrival: boolean;
    name: string;
    shortDescription: string;
    description: string;
    unitPrecisions: UnitPrecision[];
    url: string;
    prices: Price[];
    lowInventory: boolean;
    upcoming: boolean;
    availabilityDate: null;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
}

interface Price {
    price: number;
    currencyId: string;
    quantity: number;
    unit: string;
}

interface UnitPrecision {
    unit: string;
    precision: number;
    conversionRate: number;
    default: boolean;
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
}
export interface ShoppingListRelationships extends Relationships {
    items: {
        data: {
            type: 'shoppinglistitems';
            id: string;
        }[];
    };
}
export interface ShoppingListItemInput extends Omit<ShoppingListItem, 'id'> {}
export interface ShoppingListItem extends Entity {
    type: 'shoppinglistitems';
    attributes: ShoppingListItemInputAttributes | ShoppingListItemAttributes;
    relationships: ShoppingListItemInputRelationships | ShoppingListItemRelationships;
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
