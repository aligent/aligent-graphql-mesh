import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';

export const getProductBySkuQuery = stripIgnoredCharacters(
    print(gql`
        query getProductBySku($sku: String!) {
            site {
                product(sku: $sku) {
                    addToCartUrl
                    addToWishlistUrl
                    availability
                    availabilityDescription
                    availabilityV2 {
                        description
                        status
                    }
                    condition
                    description
                    entityId
                    id
                    gtin
                    maxPurchaseQuantity
                    minPurchaseQuantity
                    mpn
                    name
                    path
                    showCartAction
                    sku
                    type
                    upc
                    warranty
                    priceRanges {
                        priceRange {
                            max {
                                currencyCode
                                formatted
                                value
                            }
                            min {
                                currencyCode
                                formatted
                                value
                            }
                        }
                        retailPriceRange {
                            max {
                                currencyCode
                                formatted
                                value
                            }
                            min {
                                currencyCode
                                formatted
                                value
                            }
                        }
                    }
                    prices {
                        basePrice {
                            currencyCode
                            formatted
                            value
                        }
                        bulkPricing {
                            maximumQuantity
                            minimumQuantity
                        }
                        mapPrice {
                            currencyCode
                            formatted
                            value
                        }
                        price {
                            currencyCode
                            formatted
                            value
                        }
                        priceRange {
                            max {
                                currencyCode
                                formatted
                                value
                            }
                            min {
                                currencyCode
                                formatted
                                value
                            }
                        }
                        retailPrice {
                            currencyCode
                            formatted
                            value
                        }
                        retailPriceRange {
                            max {
                                currencyCode
                                formatted
                                value
                            }
                            min {
                                currencyCode
                                formatted
                                value
                            }
                        }
                        salePrice {
                            currencyCode
                            formatted
                            value
                        }
                        saved {
                            currencyCode
                            formatted
                            value
                        }
                    }
                }
            }
        }
    `)
);
