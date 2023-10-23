import { gql } from 'graphql-tag';

export const searchFilters = gql`
    fragment SearchFilters on SearchProductFilter {
        name
        __typename
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
        }
        ... on SearchProductFilter {
            name
            isCollapsedByDefault
        }
    }
`;
