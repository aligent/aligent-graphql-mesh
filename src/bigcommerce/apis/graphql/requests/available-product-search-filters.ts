import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getAvailableProductsSearchFiltersQuery = stripIgnoredCharacters(
    print(gql`
        query products($filters: SearchProductsFiltersInput!) {
            site {
                search {
                    searchProducts(filters: $filters) {
                        filters {
                            edges {
                                node {
                                    name
                                    ... on BrandSearchFilter {
                                        __typename
                                    }
                                    ... on CategorySearchFilter {
                                        __typename
                                    }
                                    ... on OtherSearchFilter {
                                        __typename
                                    }
                                    ... on PriceSearchFilter {
                                        __typename
                                    }
                                    ... on ProductAttributeSearchFilter {
                                        __typename
                                    }
                                    ... on RatingSearchFilter {
                                        __typename
                                    }
                                    ... on SearchProductFilter {
                                        __typename
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
);
