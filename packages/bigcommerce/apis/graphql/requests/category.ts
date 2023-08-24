import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { categoryDetails } from '../fragments/categoryDetails';

export const getCategoryQuery = stripIgnoredCharacters(
    print(gql`
        ${categoryDetails}

        query category($entityId: Int!) {
            site {
                category(entityId: $entityId) {
                    ...CategoryDetails
                }
            }
        }
    `)
);
