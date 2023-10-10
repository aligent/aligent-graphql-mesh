import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { categoryDetailsWithProducts } from '../fragments/CategoryDetailsWithProducts';

export const getCategoryQuery = stripIgnoredCharacters(
    print(gql`
        ${categoryDetailsWithProducts}

        query category($entityId: Int!, $first: Int = 24, $includeTax: Boolean) {
            site {
                category(entityId: $entityId) {
                    ...CategoryDetailsWithProducts
                }
            }
        }
    `)
);
