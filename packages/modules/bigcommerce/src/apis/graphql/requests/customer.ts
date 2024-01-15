import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { pageInfo } from '../fragments/pageInfo';
import { image } from '../fragments/image';
import { productOptions } from '../fragments/productOptions';
import { prices } from '../fragments/prices';
import { categoryDetails } from '../fragments/categoryDetails';

export const customer = stripIgnoredCharacters(
    print(gql`
        ${pageInfo}
        ${image}
        ${productOptions}
        ${prices}
        ${categoryDetails}

        query customer {
            customer {
                addressCount
                attributeCount
                company
                customerGroupId
                email
                entityId
                firstName
                lastName
                notes
                phone
                taxExemptCategory
                storeCredit {
                    currencyCode
                    value
                }
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
