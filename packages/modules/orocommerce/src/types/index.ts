import { ReflectiveInjector } from 'graphql-modules/di';
import Keyv from 'keyv';

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

// Extend Global context type see: https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type
/* eslint-disable */
declare global {
    namespace GraphQLModules {
        interface GlobalContext {
            headers: Record<string, string>;
            injector: ReflectiveInjector;
            cache: Keyv;
        }
    }
}
/* eslint-enable */

export * from './customer';
