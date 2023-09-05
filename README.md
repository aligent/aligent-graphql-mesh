# GraphQL Mesh

Mesh is a framework that helps shape and build an executable GraphQL schema from multiple data sources.

https://the-guild.dev/graphql/mesh

## Local Dev Setup

1. Clone the repository

```shell
$ git clone git@bitbucket.org:aligent/aligent-graphql-mesh.git
```

2. Duplicate the `.env.template` file as `.env` and fill in the values and place it in `packages/mesh/.env` directory.

```shell
$ cp .env.template packages/mesh/.env
```

3. Add environment configuration to .env file (see section below: Environment configuration)

4. Generate SSL certificate (see section below: Generating an SSL Certificate)

5. Add custom domain, `mesh.local.pwadev` to `/etc/hosts` file

```shell
sudoedit /etc/hosts
```

Adding the entry:

```text
127.0.0.1 mesh.local.pwadev
```

6. Start the mesh server from project root (see section below: Using the Mesh)

You can now send queries to `https://localhost:4000/graphql` to hit the mesh.

## Environment configuration

`BC_GRAPHQL_API` Is used by codgen to automatically created types from the BigCommerce GraphQL Store Front API.

`BC_GRAPHQL_TOKEN` Is the JWT needed for the BC Graphql API and is not customer specific, used for introspecting BC GraphQL API for codegen. To generate one follow the steps below in Generating Tokens and then BC_GRAPHQL_TOKEN.

`X_AUTH_TOKEN` Is a token used for the BC REST APIS and has different scopes applied, e.g. will only work with the products API. Its called `ACCESS TOKEN` in BC Admin.

`BC_CLIENT_SECRET` Is generated at the same time as the `X-AUTH_TOKEN`. This secret is used to sign a BC customer login JWT created in the `createCustomerLoginToken()` function. This JWT that is used for redirecting to the checkout whilst staying logged in.

`BC_CLIENT_ID` Is also generated at the same time as the `X-AUTH_TOKEN` and is also used for the same customer login JWT, however its used in the payload of the JWT as `iss: BC_CLIENT_ID` (iss: Indicates the token's issuer. This is your API account's client ID.).

`STORE_HASH` Unique ID for each BigCommerce instance and can be found in the URL of the Admin Dashboard `linhpy40az` in https://store-linhpy40az.mybigcommerce.com/manage/dashboard this value will different values for staging and production.

`JWT_PRIVATE_KEY` Is a randomly generated key that is used for signing the `MeshToken` that is created by `generateMeshToken()`. This jwt is then used going forward to verify that a user has logged in.

`DEBUG` Is only used for development and adds more details to the logs via console.

## Generating Tokens

### X_AUTH_TOKEN

Needs to be requested from the BigCommerce store owner. Check with Aligent DevOps if required. Created in the BC Admin from the BC Admin in settings > Store-level API accounts > Create API account as the name `ACCESS TOKEN`.

### Customer Impersonation token

`customerImpersonationToken` is being generated in the `useExtendContextPlugin` plugin and being set in `context.cache.set('customerImpersonationToken'),`. The token in then fetched from the cache `context.cache.get('customerImpersonationToken')` inside of the resolvers that require it. The customer impersonation token is used along with a header `x-bc-customer-id` to make customer specific requests to BC Graphql API, the alternative is to use the `SHOP_TOKEN` cookie that is returned after making the login mutation to BC Graphql.

e.g.

```json
{
    "Authorization": `Bearer ${customerImpersonationToken}`,
    "x-bc-customer-id": bcCustomerId,
}
```

### BC_GRAPHQL_TOKEN

This is a non customer specific token that needs to be generated using the BigComm storefront api-token endpoint.
This requires an existing X_AUTH_TOKEN to be passed in the header.

Docs: https://developer.bigcommerce.com/docs/storefront-auth/tokens

Endpoint: POST - https://api.bigcommerce.com/stores/{{store_hash}}/v3/storefront/api-token
Header: X-Auth-Token: <My-XAuth-Token-Here>
Payload:

- choose a expired epoch timestamp far enough in the future
- leave cors origins empty for local dev

```json
{
  "channel_id": 1,
  "expires_at": 1724983269,
  "allowed_cors_origins": []
}
```

### Customer Login Token

This JWT is generated in the Mesh in `modules/bigcommerce/utils/tokens` in the `createCustomerLoginToken` function.
This is needed to keep logged in users logged in when redirecting to the checkout. This JWT is signed by the `BC_CLIENT_SECRET`.

```json
{
    "iss": BC_CLIENT_ID,
    "iat": dateCreated,
    "jti": UUID,
    "operation": 'customer_login',
    "store_hash": STORE_HASH,
    "customer_id": customerId,
    "redirect_to": "/cart.php?action=loadInCheckout",
}
```

## Generating an SSL Certificate

Our PWA is served locally using an SSL certificate, which allows us to run the app under `https://` in the browser, but
also means that if we have an API gateway that is hosted under `http://`, then communication will be blocked. In order
to allow communication between our PWA and this gateway, we need them both to be served over `https://`. To create
an SSL certificate locally, run the following command.

_Please note: `openssl` is intended to be used from a global scope_

```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt
```

Then follow the terminal prompts (accepting all defaults is fine).

## Using the Mesh

This repository is set up for the GraphQL Mesh to be run as a Gateway. This means that all API requests will be sent
through the Mesh service, and then appropriately sent out to corresponding API's.

To use as a Gateway, after running `yarn dev`, update your app to send GraphQL requests to the server URL provided
by the CLI, likely `https://localhost:4000/graphql`.

## Tests

The sample tests can be ran with `yarn test`

## Development Notes

The skeleton of the code is in the `.meshrc.yml` file. The meshrc file can get very large and hard to maintain. To help with readability, it has been split into multiple files and then referenced using the `!include` syntax which is supported by graphql-mesh. This is not native yaml, so IDE syntax errors have to be ignored.

Each new platform that has been developed should be in it's own module. E.g. BigCommerce integrations go in `packages/modules/bigcommerce`.

### Modules

GraphQL Modules are reusable extendable of schema, resolvers and middleware that are used to make it easier to scale and reuse GraphQL code across different servers.

#### Basic Structure of a Module

```
modules/{module}/src
 - schema/*.graphql
 - resolvers
   - queries/
   - mutations/
   - index.ts
 - middleware/
 - types/
 - index.ts
```

#### Schema

The schema directory contains one or more `.graphql` files that define the graphql types, queries and mutations that this module will provide.

#### Resolvers

The resolvers directory contains the code that will be called when executing each of the query or mutation that are defined in the module's schema.

Each resolver should be in a seperate file and then imported into `resolvers/index.ts` and then exported as part of the default export.

#### Middleware

Middleware are functions that will intercept individual, or groups of resolvers to extend or alter the request or response.

Reference: https://the-guild.dev/graphql/modules/docs/advanced/middlewares

#### Code Generation

Code generation is used to create typescript code for:

Resolvers
Input and Output types for our resolver functions based on the schema definition files listed in in each module's `packages/{module}/src/schema/*.graphql`.

Operations
Types for any graphql operation we perform on external API's e.g. the BigCommerce Storefront graphql API.

SDKs
TBA

#### Adding a new Module

1. Create the basic folder structure of a module listed above
2. In `modules/{module}/src/index.ts` define a default export of the module

```typescript
import { createModule } from 'graphql-modules';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'node:path';
import resolvers from './resolvers';
import middlewares from './middleware'; // optional

const loadGraphQlFiles = () => loadFilesSync(join(__dirname, './schema/*.graphql'));

export default createModule({
  id: 'module-id', // unique module id
  dirname: __dirname,
  typeDefs: loadGraphQlFiles(),
  resolvers,
  middlewares, // optional
});
```

3. Start defining your schema in `modules/{module}/src/schema/*.graphql` files
4. Update `codegent.ts` to generate resolver types for your schema by adding the below to the generates object

```
        'packages/generated/{module}/resolvers/index.ts': {
            schema: "packages/modules/{module}/src/schema/*.graphql",
            plugins: [
                'typescript',
                'typescript-resolvers',
            ]
        },
```

5. Define an alias for your module and generated code in the `tsconfig.json` paths array

```
"@aligent/{module}-resolvers": ["./packages/generated/{module}/resolvers/index"],
"@aligent/{module}-graphql-module": ["./packages/modules/{module}/src/index"],
```

6. Add your module alias to the `package.json` `_moduleAliases` section

```
  "_moduleAliases": {
    "@aligent/{module}-graphql-module": "./packages/modules/{module}/src/index",
    "@aligent/{module}-resolvers": "./packages/generated/{module}/resolvers/index",
  },
```

NOTE: This will no longer required if/when we start using a bundler 7. Start writing resolvers in `modules/{module}/src/resolvers/` and make sure to add them to the `modules/{module}/src/resolvers/index.ts` 8. Register your module in `packages/mesh/application.ts` 9. IF you are making calls to an external GraphQL API define your operations and fragments using `gql` tags (see `packages/modules/bigcommerce/src/apis/graphql/requests/add-products-to-cart.ts` as an example) 10. Update the `codegen.ts` to generate types for your operations

```
        'packages/generated/{module}/operations/index.ts': {
            schema: [
                {
                    'https://example.com/graphql': {
                        headers: {
                            Authorization: `Bearer ${SOME_TOKEN}`,
                        },
                    },
                },
            ],
            plugins: [
                'typescript',
                'typescript-operations',
            ],
            documents: [
                'packages/modules/{module}/src/apis/graphql/requests/*.{graphql,ts}',
                'packages/modules/{module}/src/apis/graphql/fragments/*.{graphql,ts}'
            ],
            config: {
                useImplementingTypes: true,
            },
        },
```

11. Repeat steps 5 and 6 to register your generated code with an alias

## Hosting

There are currently two methods for hosting the mesh.

### Fargate

At this stage Fargate is our preferred hosting option. We run a container with an express server that runs the mesh code (see the [docs](https://the-guild.dev/graphql/mesh/docs/getting-started/deploy-mesh-gateway#mesh-as-an-express-route) for more info)

The pipeline is configured to build a docker image and push to ECR. This will then trigger a deployment from ECS which will use the latest image found in ECR. The infrastructure code can be [here](https://bitbucket.org/aligent/aligent-graphql-mesh-hosting/src/main/).

### Lambda

Unfortunately the performance of Lambda is not great, it can take a while for requests to process which is not ideal for our use case.

The Guild do list this as a hosting option so presumably there is a way to make it work efficiently. The code is still available here as a baseline if we decide to investigate Lambda hosting in the future.

### "uid"/"id"encoding and decoding

The Take Flight PWA being based on Adobe Commerce passes uid arguments to query and mutations. These uid's are usually encoded id's which Adobe Commerce knows
how to consume, but for some properties in Big Commerce the decoded id version is needed. To get this id from the uid use the "atob" util function found in
src/utils/encode-decode.ts. This will decode the uid from e.g. atob("Ng==") = "6". The counter part to this is the btoa method e.g. btoa("6") = "Ng==" which
encodes an id to be an uid
