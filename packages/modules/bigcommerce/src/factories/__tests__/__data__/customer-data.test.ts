import { Customer, CustomerOutput } from '@aligent/bigcommerce-resolvers';
import { BcMutationCustomer, ValidatePasswordRequest } from '../../../types';
import { Category, CustomField, Product } from '@aligent/bigcommerce-operations';

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
                    items: {
                        edges: [
                            {
                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                node: {
                                    entityId: 6,
                                    productEntityId: 492,
                                    variantEntityId: null,
                                    product: {
                                        id: 'UHJvZHVjdDo0OTI=',
                                        entityId: 492,
                                        sku: 'WH01',
                                        name: 'Mona Pullover Hoodlie',
                                        addToCartUrl:
                                            'https://aligent.mybigcommerce.com/cart.php?action=add&product_id=492',
                                        description: '',
                                        defaultImage: null,
                                        seo: {
                                            pageTitle: 'Mona Pullover Hoodlie',
                                            metaDescription:
                                                'This is the "Mona Pullover Hoodlie" meta_description',
                                            metaKeywords: '',
                                        },
                                        images: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                    node: {
                                                        url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                                                        urlOriginal:
                                                            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                                                        altText: '',
                                                        isDefault: false,
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                        },
                                        categories: {
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                            edges: [
                                                {
                                                    node: {
                                                        __typename: 'Category',
                                                        shopByPriceRanges: {
                                                            pageInfo: {
                                                                hasNextPage: false,
                                                                hasPreviousPage: false,
                                                                startCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjA=',
                                                                endCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjE=',
                                                            },
                                                        },
                                                        id: 'Q2F0ZWdvcnk6NTk=',
                                                        entityId: 59,
                                                        name: 'Tops',
                                                        path: '/women/tops/',
                                                        defaultImage: null,
                                                        description: '',
                                                        breadcrumbs: {
                                                            edges: [
                                                                {
                                                                    node: {
                                                                        name: 'Women',
                                                                        path: '/women/',
                                                                        entityId: 58,
                                                                    },
                                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                                },
                                                                {
                                                                    node: {
                                                                        name: 'Tops',
                                                                        path: '/women/tops/',
                                                                        entityId: 59,
                                                                    },
                                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                                },
                                                            ],
                                                            pageInfo: {
                                                                hasNextPage: false,
                                                                hasPreviousPage: false,
                                                                startCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjA=',
                                                                endCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjE=',
                                                            },
                                                        },
                                                        metafields: {
                                                            edges: [],
                                                            pageInfo: {
                                                                hasNextPage: false,
                                                                hasPreviousPage: false,
                                                                startCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjA=',
                                                                endCursor:
                                                                    'YXJyYXljb25uZWN0aW9uOjE=',
                                                            },
                                                        },
                                                        seo: {
                                                            pageTitle: '',
                                                            metaDescription: '',
                                                            metaKeywords: '',
                                                        },
                                                        defaultProductSort: 'FEATURED',
                                                    } as unknown as Category,
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                                },
                                            ],
                                        },
                                        reviews: {
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                        },
                                        availabilityV2: {
                                            status: 'Available',
                                            description: 'The is the "availability text"',
                                        },
                                        prices: {
                                            basePrice: { currencyCode: 'AUD', value: 51.82 },
                                            bulkPricing: [],
                                            mapPrice: null,
                                            price: { currencyCode: 'AUD', value: 9.09 },
                                            priceRange: {
                                                min: { currencyCode: 'AUD', value: 9.09 },
                                                max: { currencyCode: 'AUD', value: 51.82 },
                                            },
                                            retailPrice: null,
                                            retailPriceRange: null,
                                            salePrice: { currencyCode: 'AUD', value: 9.09 },
                                            saved: null,
                                        },
                                        customFields: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: 'is_clothing',
                                                        value: 'true',
                                                        entityId: 1,
                                                    } as CustomField,
                                                    cursor: 'sd',
                                                },
                                            ],
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                        metafields: {
                                            edges: [
                                                {
                                                    node: {
                                                        key: 'is_bulky_item',
                                                        value: '0',
                                                        entityId: 2,
                                                        id: '',
                                                    },
                                                    cursor: '11',
                                                },
                                            ],
                                            pageInfo: {
                                                __typename: undefined,
                                                endCursor: undefined,
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: undefined,
                                            },
                                        },
                                        productOptions: {
                                            edges: [],
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: null,
                                                endCursor: null,
                                            },
                                        },
                                        path: '/mona-pullover-hoodlie/',
                                    } as unknown as Product,
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
                                    canonical_url: 'women/tops',
                                    children: [],
                                    children_count: '0',
                                    description: '',
                                    id: 59,
                                    include_in_menu: 1,
                                    level: 2,
                                    meta_description: '',
                                    meta_title: '',
                                    name: 'Tops',
                                    path: '0/59',
                                    position: 0,
                                    products: null,
                                    redirect_code: 0,
                                    uid: 'NTk=',
                                    url_path: 'women/tops',
                                    url_suffix: '',
                                    staged: false,
                                    breadcrumbs: [
                                        {
                                            category_id: 58,
                                            category_level: 1,
                                            category_name: 'Women',
                                            category_url_path: 'women',
                                            category_url_key: 'women',
                                            category_uid: 'NTg=',
                                        },
                                    ],
                                    __typename: 'CategoryTree',
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
                                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                                    id: 13020129,
                                    label: '',
                                    position: 0,
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
                            rating_summary: 0,
                            review_count: 0,
                            related_products: null,
                            sku: 'WH01',
                            small_image: {
                                label: '',
                                url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif',
                            },
                            stock_status: 'OUT_OF_STOCK',
                            url_key: 'mona-pullover-hoodlie',
                            url_suffix: '',
                            reviews: {
                                items: [],
                                page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                            },
                            variants: [],
                            __typename: 'SimpleProduct',
                            is_clothing: 'true',
                            is_bulky_item: '0',
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
