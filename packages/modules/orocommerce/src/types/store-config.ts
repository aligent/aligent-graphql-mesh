import { Entity, Attributes } from '.';

export interface OroStoreConfig extends Entity {
    type: 'StoreConfig';
    attributes: OroStoreConfigAttrs;
}

export interface OroStoreConfigApiData extends Entity {
    type: string;
    id: string;
    attributes: {
        value: string;
    };
}
interface OroStoreConfigAttrs extends Attributes {
    paypal_express: PaypalExpressAttributes;
    send_friend: SendFriendAttributes;
    store_information: StoreInformationAttributes;
    absolute_footer: string | null;
    adyen_checkout_frontend_region: string | null;
    adyen_client_key_live: string | null;
    adyen_client_key_test: string | null;
    adyen_demo_mode: boolean | null;
    adyen_has_holder_name: boolean | null;
    adyen_holder_name_required: boolean | null;
    adyen_oneclick_card_mode: string | null;
    adyen_return_path_error: string | null;
    adyen_title_renderer: string | null;
    afterpaypay_active: string | null;
    afterpaypay_api_enable_cta_cart_page: string | null;
    afterpaypay_api_enable_cta_mini_cart: string | null;
    afterpaypay_api_enable_cta_product_page: string | null;
    afterpaypay_api_max_order_total: string | null;
    afterpaypay_api_min_order_total: string | null;
    afterpaypay_api_mode: string | null;
    afterpaypay_title: string | null;
    allow_gift_receipt: string | null;
    allow_gift_wrapping_on_order: string | null;
    allow_gift_wrapping_on_order_items: string | null;
    allow_guests_to_write_product_reviews: string | null;
    allow_items: string | null;
    allow_order: string | null;
    allow_printed_card: string | null;
    autocomplete_on_storefront: boolean | null;
    base_currency_code: string | null;
    base_link_url: string | null;
    base_media_url: string | null;
    base_static_url: string | null;
    base_url: string | null;
    braintree_cc_vault_active: string | null;
    captcha_public_key_v2_checkbox: string | null;
    captcha_public_key_v2_invisible: string | null;
    captcha_public_key_v3_invisible: string | null;
    captcha_type_contact: string | null;
    captcha_type_customer_create: string | null;
    captcha_type_customer_edit: string | null;
    captcha_type_customer_forgot_password: string | null;
    captcha_type_customer_login: string | null;
    captcha_type_newsletter: string | null;
    captcha_type_place_order: string | null;
    captcha_type_product_review: string | null;
    captcha_type_sendfriend: string | null;
    captcha_type_wishlist_sharing: string | null;
    cart_gift_wrapping: string | null;
    cart_printed_card: string | null;
    catalog_default_sort_by: string | null;
    category_url_suffix: string | null;
    check_money_order_enable_for_specific_countries: boolean | null;
    check_money_order_enabled: boolean | null;
    check_money_order_make_check_payable_to: string | null;
    check_money_order_max_order_total: string | null;
    check_money_order_min_order_total: string | null;
    check_money_order_new_order_status: string | null;
    check_money_order_payment_from_specific_countries: string | null;
    check_money_order_send_check_to: string | null;
    check_money_order_sort_order: number | null;
    check_money_order_title: string | null;
    cms_home_page: string | null;
    cms_no_cookies: string | null;
    cms_no_route: string | null;
    code: string | null;
    configurable_thumbnail_source: string | null;
    contact_enabled: boolean;
    copyright: string | null;
    default_description: string | null;
    default_display_currency_code: string | null;
    default_keywords: string | null;
    default_title: string | null;
    demonotice: number | null;
    enable_multiple_wishlists: string | null;
    front: string | null;
    googleMapsAPIKey: string | null;
    grid_per_page: number | null;
    grid_per_page_values: string | null;
    head_includes: string | null;
    head_shortcut_icon: string | null;
    header_logo_src: string | null;
    id: string;
    is_default_store: boolean | null;
    is_default_store_group: boolean | null;
    list_mode: string | null;
    list_per_page: number | null;
    list_per_page_values: string | null;
    locale: string | null;
    logo_alt: string | null;
    logo_height: number | null;
    logo_width: number | null;
    magento_reward_general_is_enabled: string | null;
    magento_reward_general_is_enabled_on_front: string | null;
    magento_reward_general_min_points_balance: string | null;
    magento_reward_general_publish_history: string | null;
    magento_reward_points_invitation_customer: string | null;
    magento_reward_points_invitation_customer_limit: string | null;
    magento_reward_points_invitation_order: string | null;
    magento_reward_points_invitation_order_limit: string | null;
    magento_reward_points_newsletter: string | null;
    magento_reward_points_order: string | null;
    magento_reward_points_register: string | null;
    magento_reward_points_review: string | null;
    magento_reward_points_review_limit: string | null;
    magento_wishlist_general_is_enabled: string | null;
    maximum_number_of_wishlists: string | null;
    minimum_password_length: string | null;
    newsletter_enabled: boolean;
    no_route: string | null;
    payment_payflowpro_cc_vault_active: string | null;
    plpAddToCartEnabled: boolean | null;
    plpQtyModifierEnabled: boolean | null;
    printed_card_price: string | null;
    product_reviews_enabled: string | null;
    product_url_suffix: string | null;
    pwa_base_url: string;
    required_character_classes_number: string | null;
    returns_enabled: string;
    root_category_id: number | null;
    root_category_uid: string | null;
    sales_gift_wrapping: string | null;
    sales_printed_card: string | null;
    secure_base_link_url: string | null;
    secure_base_media_url: string | null;
    secure_base_static_url: string | null;
    secure_base_url: string | null;
    show_cms_breadcrumbs: number | null;
    store_code: string | null;
    store_group_code: string | null;
    store_group_name: string | null;
    store_name: string | null;
    store_phone_number: string | null;
    store_sort_order: number | null;
    timezone: string | null;
    title_prefix: string | null;
    title_separator: string | null;
    title_suffix: string | null;
    use_store_in_url: boolean | null;
    website_code: string | null;
    website_id: number | null;
    website_name: string | null;
    weight_unit: string | null;
    welcome: string | null;
    zero_subtotal_enable_for_specific_countries: boolean | null;
    zero_subtotal_enabled: boolean | null;
    zero_subtotal_new_order_status: string | null;
    zero_subtotal_payment_action: string | null;
    zero_subtotal_payment_from_specific_countries: string | null;
    zero_subtotal_sort_order: number | null;
    zero_subtotal_title: string | null;
}

interface PaypalExpressAttributes extends Attributes {
    in_context_config: InContextConfigAttributes;
    billing_agreement_code: string;
    is_context_checkout: string;
    paylater_enabled: string;
    payment_acceptance_mark_href: string;
    payment_acceptance_mark_src: string;
    redirect_url: string;
    sdk_url: string;
}

interface InContextConfigAttributes extends Attributes {
    client_config: ClientConfigAttributes;
    in_context_id: string;
    merchant_id: string;
}

interface ClientConfigAttributes extends Attributes {
    styles: StylesAttributes[];
    button: string;
    environment: string;
    is_guest_checkout_allowed: string;
    is_visible_on_product_page: string;
    locale: string;
    merchant_id: string;
}

interface StylesAttributes extends Attributes {
    label: string;
    value: string;
}

interface SendFriendAttributes extends Attributes {
    enabled_for_customers: boolean;
    enabled_for_guests: boolean;
}

interface StoreInformationAttributes extends Attributes {
    city: string | null;
    country_id: string | null;
    country_name: string | null;
    hours: string | null;
    merchant_vat_number: string | null;
    name: string | null;
    phone: string | null;
    postcode: string | null;
    region_id: string | null;
    region_name: string | null;
    street_line1: string | null;
    street_line2: string | null;
}
