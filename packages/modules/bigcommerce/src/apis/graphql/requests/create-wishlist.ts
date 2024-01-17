import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const createWishlistMutation = stripIgnoredCharacters(
    print(gql`
        mutation createWishlist($input: CreateWishlistInput!) {
            wishlist {
                createWishlist(input: $input) {
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
