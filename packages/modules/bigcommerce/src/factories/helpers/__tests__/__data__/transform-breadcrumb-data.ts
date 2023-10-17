import { Category } from '../../../../types';

export const BcBreadCrumbEdges = {
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
};

export const BcCategoriesWithBreadcrumbUrlOnly = {
    name: 'Hoodies & Sweatshirts',
    path: '/women/tops-women/hoodies-and-sweatshirts-women/',
} as Category;

export const transformedBreadcrumbs = [
    {
        category_id: 58,
        category_level: 1,
        category_name: 'Women',
        category_url_path: 'women',
        category_url_key: 'women',
        category_uid: 'NTg=',
    },
    {
        category_id: 59,
        category_level: 2,
        category_name: 'Tops',
        category_url_path: 'women/women-tops',
        category_url_key: 'women/women-tops',
        category_uid: 'NTk=',
    },
];

export const parentCategories = [
    {
        id: 'MA==',
        entityId: 0,
        name: 'Big Commerce categories',
        path: '',
        description: '',
    },
    {
        description: '<p>This is the "Women" category description</p>',
        entityId: 58,
        name: 'Women',
        path: '/women/',
        productCount: 1,
        image: null,
        children: [
            {
                description: '',
                entityId: 59,
                name: 'Tops',
                path: '/women/tops-women/',
                productCount: 1,
                image: null,
                children: [
                    {
                        description: '',
                        entityId: 60,
                        name: 'Hoodies & Sweatshirts',
                        path: '/women/tops-women/hoodies-and-sweatshirts-women/',
                        productCount: 1,
                        image: null,
                    },
                ],
            },
        ],
        __typename: 'Category',
        id: 'Q2F0ZWdvcnk6NTg=',
        defaultImage: null,
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
                        key: 'is_women_category',
                        value: 'true',
                    },
                },
            ],
        },
        products: {
            collectionInfo: {
                totalItems: 1,
            },
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
    {
        description: '',
        entityId: 59,
        name: 'Tops',
        path: '/women/tops-women/',
        productCount: 1,
        image: null,
        children: [
            {
                description: '',
                entityId: 60,
                name: 'Hoodies & Sweatshirts',
                path: '/women/tops-women/hoodies-and-sweatshirts-women/',
                productCount: 1,
                image: null,
            },
        ],
    },
] as Category[];
