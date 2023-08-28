import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const login = stripIgnoredCharacters(
    print(gql`
        mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                customer {
                    entityId
                }
                result
            }
        }
    `)
);
