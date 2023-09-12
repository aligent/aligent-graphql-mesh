import { gql } from 'graphql-tag';
import { image } from './image';
import { breadcrumbs } from './breadcrumbs';
import { seoDetails } from './seoDetails';
import { pageInfo } from './pageInfo';

export const categoryDetails = gql`
    ${breadcrumbs}
    ${image}
    ${seoDetails}
    ${pageInfo}

    fragment CategoryDetails on Category {
        id
        entityId
        name
        path
        defaultImage {
            ...Image
        }
        description
        breadcrumbs(depth: 5) {
            ...Breadcrumbs
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
        metafields(namespace: "custom_attributes", first: 20) {
            edges {
                node {
                    key
                    value
                }
            }
        }
        products {
            collectionInfo {
                totalItems
            }
            pageInfo {
                ...PageInfo
            }
        }
        seo {
            ...SeoDetails
        }
        defaultProductSort
    }
`;
