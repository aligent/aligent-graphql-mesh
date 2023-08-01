import { DocumentNode } from 'graphql';
import { gql } from 'graphql-tag';
import { breadcrumbs } from './breadcrumbs';
import { image } from './image';
import { pageInfo } from './pageInfo';
import { productOptions } from './productOptions';
import { prices } from './prices';
import { seoDetails } from './seoDetails';
import { categoryDetails } from './categoryDetails';

export const ProductsDetails: DocumentNode = gql`
    ${breadcrumbs}
    ${categoryDetails}
    ${image}
    ${pageInfo}
    ${productOptions}
    ${prices}
    ${seoDetails}

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
            ...SeoDetails
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
        availabilityV2 {
            status
        }
        reviewSummary {
            numberOfReviews
            summationOfRatings
        }
        reviews {
            edges {
                node {
                    entityId
                    author {
                        name
                    }
                    title
                    text
                    rating
                    createdAt {
                        utc
                    }
                }
            }
            pageInfo {
                ...PageInfo
            }
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
                                ...CategoryDetails
                            }
                        }
                    }
                }
            }
        }
        path
    }
`;
