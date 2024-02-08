import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { ProductsDetails } from '../fragments/productDetails';
import { seoDetails } from '../fragments/seoDetails';
import { categoryDetailsWithProducts } from '../fragments/CategoryDetailsWithProducts';

export const getRouteQuery = stripIgnoredCharacters(
    print(gql`
        ${categoryDetailsWithProducts}
        ${ProductsDetails}
        ${seoDetails}

        query getRoute(
            $path: String!
            $productsPageSize: Int = 24
            $includeTax: Boolean
            # first, after used for satisfying productDetails fragment
            $first: Int
            $after: String
        ) {
            site {
                route(path: $path) {
                    node {
                        ... on ContactPage {
                            id
                            path
                            htmlBody
                            plainTextSummary
                            contactFields
                            renderedRegions {
                                regions {
                                    name
                                    html
                                }
                            }
                            entityId
                            parentEntityId
                            name
                            __typename
                        }
                        ... on Product {
                            ...ProductDetails
                        }
                        ... on Category {
                            ...CategoryDetailsWithProducts
                        }
                        ... on Brand {
                            id
                            entityId
                            name
                            defaultImage {
                                urlOriginal
                                altText
                                __typename
                            }
                            seo {
                                ...SeoDetails
                            }
                            path
                            __typename
                        }
                        ... on NormalPage {
                            id
                            path
                            htmlBody
                            plainTextSummary
                            renderedRegions {
                                regions {
                                    name
                                    html
                                }
                            }
                            entityId
                            parentEntityId
                            name
                            isVisibleInNavigation
                            seo {
                                ...SeoDetails
                            }
                            __typename
                        }
                    }
                }
            }
        }
    `)
);
