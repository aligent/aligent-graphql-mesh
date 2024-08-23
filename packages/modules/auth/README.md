# authentication GraphQl Module

A module allowing users to extend their authenticated login session without the need to reenter
and email or password.

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
      dynamoDbAuthTable: process.env.DYNAMO_DB_AUTH_TABLE as string,
      extendRefreshTokenExpiry: 43200,                                // The time in minutes an extended user session should end in - optional
      nonExtendRefreshTokenExpiry: 15,                                // The time in minutes a non-extended user session should end in - optional
      accessTokenExpiry: 10,                                          // The time in minutes an access token is valid for - optional
    }),
  ],
});
```

- Copy env variables from `packages/mesh/auth/.env.template` and paste into the corresponding project .env file.
  - e.g. For the BigCommerce module you would paste the Auth .env.template vars into `packages/mesh/bigcommerce/.env`
  - Note: "AWS_ACCESS_KEY_ID" and "AWS_SECRET_ACCESS_KEY" env vars need to be defined in the .env file. AWS do the
    rest of the work to ensure the var values get to AWS sdk. "credentials" variables get picked up by the AWS skd
    performing process.env behind the scenes and why they don't directly need to be passed along.

#### Auth Query/Mutations

- `generateCustomerToken`
  - Called to verify a users credentials and if valid returns authentication tokens allowing access
    to customer specific apis.
    This mutation takes in 3 arguments: `email`, `password` and `remember_me` where setting
    `remember_me` to `true` tells our logic to keep track of an extended refresh token
    expiry time (ttl). The `refresh_token` gets stored in the dynamo database, so it can be
    compared against when validating a user sessions.
- `refreshCustomerToken`
  - Intended to be called after a user session has expired due to a users `access_token` becoming
    invalid. This mutation is responsible for determining if new tokens get generated for a user to
    extended their current session, or return an error informing that the session is over.
    When extending a users session, both access and refresh tokens are regenerated and the old
    refresh_token is remove from the Dynamo database. This is done as it's more secure to generate
    a new `refresh_token` than using the same one for the entirety of the extended user session.
    A newly generated `refresh_token` gets stored in the dynamo database to keep track of the next
    time the `refreshCustomerToken` mutation gets called.
- `revokeCustomerToken`
  - This request removes the users `refresh_token` from the dynamo DB database. Performing this step
    means a `refresh_token` can't be used to regenerate new access and refresh tokens when an
    invalid `refresh_token` is passed to the `refreshCustomerToken` mutation.
- `updateUserAuth`
  - Directly talks to the Dynamo DB "authentication-table" via the mesh to add an Item. This
    is only available for local development environments and can't be available to the public.
- `getUserAuth`
  - Directly talks to the Dynamo DB "authentication-table" via the mesh to get an Item. This
    is only available for local development environments and can't be available to the public.
- `removeUserAuth`
  - Directly talks to the Dynamo DB "authentication-table" via the mesh to remove an Item. This
    is only available for local development environments and can't be available to the public.

#### Jest testing

Jest has been configured to use UTC time. To avoid DateTime timezone issues between the bitbucket tests
and local tests provide a UTC formatted date time string to the new Date constructor e.g. `new Date('2024-03-01T09:16:00Z'))`.
Additionally the `.jest/setEnvVars.js` file mocks `process.env.TZ = 'UTC';` to help enforce this is our
tests.

#### Validation states

When verifying the access and refresh tokens there are four states we work by. You can find them
in `packages/modules/auth/src/constants.ts`. These states are:

- `ACCESS_VALID_REFRESH_VALID`
  - Both access and refresh token are invalid. This could be due to the tokens being manipulated
    or just expiring in general
- `ACCESS_INVALID_REFRESH_VALID`
  - The access token is invalid and the refresh token is valid. Same as "ACCESS_VALID_REFRESH_VALID"
    the access token can be invalid due to being manipulated or expiring. The refresh token hasn't
    been manipulated or expired.
- `ACCESS_VALID_REFRESH_INVALID`
  - The refresh token is invalid and the access token is valid. Same as "ACCESS_VALID_REFRESH_VALID"
    the refresh token can be invalid due to being manipulated or expiring. The access token hasn't
    been manipulated or expired.
- `ACCESS_INVALID_REFRESH_INVALID`
  - Both access and refresh token is valid. These haven't expired or been manipulated.
