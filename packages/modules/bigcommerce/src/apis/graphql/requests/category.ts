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
            # first, after used for satisfying productDetails fragment
            $first: Int
            $after: String
            # variantAfter used for satisfying variant fragment
            $variantAfter: String
        ) {
            site {
                category(entityId: $entityId) {
                    ...CategoryDetailsWithProducts
                }
            }
        }
    `)
);
