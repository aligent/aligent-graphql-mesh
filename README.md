## GraphQL Mesh Server Setup

1. Clone the repository

```shell
$ git clone git@bitbucket.org:aligent/aligent-graphql-mesh.git
```

2. Duplicate the `.env.template` file as `.env` and fill in the values (see below)

```shell
$ cp .env.template graphql/src/.env
```

3. Add environment configuration to .env file (see section below: Environment configuration)

4. Generate SSL certificate (see section below: Generating an SSL Certificate)

6. Add custom domain, `mesh.local.pwadev` to `/etc/hosts` file

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

8. Build and start the mesh server from project root (see section below: Using the Mesh)


You can now send queries to `https://localhost:4000/graphql` to hit the mesh.

## Environment configuration

The `.env` file needs to know a little bit about the OroCommerce instance it's talking to.
The `ORO_URL` value should be the URL endpoint of the OroCommerce store: `https://{SOME_DOMAIN}`.
For the `ORO_CLIENT_ID` and the `ORO_CLIENT_SECRET` you must creat a Customer User OAuth Application in the OroCommerce Back-Office (Admin), see here: https://doc.oroinc.com/user/back-office/customers/customer-user-oauth-app/#customer-user-oauth-app

### Creating OAuth Oro App

1. Visit https://{SOME_DOMAIN}/admin/oauth2/frontend
2. Click on Create OAuth Application
3. Name the new application following the pattern: `GraphQLMesh-{FirstName}{LastNameInitial}`
4. Select `Password` as the `Grant Type`
5. Click Save and Close
6. Copy the ID and Secret displayed into your local `.env` file

## Generating an SSL Certificate

Our PWA is served locally using an SSL certificate, which allows us to run the app under `https://` in the browser, but
also means that if we have an API gateway that is hosted under `http://`, then communication will be blocked. In order
to allow communication between our PWA and this gateway, we need them both to be served over `https://`. To create
an SSL certificate locally, run the following command.

_Please note: `openssl` is intended to be used from a global scope_

```shell
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt
```

then follow the terminal prompts

## Using the Mesh

This repository is set up for the GraphQL Mesh to be run as a Gateway. This means that all API requests will be sent
through the Mesh service, and then appropriately sent out to corresponding API's.

To use as a Gateway, after running `yarn dev`, update your app to send GraphQL requests to the server URL provided
by the CLI, likely `https://localhost:4000/graphql`.
