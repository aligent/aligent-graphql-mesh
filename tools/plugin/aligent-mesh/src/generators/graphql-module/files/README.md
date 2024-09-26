# <%= shortName %> GraphQl Module

## Global Context Type

This module extendsthe `ModuleContext` type as per the [GraphQL Modules documentation](https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type) in [/src/types/index.ts](./src/types/index.ts):

```typescript
interface GlobalContext {
  cache: Keyv;
  request: Request;
}
```

The server using this module must therefore be configured to provide these properties on the `context` object.
