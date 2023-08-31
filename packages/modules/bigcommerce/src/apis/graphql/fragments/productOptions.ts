import { gql } from 'graphql-tag';

export const productOptions = gql`
    fragment ProductOptions on ProductOptionConnection {
        edges {
            node {
                entityId
                displayName
                isRequired
                isVariantOption
                ... on MultipleChoiceOption {
                    displayStyle
                    values {
                        edges {
                            node {
                                entityId
                                label
                                isDefault
                                ... on SwatchOptionValue {
                                    hexColors
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
