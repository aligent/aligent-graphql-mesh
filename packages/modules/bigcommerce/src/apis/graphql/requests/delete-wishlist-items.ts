import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const deleteWishlistItemsMutation = stripIgnoredCharacters(
    print(gql`
        mutation deleteWishlistItems($input: DeleteWishlistItemsInput!) {
            wishlist {
                deleteWishlistItems(input: $input) {
                    result {
                        entityId
                        name
                        isPublic
                    }
                }
            }
        }
    `)
);
