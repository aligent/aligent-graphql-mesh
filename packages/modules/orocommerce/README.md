# OroCommerce GraphQl Module

The OroCommerce REST API follows the JSON API Spec see: https://jsonapi.org/

OroCommerce has two REST APIs:

- Storefront API https://aligent.oro-cloud.com/api/doc
- Admin API https://aligent.oro-cloud.com/admin/api/doc

## Configuration

The configuration interface is found here: `packages/modules/orocommerce/src/index.ts` and currently contains these properties:

- `storeUrl` - OroCommerce storefront url
- `clientSecret` - OroCommerce API Client Secret
- `clientId` - OroCommerce API Client ID

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
import { OroCommerceModuleConfig } from '@aligent/orocommerce-graphql-module';

@Injectable({})
export class SomeService {
  constructor(@Inject(ModuleConfig) private config: OroCommerceModuleConfig) {}

  getGraphQlEndpoint() {
    return this.config.graphqlEndpoint;
  }
}
```
