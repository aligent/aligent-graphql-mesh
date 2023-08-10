import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { ProductsDetails } from '../fragments/productDetails';

export const getProductsSearchQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${ProductsDetails}

        query products($filters: SearchProductsFiltersInput!) {
            site {
                search {
                    searchProducts(filters: $filters) {
                        products {
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
            }
        }
    `)
);
