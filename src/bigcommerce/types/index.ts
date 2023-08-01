import { CurrencyEnum } from '../../meshrc/.mesh';

export enum CategoryTreeTypename {
    CategoryTree = 'CategoryTree',
}

export interface BcGraphqlTokenData {
    allowed_cors_origins: [] | string[];
    channel_id: number;
    expires_at: number;
}

export interface GraphQlQuery {
    query: string;
}

export interface BcProduct {
    __typename: 'Product';
    entityId: number;
    id: string;
    sku: string;
    name: string;
    addToCartUrl: string;
    description: string;
    variants: { edges: [node: BcProduct] };
    seo: {
        pageTitle: string;
        metaDescription: string;
        metaKeywords: string;
    };
    images: {
        edges: [
            {
                node: {
                    urlOriginal: string;
                    altText: string;
                    isDefault: boolean;
                };
            }
        ];
    };
    categories: {
        edges: [
            {
                node: {
                    name: string;
                    entityId: number;
                    breadcrumbs: {
                        edges: [
                            {
                                node: {
                                    name: string;
                                    entityId: number;
                                };
                            }
                        ];
                    };
                };
            }
        ];
    };
    reviews: {
        edges: [
            {
                cursor: string;
                node: {
                    entityId: number;
                    author: {
                        name: string;
                    };
                    title: string;
                    text: string;
                    rating: number;
                    createdAt: {
                        utc: string;
                    };
                };
            }
        ];
        pageInfo: {
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor: string;
            endCursor: string;
        };
    };
    availabilityV2: {
        status: 'Available' | 'Preorder' | 'Unavailable';
    };
    reviewSummary: {
        numberOfReviews: number;
        summationOfRatings: number;
    };
    prices: {
        price: Money;
        priceRange: {
            max: Money;
            min: Money;
        };
    };
    relatedProducts: {
        edges: [
            {
                node: BcProduct;
            }
        ];
    };
}

interface Money {
    value: number;
    currencyCode: CurrencyEnum;
}

export interface Country {
    id: number;
    country: string;
    country_iso2: string;
    country_iso3: string;
    states: {
        url: string;
        resource: string;
    };
}

export interface CountryStates {
    id: number;
    state: string;
    state_abbreviation: string;
    country_id: number;
}
export interface BcCategoryTree {
    children?: BcCategoryTree[];
    description?: string;
    entityId: number;
    name: string;
    path: string;
    productCount?: number;
}

export interface BcCategory {
    description?: string;
    metaDescription?: string;
    pageTitle?: string;
    products?: {
        collectionInfo?: {
            totalItems?: number;
        } | undefined | null;
    };
    seo?: {
        metaDescription: string;
        pageTitle: string;
    };
}
