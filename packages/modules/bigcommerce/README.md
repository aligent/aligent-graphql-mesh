# BigCommerce GraphQl Module

## Configuration

### Fetching Configuration

In a resolver:

```typescript
import { ModuleConfig } from '../../providers';

export const someResolver: QueryResolvers['a-resolver-type'] = {
  resolve: async (_root, _args, context, _info) => {
    const config = context.injector.get(ModuleConfig);

    return {};
  },
};
```

In a class:

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
