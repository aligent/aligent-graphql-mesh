import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const deleteWishlistMutation = stripIgnoredCharacters(
    print(gql`
        mutation deleteWishlists($input: DeleteWishlistsInput!) {
            wishlist {
                deleteWishlists(input: $input) {
                    result
                }
            }
        }
    `)
);
