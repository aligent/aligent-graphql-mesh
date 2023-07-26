import { DocumentNode } from 'graphql';
import { gql } from 'graphql-tag';
import { breadcrumbs } from './breadcrumbs';
import { image } from './image';
import { productOptions } from './productOptions';
import { prices } from './prices';

export const ProductsDetails: DocumentNode = gql`
    ${breadcrumbs}
    ${image}
    ${productOptions}
    ${prices}

    fragment ProductDetails on Product {
        __typename
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
                node {
                    ...Image
                }
            }
        }
        categories {
            edges {
                node {
                    name
                    entityId
                    breadcrumbs(depth: 10) {
                        ...Breadcrumbs
                    }
                }
            }
        }
        availabilityV2 {
            status
        }
        reviewSummary {
            numberOfReviews
            summationOfRatings
        }
        prices {
            ...Prices
        }
        productOptions {
            ...ProductOptions
        }
        relatedProducts {
            edges {
                node {
                    entityId
                    name
                    sku
                    addToCartUrl
                    prices {
                        ...Prices
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
                                name
                                entityId
                                breadcrumbs(depth: 10) {
                                    ...Breadcrumbs
                                }
                            }
                        }
                    }
                }
            }
        }
        path
    }
`;
