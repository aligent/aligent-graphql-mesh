import { Entity, Resource, Relationships, Attributes, EntityAttributes } from '.';

export interface ProductAggregations {}

export interface ProductSearch extends Entity {
    type: 'productsearch';
    id: string;
    attributes: ProductSearchAttributes;
    relationships: ProductSearchRelationships;
    included?: Array<ProductIncludeTypes>;
    meta?: ProductSearchMeta;
}

export interface ProductSearchAttributes extends Attributes {
    category_sort_order: number;
    images: Array<object>;
    isVariant: boolean;
    minimalPrices: Array<object>;
    name: string;
    newArrival: boolean;
    orderedAt: string;
    productType: string;
    shortDescription: string;
    sku: string;
    unitPrecisions: Array<object>;
}

export interface ProductSearchRelationships extends Relationships {
    category: {
        data: Resource;
    };
    inventoryStatus: {
        data: Resource;
    };
    product: {
        data: Resource;
    };
    productFamily: {
        data: Resource;
    };
}

export interface ProductSearchMeta {
    aggregatedData?: Attributes;
    totalRecordsCount?: number;
}

export interface Product extends Entity {
    type: 'products';
    id: string;
    links: { self: string };
    attributes: ProductAttributes;
    relationships: ProductRelationships;
    included?: Array<ProductIncludeTypes>;
}

export interface ProductAttributes extends Attributes {
    availabilityDate: string | null;
    category_sort_order: number | null;
    description: string | null;
    featured: boolean;
    lowInventory: boolean;
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
    name: string;
    newArrival: boolean;
    prices: Price[] | [];
    productAttributes: EntityAttributes;
    productType: string;
    shortDescription: string | null;
    sku: string;
    unitPrecisions: Array<object>;
    upcoming: boolean;
    url: string;
    urls: Array<object>;
    variantAttributeNames: Array<string>;
    createdAt: string;
    updatedAt: string;
}

interface Price {
    price: string;
    currencyId: string;
    quantity: string;
    unit: string;
}

export interface ProductRelationships extends Relationships {
    category: {
        data: Resource;
    };
    images: {
        data: Array<Resource>;
    };
    inventoryStatus: {
        data: Resource;
    };
    kitItems: {
        data: Array<Resource>;
    };
    parentProducts: {
        data: Array<Resource>;
    };
    productFamily: {
        data: Resource;
    };
    variantProducts: {
        data: Array<Resource>;
    };
}

export interface InventoryStatus extends Entity {
    type: 'productinventorystatuses';
    id: string;
    attributes: {
        name: string;
    };
}

export interface ProductImage extends Entity {
    type: 'productimages';
    id: string;
    links: { self: string };
    attributes: ProductImageAttributes;
    relationships?: {
        product: { data: Resource };
    };
}

export interface ProductImageAttributes extends Attributes {
    files: Array<ProductImageFile>;
    mimeType: string;
    types: Array<string>;
    updatedAt: string;
}

export interface ProductImageFile {
    url: string;
    maxWidth: number | string | null;
    maxHeight: number | string | null;
    dimension: string;
    types: Array<string>;
    url_webp?: string;
}

export interface ConfigurableProductAttribute {
    meta: {
        id: string;
        attrType: string;
        label: string;
    };
}

export interface Category extends Entity {
    type: 'mastercatalogcategories';
    id: string;
    attributes: CategoryAttributes;
    relationships?: {
        categoryPath: { data: Resource[] };
    };
}

export interface CategoryAttributes extends Attributes {
    createdAt: string;
    updatedAt: string;
    title: string | null;
    shortDescription: string | null;
    description: string | null;
    url: string;
    urls: string[];
    images: CategoryImage[];
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
}

interface CategoryImage {
    mimeType: string;
    url: string;
    type: string;
}

export type ProductIncludeTypes = InventoryStatus | ProductImage | Product | Category;
export type MetaAllowedTypes = ProductSearchMeta;
export type SupportedProductTypes = 'SimpleProduct' | 'ConfigurableProduct' | 'BundleProduct';

export interface ProductsTransformerInput {
    oroProductsData: {
        data: Array<Product | ProductSearch>;
        included?: Array<ProductIncludeTypes>;
        meta?: ProductSearchMeta;
    };
    productAttributes?: ConfigurableProductAttribute[];
    pageSize: number;
    currentPage: number;
}