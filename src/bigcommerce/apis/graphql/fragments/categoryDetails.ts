import { gql } from 'graphql-tag';
import { image } from './image';
import { breadcrumbs } from './breadcrumbs';
import { seoDetails } from './seoDetails';
import { pageInfo } from './pagInfo';

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
