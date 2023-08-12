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
        path
        prices(includeTax: true) {
            ...Prices
        }
        priceExGst: prices(includeTax: true) {
            ...Prices
        }
        productOptions {
            ...ProductOptions
        }
        variants {
            edges {
                node {
                    ...Variants
                }
            }
        }
    }
`;
