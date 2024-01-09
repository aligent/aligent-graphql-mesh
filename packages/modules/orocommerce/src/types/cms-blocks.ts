import { Attributes, Entity } from '.';

export interface OroCmsBlock extends Entity {
    attributes: OroCmsBlockAttributes;
}

export interface OroCmsBlockAttributes extends Attributes {
    id: number;
    content: string;
    identifier: string;
    title: string;
}
