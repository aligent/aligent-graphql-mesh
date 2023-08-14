import { BC_WishlistItemConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { getWishListVisibility, getTransformedWishListItems } from '../transform-wishlists';

describe('transform customer wishlists', () => {
    it('Returns wishlists visibility PUBLIC', () => {
        const inputVisibility = true;
        const expectResult = 'PUBLIC';

        const result = getWishListVisibility(inputVisibility);

        expect(result).toEqual(expectResult);
    });
    it('Returns wishlists visibility PRIVATE', () => {
        const inputVisibility = false;
        const expectResult = 'PRIVATE';

        const result = getWishListVisibility(inputVisibility);

        expect(result).toEqual(expectResult);
    });

    it('Returns transformed wishlist items', () => {
        const inputBcWishList = bcWishList;

        const result = getTransformedWishListItems(inputBcWishList);

        expect(result).toEqual(expectResult);
    });
});

const bcWishList: BC_WishlistItemConnection = {
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
                                                node: { name: 'Shop All', entityId: 23 },
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
                                },
                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                            {
                                node: {
                                    id: 'Q2F0ZWdvcnk6NTg=',
                                    entityId: 58,
                                    name: 'Women',
                                    path: '/women/',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: { name: 'Women', entityId: 58 },
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
                                    id: 'Q2F0ZWdvcnk6NTk=',
                                    entityId: 59,
                                    name: 'Tops',
                                    path: '/women/tops/',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: { name: 'Women', entityId: 58 },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: { name: 'Tops', entityId: 59 },
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
                                    id: 'Q2F0ZWdvcnk6NjA=',
                                    entityId: 60,
                                    name: 'Hoodies & Sweatshirts',
                                    path: '/hoodies-and-sweatshirts-women',
                                    defaultImage: null,
                                    description: '',
                                    breadcrumbs: {
                                        edges: [
                                            {
                                                node: { name: 'Women', entityId: 58 },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                            {
                                                node: { name: 'Tops', entityId: 59 },
                                                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                            },
                                            {
                                                node: {
                                                    name: 'Hoodies & Sweatshirts',
                                                    entityId: 60,
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
