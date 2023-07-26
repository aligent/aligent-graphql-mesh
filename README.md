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
$ cp .env.template src//meshrc/.env
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

7. Uncomment the dev hostname in `serve-config.yml`, and comment out the existing hostname

Please don't commit this change. Unfortunately we need to do this in order to support production builds, while the
environment variable approach isn't working

8. Start the mesh server from project root (see section below: Using the Mesh)

You can now send queries to `https://localhost:4000/graphql` to hit the mesh.

## Environment configuration

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
