# OroCommerce GraphQl Module

The OroCommerce REST API follows the JSON API Spec see: https://jsonapi.org/

OroCommerce has two REST APIs:

- Storefront API https://aligent.oro-cloud.com/api/doc
- Admin API https://aligent.oro-cloud.com/admin/api/doc

## Authentication

Oro's storefront API requires every request to be authenticated, even if the user has not signed in yet. This means that before calling any graphql query or mutation you MUST call the `generateCustomerToken` mutation to retrieve an token.

Note: You do not need a storefront user, you can just use the username "guest" and password "guest" to retreive a guest token.

1. Execute the [generateCustomerToken](https://localhost:4000/graphql?query=mutation+login+%7B%0A++generateCustomerToken%28email%3A+%22guest%22%2C+password%3A+%22guest%22%29+%7B%0A++++token%0A++%7D%0A%7D) mutation

```
mutation login {
  generateCustomerToken(email:"guest", password: "guest") {
    token
  }
}
```

2. Extract the token from the response

```
{
  "data": {
    "generateCustomerToken": {
      "token": "<COPY_THIS_TOKEN>"
    }
  }
}
```

3. Open a test query [getCountries](https://localhost:4000/graphql?query=query+getCountries+%7B%0A++countries+%7B%0A++++id%2C%0A++++available_regions+%7B%0A++++++id%0A++++%7D%0A++%7D%0A%7D)

4. Add the token to your "Header" section with `Bearer` prefixing the value (see screenshot)

```
{
  "Authorization": "Bearer <Add_token_here>"
}
```

![Authorization](docs/auth.png 'Authorization Header')

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
