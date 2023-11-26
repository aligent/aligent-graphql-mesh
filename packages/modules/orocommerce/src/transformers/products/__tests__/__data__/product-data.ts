import { SimpleProduct, ConfigurableProduct } from '@aligent/orocommerce-resolvers';
import { Product as OroProduct } from '../../../../types';
import { oroImages } from './product-images';
import { oroDiscontinued, oroInStock, oroOutOfStock } from './stock-status';
import { createImageIdFromUrl } from '../../../../utils';

export const oroProducts: OroProduct[] = [
    {
        type: 'products',
        id: '1',
        attributes: {
            sku: 'TEST-1',
            variantAttributeNames: [],
            createdAt: '2022-09-20T01:16:46Z',
            updatedAt: '2023-06-08T05:08:53Z',
            productType: 'simple',
            featured: true,
            newArrival: true,
            category_sort_order: null,
            name: 'TEST',
            shortDescription: '<p>This is a short description</p>',
            description:
                '<style type="text/css">#isolation-scope-q78t0n6lokwastg5xgdr1120 #i2jc{min-height:18px;}</style><div id="isolation-scope-q78t0n6lokwastg5xgdr1120" class="cms-wrapper"><div id="i2jc">This is a simple product description. TEST<br/></div></div>',
            productAttributes: {
                Attachments_633139d05ca82: [
                    {
                        id: '1',
                        targetValue: '1',
                    },
                ],
            },
            unitPrecisions: [
                {
                    unit: 'each',
                    precision: 0,
                    conversionRate: 1,
                    default: true,
                },
            ],
            url: '/test',
            urls: [],
            prices: [
                {
                    price: '10.0000',
                    currencyId: 'AUD',
                    quantity: '0',
                    unit: 'each',
                },
            ],
            lowInventory: false,
            upcoming: false,
            availabilityDate: null,
            metaTitle: 'Meta Title',
            metaDescription: 'Meta Content from Oro',
            metaKeywords: 'Key, Words, Aligent',
        },
        relationships: {
            images: {
                data: [
                    {
                        type: 'productimages',
                        id: '1',
                    },
                ],
            },
            productFamily: {
                data: {
                    type: 'productfamilies',
                    id: '1',
                },
            },
            kitItems: {
                data: [],
            },
            category: {
                data: {
                    type: 'mastercatalogcategories',
                    id: '2',
                },
            },
            inventoryStatus: {
                data: {
                    type: 'productinventorystatuses',
                    id: 'in_stock',
                },
            },
            variantProducts: {
                data: [],
            },
            parentProducts: {
                data: [],
            },
        },
        included: [...oroImages, oroInStock],
    },
    {
        type: 'products',
        id: '11',
        attributes: {
            sku: 'HOODIE',
            variantAttributeNames: ['size_63313224a7189', 'size_633132c50db9e'],
            createdAt: '2022-09-26T05:30:01Z',
            updatedAt: '2023-06-14T05:12:01Z',
            productType: 'configurable',
            featured: true,
            newArrival: true,
            category_sort_order: null,
            name: 'Aligent Hoodie',
            shortDescription: '<p>This is the short description</p>',
            description:
                '<div id="isolation-scope-vlfsmlc2ts2p66hkyemb4660" class="cms-wrapper"><div id="itrm">This is where the product description goes</div></div>',
            productAttributes: {
                size_63313224a7189: null,
                size_633132c50db9e: null,
            },
            unitPrecisions: [
                {
                    unit: 'each',
                    precision: 0,
                    conversionRate: 1,
                    default: true,
                },
            ],
            url: '/aligent-hoodie',
            urls: [],
            prices: [
                {
                    price: '10.0000',
                    currencyId: 'AUD',
                    quantity: '0',
                    unit: 'each',
                },
            ],
            lowInventory: false,
            upcoming: false,
            availabilityDate: null,
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            images: {
                data: [
                    {
                        type: 'productimages',
                        id: '20',
                    },
                    {
                        type: 'productimages',
                        id: '21',
                    },
                ],
            },
            productFamily: {
                data: {
                    type: 'productfamilies',
                    id: '2',
                },
            },
            kitItems: {
                data: [],
            },
            category: {
                data: {
                    type: 'mastercatalogcategories',
                    id: '4',
                },
            },
            inventoryStatus: {
                data: {
                    type: 'productinventorystatuses',
                    id: 'out_of_stock',
                },
            },
            variantProducts: {
                data: [
                    {
                        type: 'products',
                        id: '5',
                    },
                    {
                        type: 'products',
                        id: '2',
                    },
                    {
                        type: 'products',
                        id: '3',
                    },
                    {
                        type: 'products',
                        id: '4',
                    },
                    {
                        type: 'products',
                        id: '9',
                    },
                    {
                        type: 'products',
                        id: '7',
                    },
                    {
                        type: 'products',
                        id: '6',
                    },
                    {
                        type: 'products',
                        id: '10',
                    },
                    {
                        type: 'products',
                        id: '8',
                    },
                ],
            },
            parentProducts: {
                data: [],
            },
        },
        included: [...oroImages, oroOutOfStock],
    },
    {
        type: 'products',
        id: '12',
        attributes: {
            sku: 'WH01',
            variantAttributeNames: ['size_63313224a7189', 'size_633132c50db9e'],
            createdAt: '2023-10-27T01:50:22Z',
            updatedAt: '2023-10-27T02:19:31Z',
            productType: 'configurable',
            featured: false,
            newArrival: false,
            category_sort_order: null,
            name: 'Mona Pullover Hoodlie',
            shortDescription: null,
            description:
                '<style type="text/css">#isolation-scope-q78t0n6lokwastg5xgdr1120 #i2jc{min-height:18px;}</style><div id="isolation-scope-q78t0n6lokwastg5xgdr1120" class="cms-wrapper"><div id="i2jc">This is a simple product description. TEST<br/></div></div>',
            productAttributes: {
                size_63313224a7189: null,
                size_633132c50db9e: null,
            },
            unitPrecisions: [
                {
                    unit: 'each',
                    precision: 0,
                    conversionRate: 1,
                    default: true,
                },
            ],
            url: '/mona-pullover-hoodlie',
            urls: [],
            prices: [
                {
                    price: '10.0000',
                    currencyId: 'AUD',
                    quantity: '0',
                    unit: 'each',
                },
            ],
            lowInventory: false,
            upcoming: false,
            availabilityDate: null,
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            images: {
                data: [
                    {
                        type: 'productimages',
                        id: '23',
                    },
                    {
                        type: 'productimages',
                        id: '24',
                    },
                    {
                        type: 'productimages',
                        id: '22',
                    },
                ],
            },
            productFamily: {
                data: {
                    type: 'productfamilies',
                    id: '2',
                },
            },
            kitItems: {
                data: [],
            },
            category: {
                data: {
                    type: 'mastercatalogcategories',
                    id: '7',
                },
            },
            inventoryStatus: {
                data: {
                    type: 'productinventorystatuses',
                    id: 'discontinued',
                },
            },
            variantProducts: {
                data: [
                    {
                        type: 'products',
                        id: '9',
                    },
                    {
                        type: 'products',
                        id: '7',
                    },
                    {
                        type: 'products',
                        id: '6',
                    },
                    {
                        type: 'products',
                        id: '10',
                    },
                ],
            },
            parentProducts: {
                data: [],
            },
        },
        included: [...oroImages, oroDiscontinued],
    },
];

export const outputProducts: Array<SimpleProduct | ConfigurableProduct> = [
    {
        __typename: 'SimpleProduct',
        id: 1,
        categories: null,
        description: {
            html: '<style type="text/css">#isolation-scope-q78t0n6lokwastg5xgdr1120 #i2jc{min-height:18px;}</style><div id="isolation-scope-q78t0n6lokwastg5xgdr1120" class="cms-wrapper"><div id="i2jc">This is a simple product description. TEST<br/></div></div>',
            __typename: 'ComplexTextValue',
        },
        staged: true,
        custom_attributes: [],
        media_gallery_entries: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg'
                ),
                label: '',
                position: 1,
                uid: btoa(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/26/63291469b2140178133702-Test-Product-Only.jpg'
                ),
                __typename: 'MediaGalleryEntry',
            },
        ],
        meta_title: 'Meta Title',
        meta_keyword: 'Key, Words, Aligent',
        meta_description: 'Meta Content from Oro',
        name: 'TEST',
        price: null,
        price_range: {
            minimum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
            maximum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
        },
        price_tiers: [],
        rating_summary: 0,
        redirect_code: 0,
        review_count: 0,
        related_products: null,
        sku: 'TEST-1',
        small_image: {
            url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/26/63291469b2140178133702-Test-Product-Only.jpg',
            label: '',
            __typename: 'ProductImage',
        },
        stock_status: 'IN_STOCK',
        type: 'PRODUCT',
        uid: btoa('1'),
        url_key: '/test',
        url_suffix: '',
        reviews: {
            __typename: 'ProductReviews',
            items: [],
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
    },
    {
        __typename: 'ConfigurableProduct',
        id: 11,
        categories: null,
        description: {
            html: '<div id="isolation-scope-vlfsmlc2ts2p66hkyemb4660" class="cms-wrapper"><div id="itrm">This is where the product description goes</div></div>',
            __typename: 'ComplexTextValue',
        },
        staged: true,
        custom_attributes: [],
        media_gallery_entries: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png'
                ),
                label: '',
                position: 1,
                uid: btoa(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png'
                ),
                __typename: 'MediaGalleryEntry',
            },
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png'
                ),
                label: '',
                position: 2,
                uid: btoa(
                    '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png'
                ),
                __typename: 'MediaGalleryEntry',
            },
        ],
        meta_title: null,
        meta_keyword: null,
        meta_description: null,
        name: 'Aligent Hoodie',
        price: null,
        price_range: {
            minimum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
            maximum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
        },
        price_tiers: [],
        rating_summary: 0,
        redirect_code: 0,
        review_count: 0,
        related_products: null,
        sku: 'HOODIE',
        small_image: {
            url: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
            label: '',
            __typename: 'ProductImage',
        },
        stock_status: 'OUT_OF_STOCK',
        type: 'PRODUCT',
        uid: btoa('11'),
        url_key: '/aligent-hoodie',
        url_suffix: '',
        configurable_options: [],
        variants: [],
        reviews: {
            __typename: 'ProductReviews',
            items: [],
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
    },
    {
        __typename: 'ConfigurableProduct',
        id: 12,
        categories: null,
        description: {
            html: '<style type="text/css">#isolation-scope-q78t0n6lokwastg5xgdr1120 #i2jc{min-height:18px;}</style><div id="isolation-scope-q78t0n6lokwastg5xgdr1120" class="cms-wrapper"><div id="i2jc">This is a simple product description. TEST<br/></div></div>',
            __typename: 'ComplexTextValue',
        },
        staged: true,
        custom_attributes: [],
        media_gallery_entries: [
            {
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                id: createImageIdFromUrl(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg'
                ),
                label: '',
                position: 1,
                uid: btoa(
                    '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg'
                ),
                __typename: 'MediaGalleryEntry',
            },
        ],
        meta_title: null,
        meta_keyword: null,
        meta_description: null,
        name: 'Mona Pullover Hoodlie',
        price: null,
        price_range: {
            minimum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
            maximum_price: {
                regular_price: { currency: 'AUD', value: 10 },
                final_price: { currency: 'AUD', value: 10 },
            },
        },
        price_tiers: [],
        rating_summary: 0,
        redirect_code: 0,
        review_count: 0,
        related_products: null,
        sku: 'WH01',
        small_image: {
            url: '/media/cache/resolve/product_large/bundles/oroproduct/images/no_image.png',
            label: '',
            __typename: 'ProductImage',
        },
        stock_status: 'OUT_OF_STOCK',
        type: 'PRODUCT',
        uid: btoa('12'),
        url_key: '/mona-pullover-hoodlie',
        url_suffix: '',
        configurable_options: [],
        variants: [],
        reviews: {
            __typename: 'ProductReviews',
            items: [],
            page_info: {
                current_page: 0,
                page_size: 0,
                total_pages: 0,
            },
        },
    },
];
