/**
 * "pwa_config" named spaced metafield properties expected to be booleans
 */
export const booleanStoreConfigProperties = [
    'adyen_demo_mode',
    'adyen_has_holder_name',
    'adyen_holder_name_required',
    'autocomplete_on_storefront',
    'check_money_order_enable_for_specific_countries',
    'check_money_order_enabled',
    'contact_enabled',
    'newsletter_enabled',
    'returns_enabled',
    'use_store_in_url',
    'zero_subtotal_enable_for_specific_countries',
];

/**
 * "pwa_config" named spaced metafield properties expected to be integers
 */
export const integerStoreConfigProperties = [
    'check_money_order_sort_order',
    'demonotice',
    'grid_per_page',
    'list_per_page',
    'show_cms_breadcrumbs',
    'store_sort_order',
];

/**
 * "pwa_config" named spaced metafield properties expected to be JSON strings
 */
export const jsonStringStoreConfigProperties = [
    'configurable_thumbnail_source',
    'category_fixed_product_tax_display_setting',
    'product_fixed_product_tax_display_setting',
    'sales_fixed_product_tax_display_setting',
    'send_friend',
    'paypal_express',
    'StoreInformation',
];

export const STORE_CONFIG__GRID_PER_PAGE = 24;
