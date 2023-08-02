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
    availabilityV2: {
        status: string;
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
    currencyCode: string;
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
    productCount: number;
}

export interface BcCategory {
    description?: string;
    metaDescription?: string;
    pageTitle?: string;
    products?: {
        collectionInfo: {
            totalItems: number;
        };
    };
    seo?: {
        metaDescription: string;
        pageTitle: string;
    };
}

export interface Category extends BcCategory, BcCategoryTree {}

export interface BcStoreConfigMetafields {
    channel: {
        entityId: number,
        metafields: {
            edges: [
                node: BcMetafieldNode
            ]
        }
    };
}

export interface BcMetafieldNode {
    id: string,
    key: string,
    value: string
}

export interface AcStoreConfig {
    category_url_suffix: string;
    grid_per_page: number;
    //more see mocks/store-config.ts
}
