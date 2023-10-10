import { gql } from 'graphql-tag';
import { image } from './image';
import { breadcrumbs } from './breadcrumbs';
import { seoDetails } from './seoDetails';

export const categoryDetails = gql`
    ${breadcrumbs}
    ${image}
    ${seoDetails}

    fragment CategoryDetails on Category {
        __typename
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
        seo {
            ...SeoDetails
        }
        defaultProductSort
    }
`;
