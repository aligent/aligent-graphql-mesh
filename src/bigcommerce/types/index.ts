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

export interface BcCategoryTree {
    name: string;
    description: string;
    entityId: number;
    path: string;
    productCount: number;
    children?: BcCategoryTree[];
}

export interface AcCategory {
    items: AcCategoryItem[];
}

export interface AcCategoryItem {
    breadcrumbs?: null;
    children?: AcCategoryItem[];
    children_count?: string;
    description?: string;
    id?: number;
    include_in_menu?: number;
    meta_description?: string;
    name?: string;
    position?: number;
    product_count?: number;
    uid?: string;
    url_path?: string;
    url_suffix?: string;
    __typename?: CategoryTreeTypename;
}
