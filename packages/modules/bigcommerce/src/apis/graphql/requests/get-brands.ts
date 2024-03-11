import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const getBrands = stripIgnoredCharacters(
    print(gql`
        query getBrands(
            $brandImageWidth: Int!
            $brandImageHeight: Int
            $before: String
            $after: String
            $first: Int
            $last: Int
            $productEntityIds: [Int!]
            $entityIds: [Int!]
            $metafieldNamespace: String = ""
        ) {
            site {
                brands(
                    before: $before
                    after: $after
                    first: $first
                    last: $last
                    productEntityIds: $productEntityIds
                    entityIds: $entityIds
                ) {
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        startCursor
                        endCursor
                    }
                    edges {
                        node {
                            id
                            entityId
                            name
                            defaultImage {
                                url(width: $brandImageWidth, height: $brandImageHeight)
                                urlOriginal
                                altText
                                isDefault
                            }
                            metafields(namespace: $metafieldNamespace) {
                                edges {
                                    node {
                                        value
                                        key
                                        id
                                        entityId
                                    }
                                }
                            }
                            seo {
                                pageTitle
                                metaDescription
                                metaKeywords
                            }
                            searchKeywords
                            path
                        }
                        cursor
                    }
                }
            }
        }
    `)
);
