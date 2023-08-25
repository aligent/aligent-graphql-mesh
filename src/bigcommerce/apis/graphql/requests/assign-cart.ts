import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const assignCartToCustomerMutation = stripIgnoredCharacters(
    print(gql`
        mutation assignCartToCustomer($input: AssignCartToCustomerInput!) {
            cart {
                assignCartToCustomer(input: $input) {
                    cart {
                        entityId
                    }
                }
            }
        }
    `)
);
