const STORE_HASH = process.env.STORE_HASH;
export const DEFAULT_IMAGE = `https://cdn11.bigcommerce.com/s-${STORE_HASH}/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif`;

export const CACHE_KEY__BRANDS = 'brands';
export const CACHE_KEY__CATEGORIES = 'categories';
export const CACHE_KEY__CATEGORIES_REST = 'categories-rest';
export const CACHE_KEY__COUNTRIES = 'countries';
export const CACHE_KEY__CUSTOMER_ATTRIBUTES = 'customer_attributes';
export const CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN = 'customer_impersonation_token';
export const CACHE_KEY__STOREFRONT_FORM_FIELDS = 'storefront_form_fields';
export const CACHE_KEY__STORE_CONFIG = 'store_configs';

export type CacheItemTtlTypes = {
    [CACHE_KEY__BRANDS]: number;
    [CACHE_KEY__CATEGORIES]: number;
    [CACHE_KEY__CATEGORIES_REST]: number;
    [CACHE_KEY__COUNTRIES]: number;
    [CACHE_KEY__CUSTOMER_ATTRIBUTES]: number;
    [CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN]: number;
    [CACHE_KEY__STOREFRONT_FORM_FIELDS]: number;
    [CACHE_KEY__STORE_CONFIG]: number;
    [key: string]: number;
};

/**
 * TTL's defined the control how long query responses are cached for
 */
export const CACHE_ITEMS_TTL = {
    [CACHE_KEY__BRANDS]: 1800000, // 30 minutes
    [CACHE_KEY__CATEGORIES]: 600000, // 10 minutes
    [CACHE_KEY__CATEGORIES_REST]: 1800000, // 30 minutes
    [CACHE_KEY__COUNTRIES]: 1800000, // 30 minutes
    [CACHE_KEY__CUSTOMER_ATTRIBUTES]: 1800000, // 30 minutes
    [CACHE_KEY__CUSTOMER_IMPERSONATION_TOKEN]: 86400000, // 24 hours
    [CACHE_KEY__STOREFRONT_FORM_FIELDS]: 1800000, // 30 minutes
    [CACHE_KEY__STORE_CONFIG]: 1800000, // 30 minutes
} as const satisfies CacheItemTtlTypes;
