export interface GraphQlQuery {
    query: string;
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

export interface BcAddressRest {
    id: number;
    address1: string;
    address2: string;
    address_type: string;
    city: string;
    company: string;
    country: string;
    country_code: string;
    customer_id: number;
    first_name: string;
    last_name: string;
    phone: string;
    postal_code: string;
    state_or_province: string;
    form_fields: FormField[];
}

export interface FormField {
    name: string;
    value: string[] | string;
}

export interface BcSubscriber {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    source: string;
    order_id: number;
    date_created: string;
    date_modified: string;
    channel_id: number;
    consents: string[];
}
