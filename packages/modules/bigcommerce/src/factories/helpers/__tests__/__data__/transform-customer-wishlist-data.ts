import { WishlistConnection, WishlistItemConnection } from '@aligent/bigcommerce-operations';

export const bcWishlistNoEdges = {
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
    },
};

export const bcWishListNoItemEdges: WishlistConnection = {
    edges: [
        {
            cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            node: {
                entityId: 5,
                isPublic: true,
                items: {
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
};

export const bcWishList: WishlistConnection = {
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
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                node: {
                                                    url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
                                                    urlOriginal:
                                                        'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/401/wh01-green_main__96543.1690452070.jpg',
                                                    altText: '',
                                                    isDefault: true,
                                                },
                                            },
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
                                                    metafields: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    shopByPriceRanges: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    id: 'Q2F0ZWdvcnk6MjM=',
                                                    entityId: 23,
                                                    name: 'Shop All',
                                                    path: '/shop-all/',
                                                    defaultImage: null,
                                                    description: '',
                                                    breadcrumbs: {
                                                        edges: [
                                                            {
                                                                node: {
                                                                    name: 'Shop All',
                                                                    entityId: 23,
                                                                    path: '/shop-all/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            },
                                                        ],
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                        },
                                                    },
                                                    products: {
                                                        collectionInfo: { totalItems: 22 },
                                                        pageInfo: {
                                                            hasNextPage: true,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
                                                        },
                                                    },
                                                    seo: {
                                                        pageTitle: '',
                                                        metaDescription: '',
                                                        metaKeywords: '',
                                                    },
                                                    defaultProductSort: 'FEATURED',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: {
                                                    metafields: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    shopByPriceRanges: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    id: 'Q2F0ZWdvcnk6NTg=',
                                                    entityId: 58,
                                                    name: 'Women',
                                                    path: '/women/',
                                                    defaultImage: null,
                                                    description: '',
                                                    breadcrumbs: {
                                                        edges: [
                                                            {
                                                                node: {
                                                                    name: 'Women',
                                                                    entityId: 58,
                                                                    path: '/women/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            },
                                                        ],
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                        },
                                                    },
                                                    products: {
                                                        collectionInfo: { totalItems: 1 },
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                        },
                                                    },
                                                    seo: {
                                                        pageTitle: 'Women',
                                                        metaDescription:
                                                            'This is the "Women" meta_description',
                                                        metaKeywords: 'women',
                                                    },
                                                    defaultProductSort: 'NEWEST',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                            {
                                                node: {
                                                    metafields: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    shopByPriceRanges: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
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
                                                                    entityId: 58,
                                                                    path: '/women/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            },
                                                            {
                                                                node: {
                                                                    name: 'Tops',
                                                                    entityId: 59,
                                                                    path: '/women/women-tops/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                            },
                                                        ],
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    products: {
                                                        collectionInfo: { totalItems: 1 },
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                        },
                                                    },
                                                    seo: {
                                                        pageTitle: '',
                                                        metaDescription: '',
                                                        metaKeywords: '',
                                                    },
                                                    defaultProductSort: 'FEATURED',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                            },
                                            {
                                                node: {
                                                    metafields: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    shopByPriceRanges: {
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                        },
                                                    },
                                                    id: 'Q2F0ZWdvcnk6NjA=',
                                                    entityId: 60,
                                                    name: 'Hoodies & Sweatshirts',
                                                    path: '/hoodies-and-sweatshirts-women',
                                                    defaultImage: null,
                                                    description: '',
                                                    breadcrumbs: {
                                                        edges: [
                                                            {
                                                                node: {
                                                                    name: 'Women',
                                                                    entityId: 58,
                                                                    path: '/women/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            },
                                                            {
                                                                node: {
                                                                    name: 'Tops',
                                                                    entityId: 59,
                                                                    path: '/women/women-tops/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                                            },
                                                            {
                                                                node: {
                                                                    name: 'Hoodies & Sweatshirts',
                                                                    entityId: 60,
                                                                    path: '/women/tops-women/hoodies-and-sweatshirts-women/',
                                                                },
                                                                cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                                            },
                                                        ],
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                                        },
                                                    },
                                                    products: {
                                                        collectionInfo: { totalItems: 1 },
                                                        pageInfo: {
                                                            hasNextPage: false,
                                                            hasPreviousPage: false,
                                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                        },
                                                    },
                                                    seo: {
                                                        pageTitle: '',
                                                        metaDescription: '',
                                                        metaKeywords: '',
                                                    },
                                                    defaultProductSort: 'FEATURED',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
                                            },
                                        ],
                                    },
                                    reviews: {
                                        edges: [
                                            {
                                                node: {
                                                    entityId: 4,
                                                    author: { name: 'John' },
                                                    title: 'Great product',
                                                    text: 'I want more of this',
                                                    rating: 5,
                                                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: {
                                                    entityId: 5,
                                                    author: { name: 'John' },
                                                    title: 'Great product',
                                                    text: 'I want more of this',
                                                    rating: 5,
                                                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                        ],
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
                                    addToWishlistUrl: 'deprecated',
                                    availability: 'deprecated',
                                    availabilityDescription: 'deprecated',
                                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                                    customFields: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    giftWrappingOptions: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    inventory: {
                                        isInStock: true,
                                        hasVariantInventory: true,
                                    },
                                    metafields: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    options: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    plainTextDescription: 'desc',
                                    relatedProducts: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    reviewSummary: {
                                        averageRating: 1,
                                        numberOfReviews: 1,
                                        summationOfRatings: 1,
                                    },
                                    showCartAction: true,
                                    type: 'Product',
                                    variants: {
                                        edges: [],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: null,
                                            endCursor: null,
                                        },
                                    },
                                    warranty: 'warranty',
                                },
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
};

export const transformedWishlist = [
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
                                children: [],
                                children_count: '0',
                                description: '',
                                id: 23,
                                include_in_menu: 1,
                                meta_description: '',
                                meta_title: '',
                                name: 'Shop All',
                                position: 0,
                                product_count: 22,
                                redirect_code: 0,
                                uid: 'MjM=',
                                url_path: 'shop-all',
                                url_suffix: '',
                                staged: false,
                                breadcrumbs: [
                                    {
                                        category_level: 0,
                                        category_name: 'Shop All',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/shop-all/',
                                    },
                                ],
                                __typename: 'CategoryTree',
                            },
                            {
                                children: [],
                                children_count: '0',
                                description: '',
                                id: 58,
                                include_in_menu: 1,
                                meta_description: 'This is the "Women" meta_description',
                                meta_title: 'Women',
                                name: 'Women',
                                position: 0,
                                product_count: 1,
                                redirect_code: 0,
                                uid: 'NTg=',
                                url_path: 'women',
                                url_suffix: '',
                                staged: false,
                                breadcrumbs: [
                                    {
                                        category_level: 0,
                                        category_name: 'Women',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/women/',
                                    },
                                ],
                                __typename: 'CategoryTree',
                            },
                            {
                                children: [],
                                children_count: '0',
                                description: '',
                                id: 59,
                                include_in_menu: 1,
                                meta_description: '',
                                meta_title: '',
                                name: 'Tops',
                                position: 0,
                                product_count: 1,
                                redirect_code: 0,
                                uid: 'NTk=',
                                url_path: 'women/tops',
                                url_suffix: '',
                                staged: false,
                                breadcrumbs: [
                                    {
                                        category_level: 0,
                                        category_name: 'Women',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/women/',
                                    },
                                    {
                                        category_level: 1,
                                        category_name: 'Tops',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/women/women-tops/',
                                    },
                                ],
                                __typename: 'CategoryTree',
                            },
                            {
                                children: [],
                                children_count: '0',
                                description: '',
                                id: 60,
                                include_in_menu: 1,
                                meta_description: '',
                                meta_title: '',
                                name: 'Hoodies & Sweatshirts',
                                position: 0,
                                product_count: 1,
                                redirect_code: 0,
                                uid: 'NjA=',
                                url_path: 'hoodies-and-sweatshirts-women',
                                url_suffix: '',
                                staged: false,
                                breadcrumbs: [
                                    {
                                        category_level: 0,
                                        category_name: 'Women',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/women/',
                                    },
                                    {
                                        category_level: 1,
                                        category_name: 'Tops',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path: '/women/women-tops/',
                                    },
                                    {
                                        category_level: 2,
                                        category_name: 'Hoodies & Sweatshirts',
                                        category_uid: '',
                                        category_url_key: null,
                                        category_url_path:
                                            '/women/tops-women/hoodies-and-sweatshirts-women/',
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
                        rating_summary: 1,
                        redirect_code: 0,
                        review_count: 1,
                        related_products: null,
                        sku: 'WH01',
                        small_image: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif',
                        },
                        stock_status: 'IN_STOCK',
                        url_key: 'mona-pullover-hoodlie',
                        url_suffix: '',
                        reviews: {
                            items: [
                                {
                                    ratings_breakdown: [{ name: 'John', value: '' }],
                                    average_rating: 5,
                                    created_at: '2019-08-24T14:15:22Z',
                                    nickname: '',
                                    summary: 'Great product',
                                    text: 'I want more of this',
                                    product: {},
                                },
                                {
                                    ratings_breakdown: [{ name: 'John', value: '' }],
                                    average_rating: 5,
                                    created_at: '2019-08-24T14:15:22Z',
                                    nickname: '',
                                    summary: 'Great product',
                                    text: 'I want more of this',
                                    product: {},
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
];

export const transformedWishlistItems = [
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
                    children: [],
                    children_count: '0',
                    description: '',
                    id: 23,
                    include_in_menu: 1,
                    meta_description: '',
                    meta_title: '',
                    name: 'Shop All',
                    position: 0,
                    product_count: 22,
                    redirect_code: 0,
                    uid: 'MjM=',
                    url_path: 'shop-all',
                    url_suffix: '',
                    staged: false,
                    breadcrumbs: [
                        {
                            category_level: 0,
                            category_name: 'Shop All',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/shop-all/',
                        },
                    ],
                    __typename: 'CategoryTree',
                },
                {
                    children: [],
                    children_count: '0',
                    description: '',
                    id: 58,
                    include_in_menu: 1,
                    meta_description: 'This is the "Women" meta_description',
                    meta_title: 'Women',
                    name: 'Women',
                    position: 0,
                    product_count: 1,
                    redirect_code: 0,
                    uid: 'NTg=',
                    url_path: 'women',
                    url_suffix: '',
                    staged: false,
                    breadcrumbs: [
                        {
                            category_level: 0,
                            category_name: 'Women',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/',
                        },
                    ],
                    __typename: 'CategoryTree',
                },
                {
                    children: [],
                    children_count: '0',
                    description: '',
                    id: 59,
                    include_in_menu: 1,
                    meta_description: '',
                    meta_title: '',
                    name: 'Tops',
                    position: 0,
                    product_count: 1,
                    redirect_code: 0,
                    uid: 'NTk=',
                    url_path: 'women/tops',
                    url_suffix: '',
                    staged: false,
                    breadcrumbs: [
                        {
                            category_level: 0,
                            category_name: 'Women',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/',
                        },
                        {
                            category_level: 1,
                            category_name: 'Tops',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/women-tops/',
                        },
                    ],
                    __typename: 'CategoryTree',
                },
                {
                    children: [],
                    children_count: '0',
                    description: '',
                    id: 60,
                    include_in_menu: 1,
                    meta_description: '',
                    meta_title: '',
                    name: 'Hoodies & Sweatshirts',
                    position: 0,
                    product_count: 1,
                    redirect_code: 0,
                    uid: 'NjA=',
                    url_path: 'hoodies-and-sweatshirts-women',
                    url_suffix: '',
                    staged: false,
                    breadcrumbs: [
                        {
                            category_level: 0,
                            category_name: 'Women',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/',
                        },
                        {
                            category_level: 1,
                            category_name: 'Tops',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/women-tops/',
                        },
                        {
                            category_level: 2,
                            category_name: 'Hoodies & Sweatshirts',
                            category_uid: '',
                            category_url_key: null,
                            category_url_path: '/women/tops-women/hoodies-and-sweatshirts-women/',
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
                    discount: { amount_off: 42.730000000000004, percent_off: 82.45851022771132 },
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
                url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/stencil/15eec2b0-e387-0138-ad46-0242ac110007/e/ec579c80-7d66-0139-f0a8-5273ac5aab0b/img/ProductDefault.gif',
            },
            stock_status: 'IN_STOCK',
            url_key: 'mona-pullover-hoodlie',
            url_suffix: '',
            reviews: {
                items: [
                    {
                        ratings_breakdown: [{ name: 'John', value: '' }],
                        average_rating: 5,
                        created_at: '2019-08-24T14:15:22Z',
                        nickname: '',
                        summary: 'Great product',
                        text: 'I want more of this',
                        product: {},
                    },
                    {
                        ratings_breakdown: [{ name: 'John', value: '' }],
                        average_rating: 5,
                        created_at: '2019-08-24T14:15:22Z',
                        nickname: '',
                        summary: 'Great product',
                        text: 'I want more of this',
                        product: {},
                    },
                ],
                page_info: { current_page: 0, page_size: 0, total_pages: 0 },
            },
            variants: [],
            __typename: 'SimpleProduct',
        },
    },
];

export const bcWishListItems: WishlistItemConnection = {
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
                        metaDescription: 'This is the "Mona Pullover Hoodlie" meta_description',
                        metaKeywords: '',
                    },
                    images: {
                        edges: [
                            {
                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                node: {
                                    url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
                                    urlOriginal:
                                        'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/401/wh01-green_main__96543.1690452070.jpg',
                                    altText: '',
                                    isDefault: true,
                                },
                            },
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
                                    id: 'Q2F0ZWdvcnk6MjM=',
                                    entityId: 23,
                                    name: 'Shop All',
                                    path: '/shop-all/',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: {
                                                    name: 'Shop All',
                                                    entityId: 23,
                                                    path: '/shop-all/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        ],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                        },
                                    },
                                    products: {
                                        collectionInfo: { totalItems: 22 },
                                        pageInfo: {
                                            hasNextPage: true,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
                                        },
                                    },
                                    seo: { pageTitle: '', metaDescription: '', metaKeywords: '' },
                                    defaultProductSort: 'FEATURED',
                                    metafields: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    shopByPriceRanges: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                },

                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                            {
                                node: {
                                    metafields: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    shopByPriceRanges: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    id: 'Q2F0ZWdvcnk6NTg=',
                                    entityId: 58,
                                    name: 'Women',
                                    path: '/women/',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: {
                                                    name: 'Women',
                                                    entityId: 58,
                                                    path: '/women/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        ],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                        },
                                    },
                                    products: {
                                        collectionInfo: { totalItems: 1 },
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                        },
                                    },
                                    seo: {
                                        pageTitle: 'Women',
                                        metaDescription: 'This is the "Women" meta_description',
                                        metaKeywords: 'women',
                                    },
                                    defaultProductSort: 'NEWEST',
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                            },
                            {
                                node: {
                                    metafields: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    shopByPriceRanges: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
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
                                                    entityId: 58,
                                                    path: '/women/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: {
                                                    name: 'Tops',
                                                    entityId: 59,
                                                    path: '/women/women-tops/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                        ],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    products: {
                                        collectionInfo: { totalItems: 1 },
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                        },
                                    },
                                    seo: { pageTitle: '', metaDescription: '', metaKeywords: '' },
                                    defaultProductSort: 'FEATURED',
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                            },
                            {
                                node: {
                                    metafields: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    shopByPriceRanges: {
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                        },
                                    },
                                    id: 'Q2F0ZWdvcnk6NjA=',
                                    entityId: 60,
                                    name: 'Hoodies & Sweatshirts',
                                    path: '/hoodies-and-sweatshirts-women',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: {
                                                    name: 'Women',
                                                    entityId: 58,
                                                    path: '/women/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: {
                                                    name: 'Tops',
                                                    entityId: 59,
                                                    path: '/women/women-tops/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                            {
                                                node: {
                                                    name: 'Hoodies & Sweatshirts',
                                                    entityId: 60,
                                                    path: '/women/tops-women/hoodies-and-sweatshirts-women/',
                                                },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                            },
                                        ],
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                        },
                                    },
                                    products: {
                                        collectionInfo: { totalItems: 1 },
                                        pageInfo: {
                                            hasNextPage: false,
                                            hasPreviousPage: false,
                                            startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                        },
                                    },
                                    seo: { pageTitle: '', metaDescription: '', metaKeywords: '' },
                                    defaultProductSort: 'FEATURED',
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
                            },
                        ],
                    },
                    reviews: {
                        edges: [
                            {
                                node: {
                                    entityId: 4,
                                    author: { name: 'John' },
                                    title: 'Great product',
                                    text: 'I want more of this',
                                    rating: 5,
                                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                            {
                                node: {
                                    entityId: 5,
                                    author: { name: 'John' },
                                    title: 'Great product',
                                    text: 'I want more of this',
                                    rating: 5,
                                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                            },
                        ],
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
                    addToWishlistUrl: 'deprecated',
                    availability: 'deprecated',
                    availabilityDescription: 'deprecated',
                    createdAt: { utc: '2019-08-24T14:15:22Z' },
                    customFields: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    giftWrappingOptions: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    inventory: {
                        isInStock: true,
                        hasVariantInventory: true,
                    },
                    metafields: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    options: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    plainTextDescription: 'desc',
                    relatedProducts: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    reviewSummary: {
                        averageRating: 1,
                        numberOfReviews: 1,
                        summationOfRatings: 1,
                    },
                    showCartAction: true,
                    type: 'Product',
                    variants: {
                        edges: [],
                        pageInfo: {
                            hasNextPage: false,
                            hasPreviousPage: false,
                            startCursor: null,
                            endCursor: null,
                        },
                    },
                    warranty: 'warranty',
                },
            },
        },
    ],
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
    },
};

export const bcWishListItemsEmpty: WishlistItemConnection = {
    edges: [],
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
    },
};

export const bcWishListItemsNoEdges: WishlistItemConnection = {
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
    },
};
