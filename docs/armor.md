# GraphQL Armor

[Graphql Armor](https://github.com/Escape-Technologies/graphql-armor) is a plugin for Graphql Yoga designed to add some protections against common attack vectors.

## Configuration

GraphQL Armor is configured on the Yoga server's `EnvelopArmorPlugin` in `packages/mesh/{platform}/src/main.ts` file.

The configuration will need to be reviewed and updated over time as we optimise the frontend and mesh.

### Max Aliases

This limites the number of [aliases](https://graphql.org/learn/queries/#aliases) that can be used in a query or mutation. It is used to help prevent / reduce the affects of a DDOS attack or a heap overflow on the server.

This is currently configured to `70` as the PWA uses up to that amount of aliases in it's queries / mutations.

### Max Depth

This config is used to prevent queries that request deeply nested information to prevent queries that are too large to be handled efficiently that could be used as a DOS attack.

This is currently set to `15000` as that is what the PWA is using by default. However this could be because we have not enabled the `flattenFragments` configuration. This should be reviewed, tested and reduced (if possible) by a mesh and frontend developer.

### Cost Limit

This configuration limits the complexity of a graphql query by assigning objects, scalars and nestied objects a cost. If the cost of the query exceeds the limit then the query is blocked.

The cost limit is currently set to `50000` to get the PWA working however there is a ticket `OTF-277` to review and reduce this. It is likely the `objectCost`, `scalarCost`, and `depthCostFactor` need to be manually configured to appropriate values.

## Links

[Detailed Plugin Configuration](https://escape.tech/graphql-armor/docs/category/plugins)
