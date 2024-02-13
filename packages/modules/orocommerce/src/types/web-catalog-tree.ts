import { Entity, Resource, Relationships, Attributes } from '.';

export interface WebCatalogTree extends Entity {
    type: 'webcatalogtree';
    id: string;
    attributes: WebCatalogTreeAttributes;
    relationships: WebCatalogTreeRelationships;
    included?: Array<WebCatalogTree>;
}

export interface WebCatalogTreeAttributes extends Attributes {
    order: number;
    level: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    url: string;
    urls: Array<object>;
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
}

export interface WebCatalogTreeRelationships extends Relationships {
    parent: {
        data: Resource | null;
    };
    path: {
        data: Array<Resource>;
    };
    content: {
        data: Resource;
    };
}
