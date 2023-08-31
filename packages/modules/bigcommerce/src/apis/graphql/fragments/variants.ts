import { gql } from 'graphql-tag';
import { image } from './image';
import { prices } from './prices';
import { productOptions } from './productOptions';

export const variants = gql`
    ${image}
    ${prices}
    ${productOptions}

    fragment Variants on Variant {
        id
        entityId
        sku
        defaultImage {
            ...Image
        }
        prices(includeTax: $includeTax) {
            ...Prices
        }
        options {
            edges {
                node {
                    entityId
                    displayName
                    values {
                        edges {
                            cursor
                            node {
                                entityId
                                label
                            }
                        }
                    }
                }
            }
        }
        productOptions {
            ...ProductOptions
        }
        inventory {
            isInStock
            aggregated {
                availableToSell
                warningLevel
            }
        }
        isPurchasable
    }
`;
