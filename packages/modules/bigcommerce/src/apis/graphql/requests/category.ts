import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { categoryDetailsWithProducts } from '../fragments/CategoryDetailsWithProducts';

export const getCategoryQuery = stripIgnoredCharacters(
    print(gql`
        ${categoryDetailsWithProducts}

        query category(
            $entityId: Int!
            $productsPageSize: Int = 24
            $includeTax: Boolean
            # first, last used for satisfying productDetails fragment
            $first: Int
            $last: Int
        ) {
            site {
                category(entityId: $entityId) {
                    ...CategoryDetailsWithProducts
                }
            }
        }
    `)
);
