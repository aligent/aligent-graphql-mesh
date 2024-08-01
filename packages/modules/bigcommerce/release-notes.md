# BigCommerce GraphQl Module Release Notes

## bigcommerce-graphql-module-1.0.2

### Overview of changes

There are TS errors being thrown by the product data that is using the types from `dist/packages/generated/bigcommerce-operations/`
The BC SF GraphQL API is being used to dynamically generate the TS. This is causing issues since the types should be based off the actual GraphQL operation and not just off the schema for the API.

The orders resolver is being patched to return only orders that are for that customer.

#### Changes:

- Fix for TS errors with product test data

  - Update product test data with videos field

- Orders Resolver
  - Added check of order customer Id with customer Id in customers JWT

#### Pull requests / Tickets

- MICRO-365 TS errors for using BC operations for types (AM-1332)

  - https://aligent.atlassian.net/browse/MICRO-365
  - https://bitbucket.org/aligent/aligent-graphql-mesh/pull-requests/439

- MICRO-369 Security - Customers resolver can fetch any order by Id
  - https://aligent.atlassian.net/browse/MICRO-369
  - https://bitbucket.org/aligent/aligent-graphql-mesh/pull-requests/438

## bigcommerce-graphql-module-1.0.1

### Overview of changes

The products resolvers filtering is being patched.

#### Changes:

- Products resolver
  - Update the price filter → Fix for requesting pages greater than 1
  - Added in name filter
  - Added in relevance filter (Default value if no sort requested)

#### Pull requests / Tickets

- Fix/MICRO-329 products resolver filtering
  - https://bitbucket.org/aligent/aligent-graphql-mesh/pull-requests/427
  - https://aligent.atlassian.net/browse/MICRO-329

## bigcommerce-graphql-module-1.0.0

The release of the first major version.
