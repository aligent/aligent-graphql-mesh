import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const deleteCartLineItemMutation = stripIgnoredCharacters(
    print(gql`
        mutation addProductsToCart($cartEntityId: String!, $lineItemEntityId: String!) {
            cart {
                deleteCartLineItem(
                    input: { cartEntityId: $cartEntityId, lineItemEntityId: $lineItemEntityId }
                ) {
                    cart {
                        entityId
                    }
                }
            }
        }
    `)
);
