# Auth Module Release Notes

## auth-module 1.0.0

### Overview of changes

Removes BigCommerce specific login logic from `generate-customer-token` and instead defines
a stub LoginService class. This service must be extended by other modules and provided via dependency injection.

This module can then be agnostic of the login implementation required for a specific client/platofmr and handle only the logic required for generating, refreshing, caching, and revoking tokens.

#### Tickets

- MI-73: Refactor Authentication GraphQL Module so it isn't tied to the BigCommerce Module
  - https://aligent.atlassian.net/browse/MI-73

## auth-module-0.0.4

### Overview of changes

Moves the "/utils/auth-tokens" file to "/services/auth-tokens" and wraps all functions in a
`AuthTokenService` class which accesses adjustable token expiry times defined when
`createAuthModule` is invoked or falls back to the corresponding times defined in "constants.ts".
The purpose of this is to allow an adjustable window of time for when tokens can be regenerated before
a refresh token has fully expired.

#### Tickets

- MI-17: Update the Auth module so the refresh token regeneration has a 5 minute window
  - https://aligent.atlassian.net/browse/MI-17
- AM-1554: [QA] The user's login session is getting expired (after 15 minutes) during the time when user is still accessing the website
  - https://matsuyaginza.atlassian.net/browse/AM-1554
