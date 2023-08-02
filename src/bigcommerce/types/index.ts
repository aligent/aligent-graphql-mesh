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
            },
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
                            },
                        ];
                    };
                };
            },
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
            },
        ];
    };
}

interface Money {
    value: number;
    currencyCode: string;
}

export interface BcCustomer {
    id: number;
    authentication: { force_password_reset: boolean };
    company: string;
    customer_group_id: number;
    email: string;
    first_name: string;
    last_name: string;
    notes: string;
    phone: string;
    registration_ip_address: string;
    tax_exempt_category: string;
    date_created: string;
    date_modified: string;
    accepts_product_review_abandoned_cart_emails: false;
    store_credit_amounts: [{ amount: number }];
    origin_channel_id: number;
    channel_ids: number[] | null;
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
