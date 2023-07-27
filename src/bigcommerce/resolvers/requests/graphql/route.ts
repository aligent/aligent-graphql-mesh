import { gql } from 'graphql-tag';
import { ProductsDetails } from './fragments/productDetails';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getRouteQuery = stripIgnoredCharacters(
    print(gql`
        ${ProductsDetails}

        query getRoute($path: String!) {
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
                            __typename
                            description
                            id
                            entityId
                            name
                            defaultImage {
                                altText
                                urlOriginal
                            }
                            seo {
                                pageTitle
                            }
                            path
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
                                pageTitle
                                metaDescription
                                metaKeywords
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
                                pageTitle
                                metaDescription
                                metaKeywords
                            }
                            __typename
                        }
                    }
                }
            }
        }
    `)
);
