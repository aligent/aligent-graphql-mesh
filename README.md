# GraphQL Mesh

Mesh is a framework that helps shape and build an executable GraphQL schema from multiple data sources. This repository contains multiple modules to adapt different platforms to the Aligent PWA.

Current Platforms:

- BigCommerce
- OroCommerce

Reference: https://the-guild.dev/graphql/mesh

## Commands

Formatting:
`yarn nx format:check` and `yarn nx format:write`

Linting
Single Project: `yarn nx lint project-name`
Affected Projects: `yarn nx affected -t lint`
All Projects: `yarn nx run-many -t lint`

Testing
Single Project: `yarn nx test project-name`
Affected Projects: `yarn nx affected -t test`
All Projects: `yarn nx run-many -t test`

Check Types
Single Project: `yarn nx check-types project-name`
Affected Projects: `yarn nx affected -t check-types`
All Projects: `yarn nx run-many -t check-types`

Build
Single Project: `yarn nx build project-name`
Affected Projects: `yarn nx affected -t build`
All Projects: `yarn nx run-many -t build`

Codegen
Single Project: `yarn nx codegen project-name`
Affected Projects: `yarn nx affected -t codegen`
All Projects: `yarn nx run-many -t codegen`

## Local Dev Setup

1. Clone the repository

```shell
$ git clone git@bitbucket.org:aligent/aligent-graphql-mesh.git
```

2. Install yarn

```shell
npm install --global yarn
```

2. Run `yarn install`

3. Duplicate the `.env.template` file as `.env` for the mesh you are working on, fill in the values and place it in the corrosponding mesh directory.

BigCommerce:

```shell
$ cp packages/mesh/bigcommerce/.env.template packages/mesh/bigcommerce/.env
```

OroCommerce:

```shell
$ cp packages/mesh/orocommerce/.env.template packages/mesh/orocommerce/.env
```

4. Navigate to `packages/mesh/.env` and add environment configuration to `.env` file (see section below: Environment configuration)

5. Generate SSL certificates

```shell
yarn nx generate-certs
```

6. Add custom domain, `mesh.local.pwadev` to `/etc/hosts` file

```shell
sudoedit /etc/hosts
```

Adding the entry:

```text
127.0.0.1 mesh.local.pwadev
```

7. Start the mesh server from project root by running `yarn nx serve`
   BigCommerce:

```shell
$  yarn nx serve bigcommerce-mesh
```

OroCommerce:

```shell
$ yarn nx serve orocommerce-mesh
```

You can now send queries to `https://mesh.local.pwadev:4000/graphql` to hit the mesh.

## Environment configuration

`DEBUG` - Is only used for development and adds more details to the logs via console.

### OroCommerce

`ORO_STORE_URL` - OroCommerce Storefront URL, used as a base for all Authentication and API calls

`ORO_CLIENT_ID` - Storefront OAuth application client id

`ORO_CLIENT_SECRET` - Storefront OAuth application client secret

To generate a client id and client secret head here: `${ORO_STORE_URL}/admin/oauth2/frontend` and create a Password grant type application by following these instructions: https://doc.oroinc.com/user/back-office/system/user-management/oauth-app/#oauth-applications

#### Creating OAuth Oro App

- Visit https://{SOME_DOMAIN}/admin/oauth2/frontend
- Click on Create OAuth Application
- Name the new application following the pattern: GraphQLMesh-{FirstName}{LastNameInitial}
- Select Password as the Grant Type
- Click Save and Close
- Copy the ID and Secret displayed into your local .env file

### BigCommerce

The `X_AUTH_TOKEN`, `BC_CLIENT_SECRET` and `BC_CLIENT_ID` are all created at the same time by Devops or Store owner in the BC Admin, from the BC Admin in settings -> Store-level API accounts -> Create API account. You may not be able to see this option to `Create API Account` and will need to request these details from a shared folder in Lastpass.

`X_AUTH_TOKEN` - Is called `ACCESS TOKEN` in the BC Admin, this token used for the BC REST APIS and has different scopes applied, e.g. will only work with the products API.

`BC_CLIENT_SECRET` and `BC_CLIENT_ID` - These are used to create a BC customer login JWT created in the [createCustomerLoginToken()](packages/modules/bigcommerce/src/utils/tokens.ts) function. This JWT is used for redirecting to the checkout whilst staying logged in.

`BC_GRAPHQL_API` - Is used by codegen to automatically create types from the BigCommerce GraphQL Store Front API. e.g. `https://client-sandbox.mybigcommerce.com/graphql` this URL is accessible in BC admin => Settings -> API -> Storefront API Playground

`STORE_HASH` - Unique ID for each BigCommerce instance and can be found in the URL of the Admin Dashboard e.g. `linhpy40az` in https://store-linhpy40az.mybigcommerce.com/manage/dashboard this value will differ for staging and production.

`BC_GRAPHQL_TOKEN` - Is a JWT allowing access the BC Storefront Graphql API. This repository uses it for generating types with codegen.

Docs: https://developer.bigcommerce.com/docs/storefront-auth/tokens

Use the following Curl to generate a new token make sure to replace `STORE_HASH` and `X-AUTH-TOKEN` values.

```json
curl --location 'https://api.bigcommerce.com/stores/{STORE_HASH}/v3/storefront/api-token' \
--header 'X-Auth-Token: {X-AUTH-TOKEN}' \
--header 'Content-Type: application/json' \
--data '{
  "allowed_cors_origins": [],
  "channel_id": 1,
  "expires_at": 1985635176
}'
```

`JWT_PRIVATE_KEY` - This randomly generated key is used for signing the `MeshToken` that is created by [generateMeshToken()](packages/modules/bigcommerce/src/utils/tokens.ts). The MeshToken is then used to authorise actions for a logged in user.

For local development this value can be any string.

`HIVE_TOKEN` - **NOT REQUIRED FOR LOCAL DEV** - we primarily use the Hive to monitor usage and performance across the various GraphQL queries. The Hive token is used to connect the Mesh to the Hive and send these analytics. It's also used in the pipeline to publish and verify newly generated schemas.

To generate this token you'll need to login to your [Hive instance](https://app.graphql-hive.com) and go to Settings -> Registry Access Tokens -> Create new registry token. Select the preset `GraphQL Operations Reporting` and copy the token. You can read more about the Hive [here](https://the-guild.dev/graphql/hive/docs).

#### Customer Impersonation token

`customerImpersonationToken` is being generated in the `useExtendContextPlugin` plugin and being set in `context.cache.set('customerImpersonationToken'),`. The token in then fetched from the cache `context.cache.get('customerImpersonationToken')` inside of the resolvers that require it. The customer impersonation token is used along with a header `x-bc-customer-id` to make customer specific requests to BC Graphql API, the alternative is to use the `SHOP_TOKEN` cookie that is returned after making the login mutation to BC Graphql.

e.g.

```json
{
    "Authorization": `Bearer ${customerImpersonationToken}`,
    "x-bc-customer-id": bcCustomerId,
}
```

#### Customer Login Token

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

## Using the Mesh

This repository is set up for the GraphQL Mesh to be run as a Gateway. This means that all API requests will be sent
through the Mesh service, and then appropriately sent out to corresponding API's.

To use as a Gateway, after running `yarn nx serve bigcommerce-mesh` or `yarn nx serve orocommerce-mesh`, update your app to send GraphQL requests to the server URL provided
by the CLI, likely `https://mesh.local.pwadev:4000/graphql`.

For further details [User Guide](docs/user-guide.md)

## Tests

Tests can be ran with `yarn nx affected:test`, this will execute tests affected by any changes you have made.

## Development Notes

There are two styles of "mesh" in this repository, the original BigCommerce Mesh which is using GraphQL Mesh and can be found at `packages/mesh/bigcommerce` and a newer style OroCommerce Mesh using Graphql Yoga that can be found at `packages/mesh/orocommerce`.

For the original BC Mesh the skeleton of the code is in the `.meshrc.yml` file. The meshrc file can get very large and hard to maintain. To help with readability, it has been split into multiple files and then referenced using the `!include` syntax which is supported by graphql-mesh. This is not native yaml, so IDE syntax errors have to be ignored.

Each new platform that has been developed should be in it's own module and it's own mesh. E.g. BigCommerce integrations go in `packages/modules/bigcommerce`.

### Modules

GraphQL Modules are reusable extendable of schema, resolvers and middleware that are used to make it easier to scale and reuse GraphQL code across different servers.

#### Basic Structure of a Module

```
packages/modules/{module}/src
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

#### Adding a new module

1. Copy an existing module e.g. `cp packages/modules/orocommerce packages/modules/<new module>`
2. Remove exisiting platform specific code and rename references to orocommerce to your new modules name
3. Copy an existing resolvers codegen project e.g. `cp packages/generated/orocommerce-resolvers packages/generated/<new module>-resolvers`
4. Update all references to orocommerce
5. Update the tsconfig.base.json to include the two new packages alias in the paths section

In the future we will hopefully have a generator https://nx.dev/extending-nx/recipes/local-generators to do this

## Hosting

There are currently two methods for hosting the mesh.

### Fargate

At this stage Fargate is our preferred hosting option. We run a container with an express server that runs the mesh code (see the [docs](https://the-guild.dev/graphql/mesh/docs/getting-started/deploy-mesh-gateway#mesh-as-an-express-route) for more info)

The pipeline is configured to build a docker image and push to ECR. This will then trigger a deployment from ECS which will use the latest image found in ECR. The infrastructure code can be [here](https://bitbucket.org/aligent/aligent-graphql-mesh-hosting/src/main/).

### "uid"/"id"encoding and decoding

The Take Flight PWA being based on Adobe Commerce passes uid arguments to query and mutations. These uid's are usually encoded id's which Adobe Commerce knows
how to consume, but for some properties in Big Commerce the decoded id version is needed. To get this id from the uid use the "atob" util function found in
src/utils/encode-decode.ts. This will decode the uid from e.g. atob("Ng==") = "6". The counter part to this is the btoa method e.g. btoa("6") = "Ng==" which
encodes an id to be an uid

// TODO: Generate `BC_GRAPHQL_TOKEN` this at build time \
