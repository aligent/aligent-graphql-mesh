import { gql } from 'graphql-tag';
import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';
import { print } from 'graphql/index';
import { cartDetails } from '../fragments/cartDetails';
import { money } from '../fragments/money';

export const checkout = stripIgnoredCharacters(
    print(gql`
        ${cartDetails}
        ${money}

        query checkout($entityId: String) {
            site {
                checkout(entityId: $entityId) {
                    billingAddress {
                        stateOrProvinceCode
                        stateOrProvince
                        postalCode
                        phone
                        lastName
                        firstName
                        entityId
                        email
                        customFields {
                            entityId
                            ... on CheckoutAddressCheckboxesCustomField {
                                __typename
                                valueEntityIds
                                entityId
                            }
                            ... on CheckoutAddressDateCustomField {
                                __typename
                                entityId
                                date {
                                    utc
                                }
                            }
                            ... on CheckoutAddressTextFieldCustomField {
                                __typename
                                text
                                entityId
                            }
                            ... on CheckoutAddressPasswordCustomField {
                                __typename
                                password
                                entityId
                            }
                            ... on CheckoutAddressNumberCustomField {
                                __typename
                                number
                                entityId
                            }
                            ... on CheckoutAddressMultipleChoiceCustomField {
                                __typename
                                valueEntityId
                                entityId
                            }
                        }
                        countryCode
                        company
                        city
                        address2
                        address1
                    }
                    updatedAt {
                        utc
                    }
                    taxes {
                        name
                        amount {
                            ...Money
                        }
                    }
                    taxTotal {
                        ...Money
                    }
                    subtotal {
                        ...Money
                    }
                    shippingCostTotal {
                        ...Money
                    }
                    shippingConsignments {
                        shippingCost {
                            ...Money
                        }
                        selectedShippingOption {
                            type
                            transitTime
                            imageUrl
                            entityId
                            description
                            cost {
                                ...Money
                            }
                        }
                        lineItemIds
                        handlingCost {
                            ...Money
                        }
                        entityId
                        coupons {
                            entityId
                            discountedAmount {
                                ...Money
                            }
                            couponType
                            code
                        }
                        availableShippingOptions {
                            type
                            transitTime
                            imageUrl
                            entityId
                            description
                            cost {
                                ...Money
                            }
                        }
                        address {
                            stateOrProvinceCode
                            stateOrProvince
                            postalCode
                            phone
                            lastName
                            firstName
                            email
                            customFields {
                                ... on CheckoutAddressTextFieldCustomField {
                                    __typename
                                    text
                                    entityId
                                }
                                ... on CheckoutAddressPasswordCustomField {
                                    __typename
                                    password
                                    entityId
                                }
                                ... on CheckoutAddressNumberCustomField {
                                    __typename
                                    number
                                    entityId
                                }
                                ... on CheckoutAddressMultipleChoiceCustomField {
                                    __typename
                                    valueEntityId
                                    entityId
                                }
                                ... on CheckoutAddressDateCustomField {
                                    __typename
                                    entityId
                                    date {
                                        utc
                                    }
                                }
                                ... on CheckoutAddressCheckboxesCustomField {
                                    __typename
                                    valueEntityIds
                                    entityId
                                }
                                entityId
                            }
                            countryCode
                            company
                            city
                            address2
                            address1
                        }
                    }
                    outstandingBalance {
                        ...Money
                    }
                    order {
                        entityId
                    }
                    id
                    handlingCostTotal {
                        ...Money
                    }
                    grandTotal {
                        ...Money
                    }
                    giftWrappingCostTotal {
                        ...Money
                    }
                    entityId
                    customerMessage
                    createdAt {
                        utc
                    }
                    coupons {
                        entityId
                        discountedAmount {
                            ...Money
                        }
                        couponType
                        code
                    }
                    cart {
                        ...CartDetails
                    }
                }
            }
        }
    `)
);
