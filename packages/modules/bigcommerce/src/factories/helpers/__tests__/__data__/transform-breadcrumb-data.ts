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
