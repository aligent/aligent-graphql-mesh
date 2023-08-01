import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from './fragments/pageInfo';
import { ProductsDetails } from './fragments/productDetails';

export const getProductBySkuQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${ProductsDetails}

        query getProductBySku($ids: [ID!]) {
            site {
                products(ids: $ids) {
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
