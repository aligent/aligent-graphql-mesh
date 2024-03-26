import {
    BreadcrumbConnection,
    MetafieldConnection,
    ProductConnection,
} from '@aligent/bigcommerce-operations';
import {
    CartUserInputError,
    CheckoutUserInputError,
    CountryCodeEnum,
    CustomerAddressInput,
    Maybe,
} from '@aligent/bigcommerce-resolvers';
import { ReflectiveInjector } from 'graphql-modules/di';
import Keyv from 'keyv';

export interface BcGraphqlTokenData {
    allowed_cors_origins: [] | string[];
    channel_id: number;
    expires_at: number;
}

export interface GraphQlQuery {
    query: string;
    variables?: { [key: string]: unknown };
}
export interface BcCustomer {
    id?: number;
    addresses?: BcAddressRest[];
    authentication?: {
        force_password_reset: boolean;
        new_password: string;
    };
    company: string;
    customer_group_id?: number;
    email: string;
    first_name: string;
    last_name: string;
    notes: string;
    phone: string;
    registration_ip_address?: string;
    tax_exempt_category?: string;
    date_created?: string;
    date_modified?: string;
    accepts_product_review_abandoned_cart_emails?: false;
    store_credit_amounts?: [{ amount: number }];
    origin_channel_id?: number;
    channel_ids?: number[] | null;
    form_fields?: { name: string; value: string; id: number }[];
}

export interface BcMutationCustomer {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    authentication?: {
        force_password_reset: boolean;
        new_password: string;
    };
    form_fields?: [
        {
            id: number;
            name: string;
            value: string | string[];
        },
    ];
}

export interface BcCreateCustomerMutationInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
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
    id: string;
    metafields?: MetafieldConnection;
    name: string;
    path: string;
    productCount?: number;
    image?: {
        urlOriginal: string;
    };
}

export interface BcCategory {
    __typename?: string;
    description?: string;
    metaDescription?: string;
    metafields?: MetafieldConnection;
    pageTitle?: string;
    products?: ProductConnection;
    seo?: {
        metaDescription: string;
        pageTitle: string;
    };
    breadcrumbs?: BreadcrumbConnection;
    defaultImage?: {
        urlOriginal?: string;
        altText?: string;
    } | null;
}

export interface BcAddress {
    id?: number;
    customer_id: number;
    first_name: string;
    last_name: string;
    city: string;
    country_code: string;
    address1: string;
    state_or_province?: string | null;
    postal_code: string;
    address2?: string;
    phone?: string;
    address_type?: string;
    company?: string;
    form_fields: FormField[] | [];
}

export interface BcOrderAddress {
    first_name: string;
    last_name: string;
    company: string;
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    country_iso2: string;
    phone: string;
    email: string;
    form_fields: FormField[] | [DefaultBillingOrShippingField];
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
    form_fields: FormField[] | [DefaultBillingOrShippingField];
}

export interface FormField {
    name: string;
    value: string | string[] | number | number[];
}

export interface DefaultBillingOrShippingField extends FormField {
    name: 'Default Billing' | 'Default Shipping';
    value: ['Yes'] | [];
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

export interface BcState {
    id: number | null;
    state: string;
    state_abbreviation: string;
    country_id: number;
}

export interface CustomerAddressValidated extends CustomerAddressInput {
    firstname: string;
    lastname: string;
    city: string;
    country_code: CountryCodeEnum;
    street: string[];
    region: {
        region: string;
        region_id: number;
    };
    postcode: string;
}

export interface CustomerAddressUpdateValidated extends CustomerAddressValidated {
    id: number;
}

export interface ValidatePasswordResponse {
    is_valid: boolean;
    customer_id: number;
}

export interface ValidatePasswordRequest {
    email: string;
    password: string;
    channel_id: number;
}

// Extend Global context type see: https://the-guild.dev/graphql/modules/docs/essentials/type-safety#shaping-context-type
/* eslint-disable */
declare global {
    namespace GraphQLModules {
        interface GlobalContext {
            headers: Record<string, string>;
            injector: ReflectiveInjector;
            cache: Keyv;
            request: Request;
        }
    }
}
/* eslint-enable */
export interface BCOrder {
    id: number;
    customer_id: number;
    date_created: string;
    date_modified: string;
    date_shipped: string;
    status_id: number;
    status: string;
    subtotal_ex_tax: string;
    subtotal_inc_tax: string;
    subtotal_tax: string;
    base_shipping_cost: string;
    shipping_cost_ex_tax: string;
    shipping_cost_inc_tax: string;
    shipping_cost_tax: string;
    shipping_cost_tax_class_id: number;
    base_handling_cost: string;
    handling_cost_ex_tax: string;
    handling_cost_inc_tax: string;
    handling_cost_tax: string;
    handling_cost_tax_class_id: number;
    base_wrapping_cost: string;
    wrapping_cost_ex_tax: string;
    wrapping_cost_inc_tax: string;
    wrapping_cost_tax: string;
    wrapping_cost_tax_class_id: number;
    total_ex_tax: string;
    total_inc_tax: string;
    total_tax: string;
    items_total: number;
    items_shipped: number;
    payment_method: string;
    payment_provider_id: string;
    payment_status: string;
    refunded_amount: string;
    order_is_digital: boolean;
    store_credit_amount: string;
    gift_certificate_amount: string;
    ip_address: string;
    ip_address_v6: string;
    geoip_country: string;
    geoip_country_iso2: string;
    currency_id: number;
    currency_code: string;
    currency_exchange_rate: string;
    default_currency_id: number;
    default_currency_code: string;
    staff_notes: string;
    customer_message: string;
    discount_amount: string;
    coupon_discount: string;
    shipping_address_count: number;
    is_deleted: boolean;
    ebay_order_id: string;
    cart_id: string;
    billing_address: BcOrderAddress;
    is_email_opt_in: boolean;
    credit_card_type: string | null;
    order_source: string;
    channel_id: number;
    external_source: string;
    consignments: Resource;
    products: Resource;
    shipping_addresses: Resource;
    coupons: Resource;
    external_id: string | null;
    external_merchant_id: string | null;
    tax_provider_id: string;
    customer_locale: string;
    external_order_id: string;
    store_default_currency_code: string;
    store_default_to_transactional_exchange_rate: string;
    custom_status: string;
}

interface Resource {
    url: string;
    resource: string;
}

export interface BCOrderLineItem {
    id: number;
    order_id: number;
    product_id: number;
    variant_id: number;
    order_pickup_method_id: number;
    order_address_id: number;
    name: string;
    name_customer: string;
    name_merchant: string;
    sku: string;
    upc: string;
    type: string;
    base_price: string;
    price_ex_tax: string;
    price_inc_tax: string;
    price_tax: string;
    base_total: string;
    total_ex_tax: string;
    total_inc_tax: string;
    total_tax: string;
    weight: string;
    width: string;
    height: string;
    depth: string;
    quantity: number;
    base_cost_price: string;
    cost_price_inc_tax: string;
    cost_price_ex_tax: string;
    cost_price_tax: string;
    is_refunded: boolean;
    quantity_refunded: number;
    refund_amount: string;
    return_id: number;
    wrapping_id: number;
    wrapping_name: string;
    base_wrapping_cost: string;
    wrapping_cost_ex_tax: string;
    wrapping_cost_inc_tax: string;
    wrapping_cost_tax: string;
    wrapping_message: string;
    quantity_shipped: number;
    event_name?: number;
    event_date: string;
    fixed_shipping_cost: string;
    ebay_item_id: string;
    ebay_transaction_id: string;
    option_set_id?: number;
    parent_order_product_id?: number;
    is_bundled_product: boolean;
    bin_picking_number: string;
    external_id?: string;
    fulfillment_source: string;
    brand: string;
    gift_certificate_id?: number;
    applied_discounts: Discount[];
    product_options: ProductOption[];
}

interface ProductOption {
    id: number;
    option_id: number;
    order_product_id: number;
    product_option_id: number;
    display_name: string;
    display_name_customer: string;
    display_name_merchant: string;
    display_value: string;
    display_value_customer: string;
    display_value_merchant: string;
    value: string;
    type: string;
    name: string;
    display_style: string;
}

interface Discount {
    id: string;
    amount: string;
    name: string;
    code: null;
    target: string;
}

export interface CartRedirectUrls {
    cart_url: string;
    checkout_url: string;
    embedded_checkout_url: string;
}

export type BCCustomerFormFields = {
    name: string;
    value: string | string[];
    customer_id: number;
}[];

export interface BCConsignment {
    shipping: BCShipping[];
}

export interface BCDiscount {
    id: number;
    coupon_id: number;
    order_id: number;
    code: string;
    amount: string;
    type: number;
    discount: string;
}

export interface BCShipping {
    id: number;
    first_name: string;
    last_name: string;
    company: string;
    street_1: string;
    street_2: string;
    city: string;
    zip: string;
    country: string;
    country_iso2: string;
    state: string;
    email: string;
    phone: string;
    form_fields: FormField[];
    line_items: Resource[];
    items_total: number;
    items_shipped: number;
    shipping_method: string;
    base_cost: number;
    cost_ex_tax: number;
    cost_inc_tax: number;
    cost_tax: number;
    cost_tax_class_id: number;
    base_handling_cost: number;
    handling_cost_ex_tax: number;
    handling_cost_inc_tax: number;
    handling_cost_tax: number;
    handling_cost_tax_class_id: number;
    shipping_zone_id: number;
    shipping_zone_name: string;
    shipping_quotes: Resource;
}

export type SupportedProductTypes = 'SimpleProduct' | 'ConfigurableProduct' | 'BundleProduct';

export type CartUserErrors = Array<Maybe<CartUserInputError & CheckoutUserInputError>>;

export type BcStorefrontFormField = {
    id: string;
    label: string;
};
export interface BcStorefrontFormFields {
    customerAccount: BcStorefrontFormField[];
    shippingAddress: BcStorefrontFormField[];
    billingAddress: BcStorefrontFormField[];
}

export type BcPaymentMethod = {
    code: string;
    name: string;
    test_mode?: boolean;
};

export interface AcCreateCustomerResponse {
    customer: {
        entityId: number;
        email: string;
        firstName: string;
        lastName: string;
    };
    errors: { message: string };
}
