import { gql } from 'graphql-tag';
import { image } from './image';
import { breadcrumbs } from './breadcrumbs';
import { seoDetails } from './seoDetails';
import { categoryDetails } from './categoryDetails';
import { ProductsDetails } from './productDetails';

export const categoryDetailsWithProducts = gql`
    ${breadcrumbs}
    ${image}
    ${seoDetails}
    ${categoryDetails}
    ${ProductsDetails}

    fragment CategoryDetailsWithProducts on Category {
        ...CategoryDetails
        products(first: $first) {
            edges {
                node {
                    ...ProductDetails
                }
            }
            pageInfo {
                ...PageInfo
            }
            collectionInfo {
                totalItems
            }
        }
    }
`;
