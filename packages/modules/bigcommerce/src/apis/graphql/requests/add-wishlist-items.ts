import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const addWishlistItemsMutation = stripIgnoredCharacters(
    print(gql`
        mutation addWishlistItems($input: AddWishlistItemsInput!) {
            wishlist {
                addWishlistItems(input: $input) {
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
