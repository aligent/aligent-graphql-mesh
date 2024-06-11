# BigCommerce GraphQl Module Release Notes

## bigcommerce-graphql-module-1.0.1

### Overview of changes

The products resolvers filtering is being patched.

#### Changes:

- Products resolver
  - Update the price filter → Fix for requesting pages greater than 1
  - Added in name filter
  - Added in relevance filter (Default value if no sort requested)

### Pull requests / Tickets

- Fix/MICRO-329 products resolver filtering
  - https://bitbucket.org/aligent/aligent-graphql-mesh/pull-requests/427
  - https://aligent.atlassian.net/browse/MICRO-329

## bigcommerce-graphql-module-1.0.0

The release of the first major version.
