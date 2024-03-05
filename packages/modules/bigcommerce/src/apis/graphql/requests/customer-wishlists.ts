import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { image } from '../fragments/image';
import { productOptions } from '../fragments/productOptions';
import { prices } from '../fragments/prices';
import { categoryDetails } from '../fragments/categoryDetails';

export const customerWishlists = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${image}
        ${productOptions}
        ${prices}
        ${categoryDetails}

        query customerWishlists {
            customer {
                wishlists(first: 50) {
                    edges {
                        cursor
                        node {
                            entityId
                            isPublic
                            items {
                                edges {
                                    cursor
                                    node {
                                        entityId
                                        productEntityId
                                        variantEntityId
                                        product {
                                            id
                                            entityId
                                            sku
                                            name
                                            brand {
                                                id
                                                name
                                            }
                                            addToCartUrl
                                            description
                                            defaultImage {
                                                ...Image
                                            }
                                            seo {
                                                pageTitle
                                                metaDescription
                                                metaKeywords
                                            }
                                            images {
                                                edges {
                                                    cursor
                                                    node {
                                                        ...Image
                                                    }
                                                }
                                                pageInfo {
                                                    ...PageInfo
                                                }
                                            }
                                            categories {
                                                edges {
                                                    node {
                                                        ...CategoryDetails
                                                    }
                                                    cursor
                                                }
                                            }
                                            reviews {
                                                pageInfo {
                                                    ...PageInfo
                                                }
                                            }
                                            availabilityV2 {
                                                status
                                                description
                                            }
                                            prices {
                                                ...Prices
                                            }
                                            customFields {
                                                edges {
                                                    node {
                                                        name
                                                        value
                                                    }
                                                }
                                            }
                                            metafields(namespace: "custom_attributes", first: 20) {
                                                edges {
                                                    node {
                                                        key
                                                        value
                                                    }
                                                }
                                            }
                                            productOptions {
                                                ...ProductOptions
                                                pageInfo {
                                                    ...PageInfo
                                                }
                                            }
                                            variants {
                                                edges {
                                                    node {
                                                        id
                                                        entityId
                                                        sku
                                                        productOptions {
                                                            edges {
                                                                node {
                                                                    entityId
                                                                    displayName
                                                                    isRequired
                                                                    isVariantOption
                                                                }
                                                            }
                                                        }
                                                        options {
                                                            edges {
                                                                node {
                                                                    entityId
                                                                    displayName
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            path
                                        }
                                    }
                                }
                                pageInfo {
                                    ...PageInfo
                                }
                            }
                            name
                            token
                        }
                    }
                    pageInfo {
                        ...PageInfo
                    }
                }
            }
        }
    `)
);
