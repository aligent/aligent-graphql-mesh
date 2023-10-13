export interface Resource {
    readonly type: string;
    id: string;
}

export interface Relationships {
    [name: string]: {
        data?: Array<Resource> | Resource | null;
    };
}

export interface EntityAttributes {
    [name: string]: EntityAttribute | EntityAttribute[];
}

export interface EntityAttribute {
    id: string;
    targetValue: string;
}

export interface Attributes {
    [name: string]:
        | boolean
        | number
        | string
        | null
        | Array<number>
        | Array<string>
        | Array<object>
        | EntityAttributes;
}

export interface Entity extends Resource {
    attributes: Attributes;
    relationships?: Relationships;
}

export * from './customer';
export * from './shopping-list';
export * from './web-catalog-tree';
