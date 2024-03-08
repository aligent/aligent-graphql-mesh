import { ReflectiveInjector } from 'graphql-modules/di';
import Keyv from 'keyv';

// Extend Global context type see: https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type
/* eslint-disable */
declare global {
    namespace GraphQLModules {
        interface GlobalContext {
            injector: ReflectiveInjector;
            cache: Keyv;
            request: Request;
        }
    }
}
/* eslint-enable */
