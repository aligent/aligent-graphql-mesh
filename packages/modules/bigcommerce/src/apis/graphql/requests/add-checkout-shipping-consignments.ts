import { stripIgnoredCharacters } from 'graphql';
import { gql } from 'graphql-tag';
import { print } from 'graphql/index';

export const addCheckoutShippingConsignmentsMutation = stripIgnoredCharacters(
    print(gql`
        mutation addCheckoutShippingConsignments($input: AddCheckoutShippingConsignmentsInput!) {
            checkout {
                addCheckoutShippingConsignments(input: $input) {
                    checkout {
                        shippingConsignments {
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
                    }
                }
            }
        }
    `)
);
