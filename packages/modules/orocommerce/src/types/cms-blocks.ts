import { Attributes, Entity } from '.';

export interface OroCmsBlock extends Entity {
    attributes: OroCmsBlockAttributes;
    links: { self: string }
}

export interface OroContentVariantAttributes extends Attributes {
    content: string;
    style: string;
}

export interface OroCmsBlockAttributes extends Attributes {
    id: number;
    contentVariant: OroContentVariantAttributes;

    alias: string;
    enabled: boolean;
    createdAt: string;
    updatedAt: string;
    title: string;
}
