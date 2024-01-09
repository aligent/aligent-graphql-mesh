import { Entity, Resource, Relationships, Attributes } from '.';

export interface Customer extends Entity {
    type: 'customers';
    id: string;
    attributes: CustomerAttributes;
    relationships?: CustomerRelationships;
    included: Array<Entity>;
}

export interface CustomerAttributes extends Attributes {
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface CustomerRelationships extends Relationships {
    parent: {
        data?: Resource;
    };
    children: {
        data?: Array<Resource>;
    };
    addresses: {
        data?: Array<Resource>;
    };
    group: {
        data?: Resource;
    };
    users: {
        data?: Array<Resource>;
    };
}
