import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { gql } from 'graphql-tag';
import { pageInfo } from '../fragments/pageInfo';

export const getProductsPaginationQuery = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}

        query productsPagination(
            $filters: SearchProductsFiltersInput!
            $first: Int = 50
            $after: String
        ) {
            site {
                search {
                    searchProducts(filters: $filters) {
                        products(first: $first, after: $after) {
                            edges {
                                cursor
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
