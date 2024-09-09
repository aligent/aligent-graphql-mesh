import { DocumentNode } from 'graphql';
import { gql } from 'graphql-tag';
import { breadcrumbs } from './breadcrumbs';
import { image } from './image';
import { pageInfo } from './pageInfo';
import { productOptions } from './productOptions';
import { prices } from './prices';
import { seoDetails } from './seoDetails';
import { categoryDetails } from './categoryDetails';
import { variants } from './variants';

export const ProductsDetails: DocumentNode = gql`
    ${breadcrumbs}
    ${categoryDetails}
    ${image}
    ${pageInfo}
    ${productOptions}
    ${prices}
    ${seoDetails}
    ${variants}

    fragment ProductDetails on Product {
        __typename
        brand {
            id
            name
        }
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
        inventory {
            hasVariantInventory
            isInStock
            aggregated {
                availableToSell
                warningLevel
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
            ... on ProductPreOrder {
                message
                description
                status
                willBeReleasedAt {
                    utc
                }
            }
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
        customFields {
            edges {
                node {
                    name
                    value
                }
            }
        }
        metafields(namespace: "custom_attributes", first: 20) {
            edges {
                node {
                    key
                    value
                }
            }
        }
        path
        prices(includeTax: $includeTax) {
            ...Prices
        }
        productOptions {
            ...ProductOptions
        }
        variants(first: $first, after: $variantAfter) {
            edges {
                node {
                    ...Variants
                }
            }
            pageInfo {
                ...PageInfo
            }
        }
        warranty
        weight {
            value
            unit
        }
    }
`;
