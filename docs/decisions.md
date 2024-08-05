2024-08-05

---

MI-2: Use SDK for BigCommerce Client Calls

- Custom requester [../packages/modules/bigcommerce/src/providers/axios-requester.ts](../packages/modules/bigcommerce/src/providers/axios-requester.ts) in `providers` folder for now as not sure where else to put it
- Use axios as basis for SDK calls as we are already using it elsewhere and are comfortable with it as a tool
- Assume custom headers will be deep merged in to default headers passed to `axios.create` when requests are made
- Allow for customisation of error handling but assert that signature must match our current `logAndThrow` function - in particular, ensure error handler also throws (return type `never`)
- Create new axios client inside `useFactory` method of providers - assume this will not unnecessarily create additional instances with `global: true`
