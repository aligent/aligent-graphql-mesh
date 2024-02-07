import { WebCatalogTree } from '../../../../types';
import { CategoryTree } from '@aligent/orocommerce-resolvers';

export const inputCategories: Array<WebCatalogTree> = [
    {
        type: 'webcatalogtree',
        id: '1',
        attributes: {
            order: 1,
            level: 0,
            createdAt: '2022-09-20T01:19:12Z',
            updatedAt: '2022-09-26T06:17:19Z',
            title: 'Home',
            url: '/',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: null,
            },
            path: {
                data: [],
            },
            content: {
                data: {
                    type: 'systempages',
                    id: 'oro_frontend_root',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '5',
        attributes: {
            order: 2,
            level: 1,
            createdAt: '2022-09-26T05:44:28Z',
            updatedAt: '2022-09-26T05:44:35Z',
            title: 'Clothing',
            url: '/clothing',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '1',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                ],
            },
            content: {
                data: {
                    type: 'mastercatalogcategories',
                    id: '3',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '6',
        attributes: {
            order: 3,
            level: 2,
            createdAt: '2022-09-26T05:44:53Z',
            updatedAt: '2022-09-26T05:44:53Z',
            title: 'Hoodies',
            url: '/clothing/hoodies',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '5',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                    {
                        type: 'webcatalogtree',
                        id: '5',
                    },
                ],
            },
            content: {
                data: {
                    type: 'mastercatalogcategories',
                    id: '4',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '3',
        attributes: {
            order: 6,
            level: 1,
            createdAt: '2022-09-20T01:24:01Z',
            updatedAt: '2022-09-20T01:24:04Z',
            title: 'Sale',
            url: '/sale',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '1',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                ],
            },
            content: {
                data: {
                    type: 'productcollection',
                    id: '3',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '4',
        attributes: {
            order: 7,
            level: 2,
            createdAt: '2022-09-20T01:28:31Z',
            updatedAt: '2022-09-26T06:16:25Z',
            title: 'Test Product Collection',
            url: '/sale/test-product-collection',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '3',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                    {
                        type: 'webcatalogtree',
                        id: '3',
                    },
                ],
            },
            content: {
                data: {
                    type: 'productcollection',
                    id: '10',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '8',
        attributes: {
            order: 9,
            level: 2,
            createdAt: '2022-09-26T06:15:26Z',
            updatedAt: '2022-09-26T06:16:40Z',
            title: 'Test Product Page',
            url: '/sale/test-product-page',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '3',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                    {
                        type: 'webcatalogtree',
                        id: '3',
                    },
                ],
            },
            content: {
                data: {
                    type: 'products',
                    id: '1',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '2',
        attributes: {
            order: 12,
            level: 1,
            createdAt: '2022-09-20T01:21:10Z',
            updatedAt: '2022-09-26T06:13:55Z',
            title: 'Contact Us',
            url: '/contact-us',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '1',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                ],
            },
            content: {
                data: {
                    type: 'landingpages',
                    id: '3',
                },
            },
        },
    },
    {
        type: 'webcatalogtree',
        id: '7',
        attributes: {
            order: 14,
            level: 1,
            createdAt: '2022-09-26T06:14:16Z',
            updatedAt: '2022-09-26T06:14:17Z',
            title: 'About',
            url: '/about',
            urls: [],
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            parent: {
                data: {
                    type: 'webcatalogtree',
                    id: '1',
                },
            },
            path: {
                data: [
                    {
                        type: 'webcatalogtree',
                        id: '1',
                    },
                ],
            },
            content: {
                data: {
                    type: 'landingpages',
                    id: '1',
                },
            },
        },
    },
];

export const outputCategories: Array<CategoryTree> = [
    {
        id: 1,
        uid: 'eyJpZCI6Im9yb19mcm9udGVuZF9yb290IiwidHlwZSI6InN5c3RlbXBhZ2VzIiwid2ViY2F0YWxvZ0lkIjoiMSJ9',
        position: 1,
        level: 0,
        name: 'Home',
        url_path: '',
        meta_title: null,
        meta_description: null,
        meta_keywords: null,
        staged: false,
        type: 'CATEGORY',
        redirect_code: 0,
        include_in_menu: 1,
        url_suffix: '',
        children_count: '4',
        children: [
            {
                id: 5,
                uid: 'eyJpZCI6IjMiLCJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJ3ZWJjYXRhbG9nSWQiOiI1In0=',
                position: 2,
                level: 1,
                name: 'Clothing',
                url_path: 'clothing',
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                staged: false,
                type: 'CATEGORY',
                redirect_code: 0,
                include_in_menu: 1,
                url_suffix: '',
                children_count: '1',
                children: [
                    {
                        id: 6,
                        uid: 'eyJpZCI6IjQiLCJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJ3ZWJjYXRhbG9nSWQiOiI2In0=',
                        position: 3,
                        level: 2,
                        name: 'Hoodies',
                        url_path: 'clothing/hoodies',
                        meta_title: null,
                        meta_description: null,
                        meta_keywords: null,
                        staged: false,
                        type: 'CATEGORY',
                        redirect_code: 0,
                        include_in_menu: 1,
                        url_suffix: '',
                        children_count: '0',
                        children: [],
                        __typename: 'CategoryTree',
                    },
                ],
                __typename: 'CategoryTree',
            },
            {
                id: 3,
                uid: 'eyJpZCI6IjMiLCJ0eXBlIjoicHJvZHVjdGNvbGxlY3Rpb24iLCJ3ZWJjYXRhbG9nSWQiOiIzIn0=',
                position: 6,
                level: 1,
                name: 'Sale',
                url_path: 'sale',
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                staged: false,
                type: 'CATEGORY',
                redirect_code: 0,
                include_in_menu: 1,
                url_suffix: '',
                children_count: '2',
                children: [
                    {
                        id: 4,
                        uid: 'eyJpZCI6IjEwIiwidHlwZSI6InByb2R1Y3Rjb2xsZWN0aW9uIiwid2ViY2F0YWxvZ0lkIjoiNCJ9',
                        position: 7,
                        level: 2,
                        name: 'Test Product Collection',
                        url_path: 'sale/test-product-collection',
                        meta_title: null,
                        meta_description: null,
                        meta_keywords: null,
                        staged: false,
                        type: 'CATEGORY',
                        redirect_code: 0,
                        include_in_menu: 1,
                        url_suffix: '',
                        children_count: '0',
                        children: [],
                        __typename: 'CategoryTree',
                    },
                    {
                        id: 8,
                        uid: 'eyJpZCI6IjEiLCJ0eXBlIjoicHJvZHVjdHMiLCJ3ZWJjYXRhbG9nSWQiOiI4In0=',
                        position: 9,
                        level: 2,
                        name: 'Test Product Page',
                        url_path: 'sale/test-product-page',
                        meta_title: null,
                        meta_description: null,
                        meta_keywords: null,
                        staged: false,
                        type: 'CATEGORY',
                        redirect_code: 0,
                        include_in_menu: 1,
                        url_suffix: '',
                        children_count: '0',
                        children: [],
                        __typename: 'CategoryTree',
                    },
                ],
                __typename: 'CategoryTree',
            },
            {
                id: 2,
                uid: 'eyJpZCI6IjMiLCJ0eXBlIjoibGFuZGluZ3BhZ2VzIiwid2ViY2F0YWxvZ0lkIjoiMiJ9',
                position: 12,
                level: 1,
                name: 'Contact Us',
                url_path: 'contact-us',
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                staged: false,
                type: 'CATEGORY',
                redirect_code: 0,
                include_in_menu: 1,
                url_suffix: '',
                children_count: '0',
                children: [],
                __typename: 'CategoryTree',
            },
            {
                id: 7,
                uid: 'eyJpZCI6IjEiLCJ0eXBlIjoibGFuZGluZ3BhZ2VzIiwid2ViY2F0YWxvZ0lkIjoiNyJ9',
                position: 14,
                level: 1,
                name: 'About',
                url_path: 'about',
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                staged: false,
                type: 'CATEGORY',
                redirect_code: 0,
                include_in_menu: 1,
                url_suffix: '',
                children_count: '0',
                children: [],
                __typename: 'CategoryTree',
            },
        ],
        __typename: 'CategoryTree',
    },
];
