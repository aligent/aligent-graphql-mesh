import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const createCartMutation = stripIgnoredCharacters(
    print(gql`
        mutation createCart($lineItems: [CartLineItemInput!]) {
            cart {
                createCart(input: { lineItems: $lineItems }) {
                    cart {
                        entityId
                    }
                }
            }
        }
    `)
);
