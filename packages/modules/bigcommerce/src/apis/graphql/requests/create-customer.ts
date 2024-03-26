import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const createCustomerMutation = stripIgnoredCharacters(
    print(gql`
        mutation createCustomer(
            $email: String!
            $firstName: String!
            $lastName: String!
            $password: String!
        ) {
            customer {
                registerCustomer(
                    input: {
                        email: $email
                        firstName: $firstName
                        lastName: $lastName
                        password: $password
                    }
                ) {
                    customer {
                        entityId
                        email
                        firstName
                        lastName
                    }
                    errors {
                        __typename
                        ... on ValidationError {
                            message
                        }
                        ... on CustomerRegistrationError {
                            message
                        }
                        ... on EmailAlreadyInUseError {
                            message
                        }
                        ... on AccountCreationDisabledError {
                            message
                        }
                    }
                }
            }
        }
    `)
);
