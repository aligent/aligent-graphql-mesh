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
                attributes {
                    #Not sure what this will be used for yet
                    #The attributeCount will show how many there are
                    #However you can only get 1 at a time here
                    attribute(entityId: 1) {
                        entityId
                        name
                        value
                    }
                }
                storeCredit {
                    currencyCode
                    value
                }
                wishlists {
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