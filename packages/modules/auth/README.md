# authentication GraphQl Module

The module provides updated mutations to allow a user to extend their login sessions.

### How to add to client modules

- Go to the application.ts file located in the corresponding `packages/mesh/<client_project>/src/application.ts` file.
- Add the `createAuthModule` from `packages/modules/auth/src/index.ts` to the modules array with any
required configs

```
// e.g. BigCommerce Module

import { createAuthModule } from '@aligent/auth-module';

export default createApplication({
  modules: [
    createBigCommerceModule({
      graphqlEndpoint: process.env.BC_GRAPHQL_API as string,
      authToken: process.env.X_AUTH_TOKEN as string,
      jwtPrivateKey: process.env.JWT_PRIVATE_KEY as string,
      clientSecret: process.env.BC_CLIENT_SECRET as string,
      clientId: process.env.BC_CLIENT_ID as string,
      storeHash: process.env.STORE_HASH as string,
    }),
    createAuthModule({
      dynamoDbRegion: process.env.DYNAMO_DB__REGION as string,
      dynamoDbAccessKeyId: process.env.DYNAMO_DB__ACCESS_KEY_ID as string,
      dynamoDbSecretAccessKey: process.env.DYNAMO_DB__SECRET_ACCESS_KEY as string,
      dynamoDbTableName: process.env.DYNAMO_DB__TABLE_NAME as string,
    }),
  ],
});
```

- Copy env variables from `packages/mesh/auth/.env.template` and paste into the corresponding project .env file.
  -  e.g. For the BigCommerce module you would paste the Auth .env.template vars into `packages/mesh/bigcommerce/.env`

#### Jest testing

Jest has been configured to use UTC time. To avoid DateTime timezone issues between the bitbucket tests
and local tests provide a UTC formatted date time string to the new Date constructor e.g. `new Date('2024-03-01T09:16:00Z'))`.
Additionally the `.jest/setEnvVars.js` file mocks `process.env.TZ = 'UTC';` to help enforce this is our
tests.
