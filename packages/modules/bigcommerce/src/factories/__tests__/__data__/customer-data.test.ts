import { Customer, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { BcMutationCustomer, ValidatePasswordRequest } from '../../../types';
import { bcWishListItems } from '../../helpers/__tests__/__data__/transform-customer-wishlist-data';

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithName: Customer = {
    firstname: 'example',
    lastname: 'customer',
};

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithEmail: Customer = {
    email: 'customer@example.com',
};

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithRemoteAssistance: Customer = {
    allow_remote_shopping_assistance: true,
};

// @ts-expect-error: ignore bad non-nullable fields
export const acCustomerWithNoRemoteAssistance: Customer = {
    allow_remote_shopping_assistance: false,
};

export const acCustomerOutputWithEmail: CustomerOutput = {
    customer: {
        email: 'customer@example.com',
        is_subscribed: false,
        //Mandatory fields required by customer type
        allow_remote_shopping_assistance: false,
        wishlists: [],
        wishlist: {
            visibility: 'PUBLIC',
        },
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
    },
};

export const acCustomerOutputWithName: CustomerOutput = {
    customer: {
        firstname: 'example',
        lastname: 'customer',
        is_subscribed: false,

        //Mandatory fields required by customer type
        allow_remote_shopping_assistance: false,
        wishlists: [],
        wishlist: {
            visibility: 'PUBLIC',
        },
        reviews: {
            items: [],
            page_info: {
                current_page: null,
                page_size: null,
                total_pages: null,
            },
        },
    },
};

export const bcCreateCustomerInputData: BcMutationCustomer = {
    email: 'example@example.com',
    first_name: 'example',
    last_name: 'customer',
    authentication: {
        force_password_reset: false,
        new_password: 'password',
    },
};

export const bcMutationCustomerWithName: BcMutationCustomer = {
    id: 1,
    first_name: 'example',
    last_name: 'customer',
};

export const bcMutationCustomerWithEmail: BcMutationCustomer = {
    id: 1,
    email: 'customer@example.com',
};

export const bcCustomerForPasswordChange: BcMutationCustomer = {
    id: 1,
    authentication: {
        force_password_reset: false,
        new_password: 'Password1',
    },
};

export const bcValidatePasswordRequest: ValidatePasswordRequest = {
    email: 'example@example.com',
    password: 'Password1',
    channel_id: 1,
};

export const bcMutationCustomerWithRemoteAssistanceSetToTrue: BcMutationCustomer = {
    id: 1,
    form_fields: [
        {
            id: 1,
            name: 'allow_remote_shopping_assistance',
            value: ['Yes'],
        },
    ],
};

export const bcMutationCustomerWithRemoteAssistanceSetToFalse: BcMutationCustomer = {
    id: 1,
    form_fields: [
        {
            id: 1,
            name: 'allow_remote_shopping_assistance',
            value: [],
        },
    ],
};

export const bcCustomer = {
    attributes: { attribute: { entityId: 1, name: 'name' } },
    addressCount: 1,
    attributeCount: 3,
    company: '',
    customerGroupId: 4,
    email: 'jack.mesh@aligent.com.au',
    entityId: 18,
    firstName: 'jack',
    lastName: 'mesh',
    notes: '',
    phone: '0432471111',
    taxExemptCategory: '',
    storeCredit: [{ currencyCode: 'AUD', value: 0 }],
    wishlists: {
        edges: [
            {
                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                node: {
                    entityId: 5,
                    isPublic: true,
                    items: bcWishListItems,
                    name: 'sample-list',
                    token: 'bf1ed4dc-1724-48a6-92a3-bef2c1dd5868',
                },
            },
        ],
        pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        },
    },
};

export const bcAddresses = [
    {
        id: 46,
        address1: '212 pirie st',
        address2: '',
        address_type: 'residential',
        city: 'Adelaide',
        company: '',
        country: 'Australia',
        country_code: 'AU',
        customer_id: 18,
        first_name: 'jack',
        last_name: 'mesh',
        phone: '0432471111',
        postal_code: '5000',
        state_or_province: 'South Australia',
        form_fields: [
            {
                name: 'Authority To Leave',
                value: ['Yes - Allow my order to be delivered without requiring a signature'],
            },
            { name: 'Default Billing', value: ['Yes'] },
        ],
    },
];

export const acCustomer = {
    addresses: [
        {
            id: 46,
            firstname: 'jack',
            lastname: 'mesh',
            company: '',
            city: 'Adelaide',
            street: ['212 pirie st'],
            region: { region: 'South Australia', region_code: '', region_id: null },
            postcode: '5000',
            country_code: 'AU',
            telephone: '0432471111',
            default_billing: true,
            default_shipping: false,
        },
    ],
    email: 'jack.mesh@aligent.com.au',
    firstname: 'jack',
    lastname: 'mesh',
    is_subscribed: true,
    allow_remote_shopping_assistance: false,
    wishlists: [
        {
            id: '5',
            name: 'sample-list',
            visibility: 'PUBLIC',
            items_v2: {
                items: [
                    {
                        __typename: 'SimpleWishlistItem',
                        id: '6',
                        quantity: 1,
                        added_at: 'null',
                        customizable_options: [],
                        description: '',
                        product: {
                            categories: [
                                {
                                    __typename: 'CategoryTree',
                                    breadcrumbs: [],
                                    canonical_url: 'shop-all',
                                    children: [],
                                    children_count: '0',
                                    description: '',
                                    id: 23,
                                    image: undefined,
                                    include_in_menu: 1,
                                    level: 1,
                                    meta_description: '',
                                    meta_title: '',
                                    name: 'Shop All',
                                    path: '0/23',
                                    position: 0,
                                    product_count: 25,
                                    products: {
                                        aggregations: null,
                                        items: null,
                                        page_info: {
                                            current_page: 1,
                                            page_size: 24,
                                            total_pages: 2,
                                        },
                                        total_count: 25,
                                    },
                                    redirect_code: 0,
                                    staged: false,
                                    uid: 'MjM=',
                                    url_path: 'shop-all',
                                    url_suffix: '',
                                },
                                {
                                    __typename: 'CategoryTree',
                                    breadcrumbs: [],
                                    canonical_url: 'women',
                                    children: [],
                                    children_count: '0',
                                    description: '',
                                    id: 58,
                                    image: undefined,
                                    include_in_menu: 1,
                                    level: 1,
                                    meta_description: 'This is the "Women" meta_description',
                                    meta_title: 'Women',
                                    name: 'Women',
                                    path: '0/58',
                                    position: 0,
                                    product_count: 1,
                                    products: {
                                        aggregations: null,
                                        items: null,
                                        page_info: {
                                            current_page: 1,
                                            page_size: 24,
                                            total_pages: 1,
                                        },
                                        total_count: 1,
                                    },
                                    redirect_code: 0,
                                    staged: false,
                                    uid: 'NTg=',
                                    url_path: 'women',
                                    url_suffix: '',
                                },
                                {
                                    __typename: 'CategoryTree',
                                    breadcrumbs: [
                                        {
                                            category_id: 58,
                                            category_level: 1,
                                            category_name: 'Women',
                                            category_uid: 'NTg=',
                                            category_url_key: 'women',
                                            category_url_path: 'women',
                                        },
                                    ],
                                    canonical_url: 'women/tops-women',
                                    children: [],
                                    children_count: '0',
                                    description: '',
                                    id: 59,
                                    image: undefined,
                                    include_in_menu: 1,
                                    level: 2,
                                    meta_description: '',
                                    meta_title: '',
                                    name: 'Tops',
                                    path: '0/59',
                                    position: 0,
                                    product_count: 1,
                                    products: {
                                        aggregations: null,
                                        items: null,
                                        page_info: {
                                            current_page: 1,
                                            page_size: 24,
                                            total_pages: 1,
                                        },
                                        total_count: 1,
                                    },
                                    redirect_code: 0,
                                    staged: false,
                                    uid: 'NTk=',
                                    url_path: 'women/tops-women',
                                    url_suffix: '',
                                },
                                {
                                    __typename: 'CategoryTree',
                                    breadcrumbs: [
                                        {
                                            category_id: 58,
                                            category_level: 1,
                                            category_name: 'Women',
                                            category_uid: 'NTg=',
                                            category_url_key: 'women',
                                            category_url_path: 'women',
                                        },
                                        {
                                            category_id: 59,
                                            category_level: 2,
                                            category_name: 'Tops',
                                            category_uid: 'NTk=',
                                            category_url_key: 'women/tops-women',
                                            category_url_path: 'women/tops-women',
                                        },
                                    ],
                                    canonical_url: 'women/tops-women/hoodies-and-sweatshirts-women',
                                    children: [],
                                    children_count: '0',
                                    description: '',
                                    id: 60,
                                    image: undefined,
                                    include_in_menu: 1,
                                    level: 3,
                                    meta_description: '',
                                    meta_title: '',
                                    name: 'Hoodies & Sweatshirts',
                                    path: '0/60',
                                    position: 0,
                                    product_count: 1,
                                    products: {
                                        aggregations: null,
                                        items: null,
                                        page_info: {
                                            current_page: 1,
                                            page_size: 24,
                                            total_pages: 1,
                                        },
                                        total_count: 1,
                                    },
                                    redirect_code: 0,
                                    staged: false,
                                    uid: 'NjA=',
                                    url_path: 'women/tops-women/hoodies-and-sweatshirts-women',
                                    url_suffix: '',
                                },
                            ],
                            configurable_options: [],
                            description: { html: '' },
                            staged: true,
                            uid: 'UHJvZHVjdDo0OTI=',
                            custom_attributes: [],
                            id: 492,
                            items: [],
                            media_gallery_entries: [
                                {
                                    disabled: false,
                                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
                                    id: 12573090,
                                    label: '',
                                    position: 0,
                                    uid: '',
                                },
                                {
                                    disabled: false,
                                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                                    id: 13020129,
                                    label: '',
                                    position: 1,
                                    uid: '',
                                },
                            ],
                            meta_title: 'Mona Pullover Hoodlie',
                            meta_keyword: '',
                            meta_description: '',
                            name: 'Mona Pullover Hoodlie',
                            only_x_left_in_stock: null,
                            price: { regularPrice: { amount: { currency: 'AUD', value: 9.09 } } },
                            price_range: {
                                maximum_price: {
                                    discount: { amount_off: 0, percent_off: 0 },
                                    final_price: { currency: 'AUD', value: 51.82 },
                                    regular_price: { currency: 'AUD', value: 51.82 },
                                },
                                minimum_price: {
                                    discount: {
                                        amount_off: 42.730000000000004,
                                        percent_off: 82.45851022771132,
                                    },
                                    final_price: { currency: 'AUD', value: 9.09 },
                                    regular_price: { currency: 'AUD', value: 51.82 },
                                },
                            },
                            price_tiers: [],
                            redirect_code: 0,
                            rating_summary: 1,
                            review_count: 1,
                            related_products: null,
                            sku: 'WH01',
                            small_image: {
                                label: '',
                                url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif',
                            },
                            stock_status: 'IN_STOCK',
                            url_key: 'mona-pullover-hoodlie',
                            url_suffix: '',
                            reviews: {
                                items: [
                                    {
                                        average_rating: 5,
                                        created_at: '2019-08-24T14:15:22Z',
                                        nickname: '',
                                        product: {},
                                        ratings_breakdown: [
                                            {
                                                name: 'John',
                                                value: '',
                                            },
                                        ],
                                        summary: 'Great product',
                                        text: 'I want more of this',
                                    },
                                    {
                                        average_rating: 5,
                                        created_at: '2019-08-24T14:15:22Z',
                                        nickname: '',
                                        product: {},
                                        ratings_breakdown: [
                                            {
                                                name: 'John',
                                                value: '',
                                            },
                                        ],
                                        summary: 'Great product',
                                        text: 'I want more of this',
                                    },
                                ],
                                page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                            },
                            variants: [],
                            __typename: 'SimpleProduct',
                        },
                    },
                ],
                page_info: { page_size: null, total_pages: null, current_page: null },
            },
            items_count: 1,
            sharing_code: 'bf1ed4dc-1724-48a6-92a3-bef2c1dd5868',
            updated_at: '',
        },
    ],
    wishlist: { visibility: 'PUBLIC' },
    reviews: { items: [], page_info: { current_page: null, page_size: null, total_pages: null } },
};
