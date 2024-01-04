import { gql } from 'graphql-tag';
import { money } from './money';

export const cartDetails = gql`
    ${money}

    fragment CartDetails on Cart {
        amount {
            ...Money
        }
        baseAmount {
            ...Money
        }
        createdAt {
            utc
        }
        currencyCode
        discountedAmount {
            ...Money
        }
        discounts {
            entityId
            discountedAmount {
                ...Money
            }
        }
        entityId
        id
        isTaxIncluded
        lineItems {
            customItems {
                entityId
                extendedListPrice {
                    ...Money
                }
                listPrice {
                    ...Money
                }
                name
                quantity
                sku
            }
            digitalItems {
                brand
                couponAmount {
                    ...Money
                }
                discountedAmount {
                    ...Money
                }
                discounts {
                    discountedAmount {
                        ...Money
                    }
                    entityId
                }
                entityId
                extendedListPrice {
                    ...Money
                }
                extendedSalePrice {
                    ...Money
                }
                imageUrl
                isTaxable
                listPrice {
                    ...Money
                }
                name
                originalPrice {
                    ...Money
                }
                parentEntityId
                productEntityId
                quantity
                salePrice {
                    ...Money
                }
                selectedOptions {
                    entityId
                    name
                    ... on CartSelectedCheckboxOption {
                        __typename
                        valueEntityId
                        value
                        name
                        entityId
                    }
                    ... on CartSelectedDateFieldOption {
                        __typename
                        name
                        entityId
                        date {
                            utc
                        }
                    }
                    ... on CartSelectedFileUploadOption {
                        __typename
                        name
                        fileName
                        entityId
                    }
                    ... on CartSelectedMultiLineTextFieldOption {
                        __typename
                        text
                        name
                        entityId
                    }
                    ... on CartSelectedMultipleChoiceOption {
                        __typename
                        valueEntityId
                        value
                        name
                        entityId
                    }
                    ... on CartSelectedNumberFieldOption {
                        __typename
                        name
                        entityId
                        number
                    }
                    ... on CartSelectedTextFieldOption {
                        __typename
                        entityId
                        name
                        text
                    }
                }
                sku
                url
                variantEntityId
            }
            giftCertificates {
                amount {
                    ...Money
                }
                entityId
                isTaxable
                message
                name
                recipient {
                    name
                    email
                }
                sender {
                    email
                    name
                }
                theme
            }
            physicalItems {
                brand
                couponAmount {
                    ...Money
                }
                discountedAmount {
                    ...Money
                }
                discounts {
                    discountedAmount {
                        ...Money
                    }
                    entityId
                }
                entityId
                extendedListPrice {
                    ...Money
                }
                extendedSalePrice {
                    ...Money
                }
                giftWrapping {
                    amount {
                        ...Money
                    }
                    message
                    name
                }
                imageUrl
                isShippingRequired
                isTaxable
                listPrice {
                    ...Money
                }
                name
                originalPrice {
                    ...Money
                }
                parentEntityId
                productEntityId
                quantity
                salePrice {
                    ...Money
                }
                selectedOptions {
                    name
                    entityId
                    ... on CartSelectedCheckboxOption {
                        __typename
                        valueEntityId
                        value
                        name
                        entityId
                    }
                    ... on CartSelectedDateFieldOption {
                        __typename
                        name
                        entityId
                        date {
                            utc
                        }
                    }
                    ... on CartSelectedFileUploadOption {
                        __typename
                        name
                        fileName
                        entityId
                    }
                    ... on CartSelectedMultiLineTextFieldOption {
                        __typename
                        text
                        name
                        entityId
                    }
                    ... on CartSelectedMultipleChoiceOption {
                        __typename
                        valueEntityId
                        value
                        name
                        entityId
                    }
                    ... on CartSelectedNumberFieldOption {
                        __typename
                        number
                        name
                        entityId
                    }
                    ... on CartSelectedTextFieldOption {
                        __typename
                        text
                        name
                        entityId
                    }
                }
                url
                sku
                variantEntityId
            }
            totalQuantity
        }
        locale
        updatedAt {
            utc
        }
        metafields(namespace: "payment_info") {
            edges {
                node {
                    key
                    value
                }
            }
        }
    }
`;
