# User Guide

## Logging in through the Mesh

Some queries and mutations require headers that authenticate you as a logged in user.
Add this to the headers of your operations ->

```
"authorization" : "bearer {meshToken}"
```

Generate your `MeshToken` using this mutation:

```graphql
mutation generateCustomerToken($email: String!, $password: String!) {
  generateCustomerToken(email: $email, password: $password) {
    token
  }
}
```

If you do not have a customer account, you can generate it through the BC Admin, Create Customer mutation or through a connected Take Flight front end.
