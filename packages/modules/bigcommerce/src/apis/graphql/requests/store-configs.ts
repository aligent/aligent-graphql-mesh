import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { gql } from 'graphql-tag';

export const storeConfigsQuery = stripIgnoredCharacters(
    print(gql`
        query storeConfigs($pwaConfigNamespace: String!, $storeConfigNamespace: String!) {
            channel {
                entityId
                pwaMetafields: metafields(namespace: $pwaConfigNamespace, first: 20) {
                    edges {
                        node {
                            id
                            key
                            value
                        }
                    }
                }
                storeConfigMetafields: metafields(namespace: $storeConfigNamespace, first: 20) {
                    edges {
                        node {
                            id
                            key
                            value
                        }
                    }
                }
            }
            site {
                settings {
                    storeName
                    channelId
                    checkout {
                        reCaptchaEnabled
                    }
                    contact {
                        address
                        addressType
                        country
                        email
                        phone
                    }
                    display {
                        shortDateFormat
                        extendedDateFormat
                    }
                    inventory {
                        updateStockBehavior
                        stockLevelDisplay
                        showPreOrderStockLevels
                        showOutOfStockMessage
                        productOutOfStockBehavior
                        optionOutOfStockBehavior
                        hideInProductFiltering
                        defaultOutOfStockMessage
                    }
                    logo {
                        title
                        image {
                            urlOriginal
                            url(width: 10, height: 10)
                            isDefault
                            altText
                        }
                    }
                    logoV2 {
                        ... on StoreTextLogo {
                            __typename
                            text
                        }
                        ... on StoreImageLogo {
                            __typename
                            image {
                                urlOriginal
                                url(width: 10, height: 10)
                                isDefault
                                altText
                            }
                        }
                    }
                    reCaptcha {
                        isEnabledOnStorefront
                        siteKey
                    }
                    search {
                        productFilteringEnabled
                    }
                    socialMediaLinks {
                        url
                        name
                    }
                    status
                    statusMessage
                    storeHash
                    storefront {
                        catalog {
                            productComparisonsEnabled
                        }
                    }
                    url {
                        vanityUrl
                        checkoutUrl
                        cdnUrl
                    }
                    tax {
                        plp
                        pdp
                    }
                }
            }
        }
    `)
);
