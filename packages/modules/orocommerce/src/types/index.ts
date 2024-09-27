import Keyv from 'keyv';

// Extend Global context type see: https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace GraphQLModules {
        interface GlobalContext {
            cache: Keyv;
            request: Request;
        }
    }
}

export interface Resource {
    readonly type: string;
    id: string;
}

export interface Relationships {
    [name: string]:
        | {
              data?: Array<Resource> | Resource | null;
          }
        | undefined;
}

export interface EntityAttributes {
    [name: string]: EntityAttribute | EntityAttribute[] | null;
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
        | object
        | null
        | Array<number>
        | Array<string>
        | Array<object>
        | undefined
        | Attributes[]
        | EntityAttributes;
}

export interface Entity extends Resource {
    attributes: Attributes;
    relationships?: Relationships;
}

export * from './checkouts';
export * from './checkout-sources';
export * from './customer';
export * from './oroCurrency';
export * from './country';
export * from './shopping-list';
export * from './cms-page';
export * from './contact-request';
export * from './web-catalog-tree';
export * from './customer-user';
export * from './customer-address';
export * from './order';
export * from './update-customer';
export * from './store-config';
export * from './shopping-list';
export * from './order-line-item';
export * from './product';
