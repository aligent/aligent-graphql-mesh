export const oroProducts = [
    {
        type: 'products',
        id: '11',
        links: { self: 'https://aligent.oro-cloud.com/api/products/11' },
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
            productAttributes: { size_63313224a7189: null, size_633132c50db9e: null },
            unitPrecisions: [{ unit: 'each', precision: 0, conversionRate: 1, default: true }],
            url: '/aligent-hoodie',
            urls: [],
            prices: [],
            lowInventory: false,
            upcoming: false,
            availabilityDate: null,
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
        },
        relationships: {
            images: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/images',
                    related: 'https://aligent.oro-cloud.com/api/products/11/images',
                },
                data: [
                    { type: 'productimages', id: '20' },
                    { type: 'productimages', id: '21' },
                ],
            },
            productFamily: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/productFamily',
                    related: 'https://aligent.oro-cloud.com/api/products/11/productFamily',
                },
                data: { type: 'productfamilies', id: '2' },
            },
            brand: { data: { type: 'brands', id: '1' } },
            kitItems: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/kitItems',
                    related: 'https://aligent.oro-cloud.com/api/products/11/kitItems',
                },
                data: [],
            },
            category: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/category',
                    related: 'https://aligent.oro-cloud.com/api/products/11/category',
                },
                data: { type: 'mastercatalogcategories', id: '4' },
            },
            inventoryStatus: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/inventoryStatus',
                    related: 'https://aligent.oro-cloud.com/api/products/11/inventoryStatus',
                },
                data: { type: 'productinventorystatuses', id: 'in_stock' },
            },
            variantProducts: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/variantProducts',
                    related: 'https://aligent.oro-cloud.com/api/products/11/variantProducts',
                },
                data: [
                    { type: 'products', id: '2' },
                    { type: 'products', id: '3' },
                    { type: 'products', id: '4' },
                    { type: 'products', id: '7' },
                    { type: 'products', id: '6' },
                    { type: 'products', id: '10' },
                    { type: 'products', id: '8' },
                    { type: 'products', id: '5' },
                    { type: 'products', id: '9' },
                ],
            },
            parentProducts: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/11/relationships/parentProducts',
                    related: 'https://aligent.oro-cloud.com/api/products/11/parentProducts',
                },
                data: [],
            },
        },
        included: [
            {
                type: 'productimages',
                id: '20',
                links: { self: 'https://aligent.oro-cloud.com/api/productimages/20' },
                attributes: {
                    updatedAt: '2023-06-14T05:12:01Z',
                    mimeType: 'image/png',
                    types: ['main', 'listing'],
                    files: [
                        {
                            url: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: null,
                            maxHeight: null,
                            dimension: 'product_original',
                            url_webp:
                                '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 610,
                            maxHeight: 610,
                            dimension: 'product_gallery_popup',
                            url_webp:
                                '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 378,
                            maxHeight: 'auto',
                            dimension: 'product_gallery_main',
                            url_webp:
                                '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 316,
                            maxHeight: 'auto',
                            dimension: 'product_large',
                            url_webp:
                                '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main', 'listing'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 378,
                            maxHeight: 378,
                            dimension: 'product_extra_large',
                            url_webp:
                                '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main', 'listing'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 262,
                            maxHeight: 'auto',
                            dimension: 'product_medium',
                            url_webp:
                                '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            maxWidth: 82,
                            maxHeight: 82,
                            dimension: 'product_small',
                            url_webp:
                                '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                            types: ['main', 'listing'],
                        },
                    ],
                },
                relationships: {
                    product: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/productimages/20/relationships/product',
                            related: 'https://aligent.oro-cloud.com/api/productimages/20/product',
                        },
                        data: { type: 'products', id: '11' },
                    },
                },
            },
            {
                type: 'productimages',
                id: '21',
                links: { self: 'https://aligent.oro-cloud.com/api/productimages/21' },
                attributes: {
                    updatedAt: '2023-06-14T05:12:01Z',
                    mimeType: 'image/png',
                    types: ['additional'],
                    files: [
                        {
                            url: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            maxWidth: null,
                            maxHeight: null,
                            dimension: 'product_original',
                            url_webp:
                                '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                            types: ['additional'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            maxWidth: 378,
                            maxHeight: 378,
                            dimension: 'product_extra_large',
                            url_webp:
                                '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                            types: ['additional'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            maxWidth: 82,
                            maxHeight: 82,
                            dimension: 'product_small',
                            url_webp:
                                '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/48/6331371b44a5b561493337-download_5__1_4.png.webp',
                            types: ['additional'],
                        },
                    ],
                },
                relationships: {
                    product: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/productimages/21/relationships/product',
                            related: 'https://aligent.oro-cloud.com/api/productimages/21/product',
                        },
                        data: { type: 'products', id: '11' },
                    },
                },
            },
            {
                type: 'brands',
                id: '1',
                links: { self: 'https://aligent.oro-cloud.com/api/brands/1' },
                attributes: { status: 'enabled', defaultTitle: 'Aligent' },
            },
            {
                type: 'products',
                id: '2',
                links: { self: 'https://aligent.oro-cloud.com/api/products/2' },
                attributes: {
                    sku: 'HOODIE-LP',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:23:22Z',
                    updatedAt: '2022-09-26T05:24:35Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Purple Large Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'l', targetValue: 'L' },
                        size_633132c50db9e: { id: 'purple', targetValue: 'purple' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/purple-large-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '11.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/2/images',
                        },
                        data: [
                            { type: 'productimages', id: '2' },
                            { type: 'productimages', id: '3' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/2/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/2/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/2/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/2/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/2/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/2/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/2/parentProducts',
                        },
                        data: [{ type: 'products', id: '11' }],
                    },
                },
            },
            {
                type: 'products',
                id: '3',
                links: { self: 'https://aligent.oro-cloud.com/api/products/3' },
                attributes: {
                    sku: 'HOODIE-LY',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:23:39Z',
                    updatedAt: '2022-09-26T05:25:22Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Yellow Large Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'l', targetValue: 'L' },
                        size_633132c50db9e: { id: 'yellow', targetValue: 'yellow' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/yellow-large-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '13.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/3/images',
                        },
                        data: [
                            { type: 'productimages', id: '4' },
                            { type: 'productimages', id: '5' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/3/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/3/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/3/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/3/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/3/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/3/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/3/parentProducts',
                        },
                        data: [{ type: 'products', id: '11' }],
                    },
                },
            },
            {
                type: 'products',
                id: '4',
                links: { self: 'https://aligent.oro-cloud.com/api/products/4' },
                attributes: {
                    sku: 'HOODIE-LW',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:25:22Z',
                    updatedAt: '2022-09-26T05:25:47Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'White Large Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'l', targetValue: 'L' },
                        size_633132c50db9e: { id: 'white', targetValue: 'white' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/white-large-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '12.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/4/images',
                        },
                        data: [
                            { type: 'productimages', id: '6' },
                            { type: 'productimages', id: '7' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/4/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/4/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/4/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/4/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/4/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/4/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/4/parentProducts',
                        },
                        data: [{ type: 'products', id: '11' }],
                    },
                },
            },
            {
                type: 'products',
                id: '7',
                links: { self: 'https://aligent.oro-cloud.com/api/products/7' },
                attributes: {
                    sku: 'HOODIE-MP',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:26:20Z',
                    updatedAt: '2022-09-26T05:27:13Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Purple Medium Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'm', targetValue: 'M' },
                        size_633132c50db9e: { id: 'purple', targetValue: 'purple' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/purple-medium-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '14.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/7/images',
                        },
                        data: [
                            { type: 'productimages', id: '12' },
                            { type: 'productimages', id: '13' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/7/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/7/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/7/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/7/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/7/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/7/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/7/parentProducts',
                        },
                        data: [
                            { type: 'products', id: '11' },
                            { type: 'products', id: '12' },
                        ],
                    },
                },
            },
            {
                type: 'products',
                id: '6',
                links: { self: 'https://aligent.oro-cloud.com/api/products/6' },
                attributes: {
                    sku: 'HOODIE-MY',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:26:17Z',
                    updatedAt: '2022-09-26T05:27:29Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Yellow Medium Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'm', targetValue: 'M' },
                        size_633132c50db9e: { id: 'yellow', targetValue: 'yellow' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/yellow-medium-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '16.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/6/images',
                        },
                        data: [
                            { type: 'productimages', id: '10' },
                            { type: 'productimages', id: '11' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/6/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/6/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/6/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/6/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/6/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/6/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/6/parentProducts',
                        },
                        data: [
                            { type: 'products', id: '11' },
                            { type: 'products', id: '12' },
                        ],
                    },
                },
            },
            {
                type: 'products',
                id: '10',
                links: { self: 'https://aligent.oro-cloud.com/api/products/10' },
                attributes: {
                    sku: 'HOODIE-SP',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:28:01Z',
                    updatedAt: '2022-09-26T05:28:57Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Purple Small Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 's', targetValue: 'S' },
                        size_633132c50db9e: { id: 'purple', targetValue: 'purple' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/purple-small-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '17.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/10/images',
                        },
                        data: [
                            { type: 'productimages', id: '18' },
                            { type: 'productimages', id: '19' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/10/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/10/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/10/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/inventoryStatus',
                            related:
                                'https://aligent.oro-cloud.com/api/products/10/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/variantProducts',
                            related:
                                'https://aligent.oro-cloud.com/api/products/10/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/10/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/10/parentProducts',
                        },
                        data: [
                            { type: 'products', id: '11' },
                            { type: 'products', id: '12' },
                        ],
                    },
                },
            },
            {
                type: 'products',
                id: '8',
                links: { self: 'https://aligent.oro-cloud.com/api/products/8' },
                attributes: {
                    sku: 'HOODIE-SW',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:27:55Z',
                    updatedAt: '2022-09-26T05:28:23Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'White Small Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 's', targetValue: 'S' },
                        size_633132c50db9e: { id: 'white', targetValue: 'white' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/white-small-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '18.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/8/images',
                        },
                        data: [
                            { type: 'productimages', id: '14' },
                            { type: 'productimages', id: '15' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/8/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/8/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/8/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/8/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'in_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/8/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/8/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/8/parentProducts',
                        },
                        data: [{ type: 'products', id: '11' }],
                    },
                },
            },
            {
                type: 'products',
                id: '5',
                links: { self: 'https://aligent.oro-cloud.com/api/products/5' },
                attributes: {
                    sku: 'HOODIE-MW',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:25:59Z',
                    updatedAt: '2023-10-26T23:21:01Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'White Medium Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 'm', targetValue: 'M' },
                        size_633132c50db9e: { id: 'white', targetValue: 'white' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/white-medium-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '15.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/5/images',
                        },
                        data: [
                            { type: 'productimages', id: '8' },
                            { type: 'productimages', id: '9' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/5/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/5/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/5/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/5/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'out_of_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/5/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/5/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/5/parentProducts',
                        },
                        data: [{ type: 'products', id: '11' }],
                    },
                },
            },
            {
                type: 'products',
                id: '9',
                links: { self: 'https://aligent.oro-cloud.com/api/products/9' },
                attributes: {
                    sku: 'HOODIE-SY',
                    variantAttributeNames: [],
                    createdAt: '2022-09-26T05:27:58Z',
                    updatedAt: '2023-11-15T02:31:42Z',
                    productType: 'simple',
                    featured: false,
                    newArrival: false,
                    category_sort_order: null,
                    name: 'Yellow Small Aligent Hoodie',
                    shortDescription: null,
                    description: null,
                    productAttributes: {
                        size_63313224a7189: { id: 's', targetValue: 'S' },
                        size_633132c50db9e: { id: 'yellow', targetValue: 'yellow' },
                    },
                    unitPrecisions: [
                        { unit: 'each', precision: 0, conversionRate: 1, default: true },
                    ],
                    url: '/yellow-small-aligent-hoodie',
                    urls: [],
                    prices: [{ price: '19.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
                    lowInventory: false,
                    upcoming: false,
                    availabilityDate: null,
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    images: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/images',
                            related: 'https://aligent.oro-cloud.com/api/products/9/images',
                        },
                        data: [
                            { type: 'productimages', id: '16' },
                            { type: 'productimages', id: '17' },
                        ],
                    },
                    productFamily: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/productFamily',
                            related: 'https://aligent.oro-cloud.com/api/products/9/productFamily',
                        },
                        data: { type: 'productfamilies', id: '2' },
                    },
                    brand: { data: { type: 'brands', id: '1' } },
                    kitItems: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/kitItems',
                            related: 'https://aligent.oro-cloud.com/api/products/9/kitItems',
                        },
                        data: [],
                    },
                    category: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/category',
                            related: 'https://aligent.oro-cloud.com/api/products/9/category',
                        },
                        data: { type: 'mastercatalogcategories', id: '4' },
                    },
                    inventoryStatus: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/inventoryStatus',
                            related: 'https://aligent.oro-cloud.com/api/products/9/inventoryStatus',
                        },
                        data: { type: 'productinventorystatuses', id: 'out_of_stock' },
                    },
                    variantProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/variantProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/9/variantProducts',
                        },
                        data: [],
                    },
                    parentProducts: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/products/9/relationships/parentProducts',
                            related: 'https://aligent.oro-cloud.com/api/products/9/parentProducts',
                        },
                        data: [
                            { type: 'products', id: '11' },
                            { type: 'products', id: '12' },
                        ],
                    },
                },
            },
        ],
    },
];

export const outputProducts = [
    {
        categories: null,
        description: {
            __typename: 'ComplexTextValue',
            html: '<div id="isolation-scope-vlfsmlc2ts2p66hkyemb4660" class="cms-wrapper"><div id="itrm">This is where the product description goes</div></div>',
        },
        staged: true,
        uid: 'MTE=',
        custom_attributes: [],
        id: 11,
        media_gallery_entries: [
            {
                id: 20,
                label: 'product_original',
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
            },
            {
                id: 20,
                label: 'product_gallery_popup',
                disabled: false,
                file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
            },
            {
                id: 20,
                label: 'product_gallery_main',
                disabled: false,
                file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
            },
            {
                id: 20,
                label: 'product_large',
                disabled: false,
                file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
            },
            {
                id: 20,
                label: 'product_extra_large',
                disabled: false,
                file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
            },
            {
                id: 20,
                label: 'product_medium',
                disabled: false,
                file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
            },
            {
                id: 20,
                label: 'product_small',
                disabled: false,
                file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
            },
            {
                id: 21,
                label: 'product_original',
                disabled: false,
                file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
            },
            {
                id: 21,
                label: 'product_extra_large',
                disabled: false,
                file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
            },
            {
                id: 21,
                label: 'product_small',
                disabled: false,
                file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
            },
        ],
        meta_title: null,
        meta_keyword: null,
        meta_description: null,
        name: 'Aligent Hoodie',
        price: null,
        price_range: {
            minimum_price: {
                regular_price: { currency: 'AUD', value: 0 },
                final_price: { currency: 'AUD', value: 0 },
                discount: { amount_off: 0 },
            },
            maximum_price: {
                regular_price: { currency: 'AUD', value: 0 },
                final_price: { currency: 'AUD', value: 0 },
            },
        },
        price_tiers: [],
        redirect_code: 0,
        rating_summary: 0,
        review_count: 0,
        related_products: null,
        sku: 'HOODIE',
        small_image: {
            url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
            label: 'product_small',
        },
        image: {
            url: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
            label: 'product_original',
        },
        type: 'PRODUCT',
        stock_status: 'IN_STOCK',
        url_key: 'aligent-hoodie',
        url_suffix: '',
        reviews: {
            __typename: 'ProductReviews',
            items: [],
            page_info: { current_page: 0, page_size: 0, total_pages: 0 },
        },
        variants: [
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'L', uid: 'bA==' },
                    { code: 'size_633132c50db9e', label: 'purple', uid: 'cHVycGxl' },
                ],
                product: {
                    id: 2,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 11 },
                            final_price: { currency: 'AUD', value: 11 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 11 },
                            final_price: { currency: 'AUD', value: 11 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-LP',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'Mg==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'L', uid: 'bA==' },
                    { code: 'size_633132c50db9e', label: 'yellow', uid: 'eWVsbG93' },
                ],
                product: {
                    id: 3,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 13 },
                            final_price: { currency: 'AUD', value: 13 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 13 },
                            final_price: { currency: 'AUD', value: 13 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-LY',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'Mw==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'L', uid: 'bA==' },
                    { code: 'size_633132c50db9e', label: 'white', uid: 'd2hpdGU=' },
                ],
                product: {
                    id: 4,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 12 },
                            final_price: { currency: 'AUD', value: 12 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 12 },
                            final_price: { currency: 'AUD', value: 12 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-LW',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'NA==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'M', uid: 'bQ==' },
                    { code: 'size_633132c50db9e', label: 'purple', uid: 'cHVycGxl' },
                ],
                product: {
                    id: 7,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 14 },
                            final_price: { currency: 'AUD', value: 14 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 14 },
                            final_price: { currency: 'AUD', value: 14 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-MP',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'Nw==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'M', uid: 'bQ==' },
                    { code: 'size_633132c50db9e', label: 'yellow', uid: 'eWVsbG93' },
                ],
                product: {
                    id: 6,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 16 },
                            final_price: { currency: 'AUD', value: 16 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 16 },
                            final_price: { currency: 'AUD', value: 16 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-MY',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'Ng==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'S', uid: 'cw==' },
                    { code: 'size_633132c50db9e', label: 'purple', uid: 'cHVycGxl' },
                ],
                product: {
                    id: 10,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 17 },
                            final_price: { currency: 'AUD', value: 17 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 17 },
                            final_price: { currency: 'AUD', value: 17 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-SP',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'MTA=',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'S', uid: 'cw==' },
                    { code: 'size_633132c50db9e', label: 'white', uid: 'd2hpdGU=' },
                ],
                product: {
                    id: 8,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 18 },
                            final_price: { currency: 'AUD', value: 18 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 18 },
                            final_price: { currency: 'AUD', value: 18 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-SW',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'OA==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'M', uid: 'bQ==' },
                    { code: 'size_633132c50db9e', label: 'white', uid: 'd2hpdGU=' },
                ],
                product: {
                    id: 5,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 15 },
                            final_price: { currency: 'AUD', value: 15 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 15 },
                            final_price: { currency: 'AUD', value: 15 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-MW',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'OUT_OF_STOCK',
                    uid: 'NQ==',
                },
                __typename: 'ConfigurableVariant',
            },
            {
                attributes: [
                    { code: 'size_63313224a7189', label: 'S', uid: 'cw==' },
                    { code: 'size_633132c50db9e', label: 'yellow', uid: 'eWVsbG93' },
                ],
                product: {
                    id: 9,
                    custom_attributes: [],
                    media_gallery_entries: [
                        {
                            id: 20,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 20,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_gallery_main/5507b4acf749e257f536fcc5d77767f0/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 20,
                            label: 'product_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_large/75933013ffe25c18a463107b226cebb3/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 20,
                            label: 'product_medium',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_medium/775d52fb6838e7916f0eababca044295/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 20,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                            uid: 'aWQ6MjAtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                        {
                            id: 21,
                            label: 'product_original',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_original/87ce74c18aefc3f765aae166bfe23016/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 21,
                            label: 'product_extra_large',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_extra_large/abe5781f01e0d4c0414089db5f53322a/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 21,
                            label: 'product_small',
                            disabled: false,
                            file: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/48/6331371b44a5b561493337-download_5__1_4.png',
                            uid: 'aWQ6MjEtZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
                        },
                    ],
                    price_range: {
                        minimum_price: {
                            regular_price: { currency: 'AUD', value: 19 },
                            final_price: { currency: 'AUD', value: 19 },
                        },
                        maximum_price: {
                            regular_price: { currency: 'AUD', value: 19 },
                            final_price: { currency: 'AUD', value: 19 },
                        },
                    },
                    price_tiers: [],
                    rating_summary: 0,
                    redirect_code: 0,
                    reviews: {
                        items: [],
                        page_info: { current_page: 0, page_size: 0, total_pages: 0 },
                    },
                    review_count: 0,
                    sku: 'HOODIE-SY',
                    small_image: {
                        url: '/media/cache/attachment/filter/product_small/40d7094f39b9f0476463795a7e9ac339/47/63313705e53ae870057940-download_1_4.png',
                        maxWidth: 82,
                        maxHeight: 82,
                        dimension: 'product_small',
                        url_webp:
                            '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/47/63313705e53ae870057940-download_1_4.png.webp',
                        types: ['main', 'listing'],
                    },
                    staged: false,
                    stock_status: 'OUT_OF_STOCK',
                    uid: 'OQ==',
                },
                __typename: 'ConfigurableVariant',
            },
        ],
        configurable_options: [],
        __typename: 'ConfigurableProduct',
    },
];
