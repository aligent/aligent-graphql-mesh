import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { image } from '../fragments/image';
import { breadcrumbs } from '../fragments/breadcrumbs';
import { seoDetails } from '../fragments/seoDetails';

export const getCategoryQuery = stripIgnoredCharacters(
    print(gql`
        ${breadcrumbs}
        ${image}
        ${seoDetails}

        query category($entityId: Int!) {
            site {
                category(entityId: $entityId) {
                    id
                    entityId
                    name
                    path
                    defaultImage {
                        ...Image
                    }
                    description
                    breadcrumbs(depth: 3) {
                        ...Breadcrumbs
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                    }
                    products {
                        collectionInfo {
                            totalItems
                        }
                    }
                    seo {
                        ...SeoDetails
                    }
                    defaultProductSort
                }
            }
        }
    `)
);
