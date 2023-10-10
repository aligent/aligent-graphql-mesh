export interface Resource {
    readonly type: string;
    id: string;
}

export interface Relationships {
    [name: string]: {
        data?: Array<Resource> | Resource | null;
    };
}

export interface Attributes {
    [name: string]: boolean | number | string | null;
}

export interface Entity extends Resource {
    attributes: Attributes;
    relationships?: Relationships;
}

export * from './customer';
export * from './currency';
export * from './shopping-list';
