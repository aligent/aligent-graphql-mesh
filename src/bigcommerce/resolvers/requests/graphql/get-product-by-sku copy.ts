import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getProductBySkuQuery = stripIgnoredCharacters(
    print(gql`
        query getProductBySku($sku: String!) {
            site {
                product(sku: $sku) {
                    entityId
                    id
                    sku
                    name
                    addToCartUrl
                    description
                    variants {
                        edges {
                            node {
                                sku
                            }
                        }
                    }
                    seo {
                        pageTitle
                        metaDescription
                        metaKeywords
                    }
                    images {
                        edges {
                            node {
                                urlOriginal
                                altText
                                isDefault
                            }
                        }
                    }
                    categories {
                        edges {
                            node {
                                name
                                entityId
                                breadcrumbs(depth: 10) {
                                    edges {
                                        node {
                                            name
                                            entityId
                                        }
                                    }
                                }
                            }
                        }
                    }
                    availabilityV2 {
                        status
                    }
                    reviewSummary {
                        numberOfReviews
                        summationOfRatings
                    }
                    reviews {
                        edges {
                            cursor
                            node {
                                entityId
                                author {
                                    name
                                }
                                title
                                text
                                rating
                                createdAt {
                                    utc
                                }
                            }
                        }
                    }
                    prices {
                        price {
                            value
                            currencyCode
                        }
                        priceRange {
                            max {
                                currencyCode
                                value
                            }
                            min {
                                currencyCode
                                value
                            }
                        }
                    }
                    relatedProducts {
                        edges {
                            node {
                                entityId
                                name
                                sku
                                id
                                addToCartUrl
                                prices {
                                    price {
                                        currencyCode
                                        value
                                    }
                                    priceRange {
                                        max {
                                            currencyCode
                                            value
                                        }
                                        min {
                                            currencyCode
                                            value
                                        }
                                    }
                                }
                                images {
                                    edges {
                                        node {
                                            urlOriginal
                                        }
                                    }
                                }
                                categories {
                                    edges {
                                        node {
                                            name
                                            entityId
                                            breadcrumbs(depth: 10) {
                                                edges {
                                                    node {
                                                        name
                                                        entityId
                                                    }
                                                }
                                            }
                                        }
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
