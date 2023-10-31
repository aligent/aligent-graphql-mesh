import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getDeleteCartQuery = stripIgnoredCharacters(
    print(gql`
        mutation deleteCart($cartEntityId: String!) {
            cart {
                deleteCart(input: { cartEntityId: $cartEntityId }) {
                    deletedCartEntityId
                }
            }
        }
    `)
);
