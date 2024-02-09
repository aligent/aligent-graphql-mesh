import { ComplexTextValue } from '@aligent/orocommerce-resolvers';
import { Entity, Attributes, Relationships } from '.';

export type ShoppingListWithItemsIncluded =
    | ShoppingListItem
    | IncludedProduct
    | IncludedProductImages
    | IncludedProductCategory;

export interface ShoppingListsWithItems {
    data: ShoppingList[];
    included?: ShoppingListWithItemsIncluded[];
}

export interface ShoppingListWithItems {
    data: ShoppingList;
    included?: ShoppingListWithItemsIncluded[];
}

export interface IncludedProduct {
    type: 'products';
    id: string;
    attributes: ProductAttribute;
    relationships: ProductRelationships;
}
export interface IncludedProductImages {
    type: 'productimages';
    id: string;
    attributes: ImageAttribute;
    relationships: ImageRelationships;
}

export interface IncludedProductCategory {
    type: 'mastercatalogcategories';
    id: string;
    attributes: CategoryAttribute;
    relationships: CategoryRelationships;
}

interface CategoryRelationships {
    categoryPath: {
        data: {
            type: 'mastercatalogcategories';
            id: string;
        };
    };
}

interface ImageRelationships {
    product: {
        data: {
            type: 'products';
            id: string;
        };
    };
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

export interface CategoryAttribute extends Attributes {
    createdAt: Date;
    updatedAt: Date;
    title: string;
    shortDescription: ComplexTextValue;
    description: ComplexTextValue;
    url: string;
    urls: string[];
    images: CategoryImage[];
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
}

interface CategoryImage {
    mimeType: string;
    url: string;
    type: string;
}
export interface ImageAttribute extends Attributes {
    updatedAt: Date;
    mimeType: string;
    types: string[];
    files: ImageFiles[];
    altText: string;
}

export interface ImageFiles {
    url: string;
    maxWidth: number | null;
    maxHeight: number | null | string;
    dimension: string;
    url_webp: string;
    types: string[];
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
export interface ShoppingListItemInput extends Omit<ShoppingListItem, 'id'> {}

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
