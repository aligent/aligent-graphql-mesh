import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const updateWishlistMutation = stripIgnoredCharacters(
    print(gql`
        mutation updateWishlist($input: UpdateWishlistInput!) {
            wishlist {
                updateWishlist(input: $input) {
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
