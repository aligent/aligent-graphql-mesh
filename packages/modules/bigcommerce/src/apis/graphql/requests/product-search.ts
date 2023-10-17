import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { ProductsDetails } from '../fragments/productDetails';
import { searchFilters } from '../fragments/search-filters';

export const getProductsSearchQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${ProductsDetails}
        ${searchFilters}

        query productSearch(
            $after: String
            $filters: SearchProductsFiltersInput!
            $includeTax: Boolean
            $pageSize: Int
        ) {
            site {
                search {
                    searchProducts(filters: $filters) {
                        products(first: $pageSize, after: $after) {
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
                        filters {
                            edges {
                                node {
                                    ...SearchFilters
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
);
