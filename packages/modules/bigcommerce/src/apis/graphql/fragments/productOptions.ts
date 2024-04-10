import { gql } from 'graphql-tag';
import { image } from './image';

export const productOptions = gql`
    ${image}

    fragment ProductOptions on ProductOptionConnection {
        edges {
            node {
                entityId
                displayName
                isRequired
                isVariantOption
                ... on MultipleChoiceOption {
                    displayName
                    displayStyle
                    values {
                        edges {
                            node {
                                entityId
                                label
                                isDefault
                                ... on ProductPickListOptionValue {
                                    __typename
                                    productId
                                    label
                                }
                                ... on SwatchOptionValue {
                                    hexColors
                                    imageUrl(width: 36)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
