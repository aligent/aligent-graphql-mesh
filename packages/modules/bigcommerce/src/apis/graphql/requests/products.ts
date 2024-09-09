import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { ProductsDetails } from '../fragments/productDetails';

export const getProductsQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${ProductsDetails}

        query products(
            $entityIds: [Int!]
            $includeTax: Boolean
            $first: Int
            $after: String
            $variantAfter: String
        ) {
            site {
                products(entityIds: $entityIds, first: $first, after: $after) {
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
        }
    `)
);
