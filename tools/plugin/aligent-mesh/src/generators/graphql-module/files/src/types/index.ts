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
