import { CurrencyEnum } from '../../meshrc/.mesh';

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
            },
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
            },
        ];
    };
}

interface Money {
    value: number;
    currencyCode: CurrencyEnum;
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
    productCount?: number;
}

export interface BcCategory {
    description?: string;
    metaDescription?: string;
    pageTitle?: string;
    products?: {
        collectionInfo?:
            | {
                  totalItems?: number;
              }
            | undefined
            | null;
    };
    seo?: {
        metaDescription: string;
        pageTitle: string;
    };
}

export interface BcAddress {
    id?: number;
    customer_id: number;
    first_name: string;
    last_name: string;
    city: string;
    country_code: string;
    address1: string;
    state_or_province: string;
    postal_code: string;

    address2?: string;
    phone?: string;
    address_type?: string;
    company?: string;
    form_fields?: Array<{
        name: string;
        value: string | number | string[];
    }>;
}

export interface DecodedCustomerImpersonationToken {
    cid: number;
    cors: string[];
    eat: number;
    iat: number;
    iss: string;
    sid: number;
    sub: string;
    sub_type: number;
    token_type: number;
}

export interface MeshToken {
    bc_customer_id: number;
    iat: number;
    exp: number;
}
export interface Category extends BcCategory, BcCategoryTree {}

export interface BcSubscriber {
    email: string;
    first_name: string;
    last_name: string;
    source: string;
    order_id: number;
    channel_id: number;
    id: number;
    date_modified: string;
    date_created: string;
}
