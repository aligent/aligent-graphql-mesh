# GraphQL Mesh

Mesh is a framework that helps shape and build an executable GraphQL schema from multiple data sources.

https://the-guild.dev/graphql/mesh

## Development Notes

The skeleton of the code is in the `.meshrc.yml` file. The meshrc file can get very large and hard to maintain. To help with readability, it has been split into multiple files and then referenced using the `!include` syntax which is supported by graphql-mesh. This is not native yaml, so IDE syntax errors have to be ignored.

Each new platform that has been developed should be in it's own directory. E.g. BigCommerce integrations go in `src/bigcommerce`.

### Schemas

The Schemas dir contains all the request and response Json Schema or Json Sample files. These files are used to validate and shape the response that the API sends back.

### Resolvers

The resolvers are mostly used to intercept a request to an endpoint and then do something before continuing.

Each new handler should be nested under the relevant platform directory in a `handlers` directory. E.g. `src/bigcommerce/handlers`.

## Local Dev Setup

1. Clone the repository

```shell
$ git clone git@bitbucket.org:aligent/aligent-graphql-mesh.git
```

2. Duplicate the `.env.template` file as `.env` and fill in the values (see below)

```shell
$ cp .env.template src/meshrc/.env
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

`BC_GRAPHQL_TOKEN`= This is the JWT needed for the BC Graphql API and is not customer specific, used for introspecting BC GraphQL API for codgen.

`customerImpersonationToken` is being generated in the `useExtendContextPlugin` plugin and being set in `context.cache.set('customerImpersonationToken'),`. The token in then fetched from the cache `context.cache.get('customerImpersonationToken')` inside of the resolvers that require it. The customer impersonation token is used along with a header `x-bc-customer-id` to make customer specific requests to BC Graphql API, the alternative is to use the `SHOP_TOKEN` cookie that is returned after making the login mutation to BC Graphql.

e.g.
``const headers = {
        Authorization: `Bearer ${customerImpersonationToken}`,
        'x-bc-customer-id': bcCustomerId,
    };``

`X_AUTH_TOKEN`= This is an token for the BC REST APIS, it can be created in the BC Admin and can have scopes applied, e.g. will only work with the products API. This specific one is full access for the sake of development and will not be used in production.

`STORE_HASH` Unique ID for this store, will be different values for staging and production.

`DEBUG`= This is only used for development and adds more details to the logs via console.

## Generating Tokens

### X_AUTH_TOKEN
Needs to be requested from the BigCommerce store owner. Check with Aligent DevOps if required.

### BC_GRAPHQL_TOKEN
This is a non customer specific token that needs to be generated using the BigComm storefront api-token endpoint.
This requires an existing X_AUTH_TOKEN to be passed in the header.

Docs: https://developer.bigcommerce.com/docs/storefront-auth/tokens

Endpoint: https://api.bigcommerce.com/stores/{{store_hash}}/v3/storefront/api-token
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




#### TODO (NO ENV REQUIRED YET)

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
