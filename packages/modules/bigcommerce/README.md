# BigCommerce GraphQl Module

## Configuration

The configuration interface is found here: `packages/modules/bigcommerce/src/index.ts` and currently contains these properties:

  - `graphqlEndpoint` - BigCommerce Graphql endpoint for your store
  - `jwtPrivateKey` - Random string used to encrypt JWT tokens
  - `authToken` - X-Auth-Token header value
  - `clientSecret` - BigCommerce API Client Secret
  - `clientId` - BigCommerce API Client ID
  - `storeHash` - BigCommerce Store hash

Fetching config in a resolver:

```typescript
import { ModuleConfig } from '../../providers';

export const someResolver: QueryResolvers['a-resolver-type'] = {
  resolve: async (_root, _args, context, _info) => {
    const config = context.injector.get(ModuleConfig);

    return {};
  },
};
```

Fetching config in a class:

```typescript
import { ModuleConfig } from '../../providers';
import { BigCommerceModuleConfig } from '@aligent/bigcommerce-graphql-module';

@Injectable({})
export class SomeService {
  constructor(@Inject(ModuleConfig) private config: BigCommerceModuleConfig) {}

  getGraphQlEndpoint() {
    return this.config.graphqlEndpoint;
  }
}
```

## The BigCommerce GraphQl SDK

Fetching the sdk in a resolver:

```typescript
import { BigCommerceSdk } from '../../providers';
import { Sdk } from '@aligent/bigcommerce-operations';

export const someResolver: QueryResolvers['a-resolver-type'] = {
  resolve: async (_root, _args, context, _info) => {
    const sdk: Sdk = _context.injector.get(BigCommerceSdk);

    const response = sdk.login({
      email,
      password,
    });

    return {};
  },
};
```

### Adding new queries to the Sdk

1. Write out your gql query in a new file in `packages/modules/bigcommerce/src/apis/graphql/requests/`

   ```typescript
   import { gql } from 'graphql-tag';
   import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
   import { print } from 'graphql/index';

   export const customerAttribute = stripIgnoredCharacters(
     print(gql`
       query customerAttribute($attributeId: Int!) {
         customer {
           attributes {
             attribute(entityId: $attributeId) {
               entityId
               name
               value
             }
           }
         }
       }
     `)
   );
   ```

2. Re-Run the codegen to add your query to the SDK
   `yarn run codegen`

3. Make your request!
   ```typescript
   const response = sdk.customerAttribute({
     attributeId: 123,
   });
   ```
