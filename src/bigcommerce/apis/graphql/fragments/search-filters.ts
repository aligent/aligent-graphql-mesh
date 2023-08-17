import { gql } from 'graphql-tag';

export const searchFilters = gql`
    fragment SearchFilters on SearchProductFilter {
        name
        ... on BrandSearchFilter {
            displayProductCount
            brands {
                edges {
                    node {
                        entityId
                        name
                        isSelected
                        productCount
                    }
                }
            }
            __typename
        }
        ... on CategorySearchFilter {
            displayProductCount
            categories {
                edges {
                    node {
                        entityId
                        name
                        isSelected
                        productCount
                    }
                }
            }
        }
        ... on OtherSearchFilter {
            displayProductCount
            freeShipping {
                isSelected
                productCount
            }
            isFeatured {
                isSelected
                productCount
            }
            isInStock {
                isSelected
                productCount
            }
            name
            isCollapsedByDefault
        }
        ... on PriceSearchFilter {
            selected {
                minPrice
                maxPrice
            }
            name
            __typename
        }
        ... on ProductAttributeSearchFilter {
            displayProductCount
            filterName
            name
            attributes {
                edges {
                    node {
                        __typename
                        value
                        isSelected
                        productCount
                    }
                }
            }
            __typename
        }
        ... on RatingSearchFilter {
            ratings {
                edges {
                    node {
                        value
                        isSelected
                        productCount
                    }
                }
            }
            __typename
        }
        ... on SearchProductFilter {
            name
            isCollapsedByDefault
        }
    }
`;
