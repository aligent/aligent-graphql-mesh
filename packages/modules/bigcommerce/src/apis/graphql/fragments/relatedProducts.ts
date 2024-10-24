import { gql } from 'graphql-tag';
import { categoryDetails } from './categoryDetails';
import { image } from './image';
import { prices } from './prices';

export const relatedProducts = gql`
    ${image}
    ${prices}
    ${categoryDetails}

    fragment RelatedProducts on RelatedProductsConnection {
        edges {
            node {
                id
                entityId
                name
                sku
                addToCartUrl
                prices(includeTax: $includeTax) {
                    ...Prices
                }
                defaultImage {
                    ...Image
                }
                images {
                    edges {
                        node {
                            ...Image
                        }
                    }
                }
                categories {
                    edges {
                        node {
                            ...CategoryDetails
                        }
                    }
                }
                path
                metafields(namespace: "custom_attributes", first: 20) {
                    edges {
                        node {
                            key
                            value
                        }
                    }
                }
            }
        }
    }
`;
