import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { ProductsDetails } from '../fragments/productDetails';

export const getProductsQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${ProductsDetails}

        query products($ids: [ID!], $includeTax: Boolean) {
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
