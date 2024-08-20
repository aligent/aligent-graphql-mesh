2024-08-20

---

MI-3: Use SDK for BigCommerce Client Calls

- Custom requester [../packages/utils/src/graphql-sdk/requester-factory.ts](../packages/utils/src/graphql-sdk/requester-factory.ts) in `@aligent/utils`
  - Platform agnostic - only becomes bigcommerce specific in context of a bigcommerce SDK and endpoint
  - Signature matches requirements for GraphQL Codegen SDKs, but is generic enough to serve as a general use client factory
- Use `axios` as basis for SDK calls as we are already using it elsewhere and are comfortable with it as a tool
- Assume custom headers will be deep merged in to default headers passed to `axios.create` when requests are made
- Allow for customisation of error handling but assert that signature must match our current `logAndThrow` function - in particular, ensure error handler also throws (return type `never`)
- Create new axios client inside `useFactory` method of providers - assume this will not unnecessarily create additional instances with `global: true`
- Decided not to add our own GraphQL document validation function in the requester ([the gist used as a model](https://gist.github.com/akozhemiakin/731b0c1e99eb89b01f80f08f9146b6b6) had some)
  - GraphQL CodeGen will likely prevent us from building invalid operations anyway
