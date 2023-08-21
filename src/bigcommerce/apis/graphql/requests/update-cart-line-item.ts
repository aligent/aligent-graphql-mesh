import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const updateCartLineItemQuery = stripIgnoredCharacters(
    print(gql`
        mutation updateCartLineItem(
            $cartEntityId: String!
            $lineItemEntityId: String!
            $data: UpdateCartLineItemDataInput!
        ) {
            cart {
                updateCartLineItem(
                    input: {
                        cartEntityId: $cartEntityId
                        lineItemEntityId: $lineItemEntityId
                        data: $data
                    }
                ) {
                    cart {
                        entityId
                    }
                }
            }
        }
    `)
);
