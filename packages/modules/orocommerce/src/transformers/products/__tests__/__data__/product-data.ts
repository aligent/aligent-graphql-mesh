export const oroProducts = [
    {
        type: 'products',
        id: '12',
        links: { self: 'https://aligent.oro-cloud.com/api/products/12' },
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
                '<div id="isolation-scope-9g6aw0a9x3jbp8ftbuod16944" class="cms-wrapper"><div>Whether you&#039;re after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You&#039;ll stay warm and look fashionable, wherever you are.</div><br/><div> </div><br/><div> • Light green heathered hoodie. </div><br/><div> • Long-Sleeve, pullover.</div><br/><div> • Long elliptical hem for extra coverage.</div><br/><div> • Deep button placket for layering.</div><br/><div> • Double rib design.</div><br/><div> • Mid layer, mid weight.</div><br/><div> • 98% Merino Wool / 2% Spandex</div></div>',
            productAttributes: { size_63313224a7189: null, size_633132c50db9e: null },
            unitPrecisions: [{ unit: 'each', precision: 0, conversionRate: 1, default: true }],
            url: '/mona-pullover-hoodlie',
            urls: [],
            prices: [{ price: '57.0000', currencyId: 'AUD', quantity: '0', unit: 'each' }],
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
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/images',
                    related: 'https://aligent.oro-cloud.com/api/products/12/images',
                },
                data: [
                    { type: 'productimages', id: '23' },
                    { type: 'productimages', id: '24' },
                    { type: 'productimages', id: '22' },
                ],
            },
            productFamily: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/productFamily',
                    related: 'https://aligent.oro-cloud.com/api/products/12/productFamily',
                },
                data: { type: 'productfamilies', id: '2' },
            },
            brand: { data: null },
            kitItems: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/kitItems',
                    related: 'https://aligent.oro-cloud.com/api/products/12/kitItems',
                },
                data: [],
            },
            category: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/category',
                    related: 'https://aligent.oro-cloud.com/api/products/12/category',
                },
                data: { type: 'mastercatalogcategories', id: '7' },
            },
            inventoryStatus: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/inventoryStatus',
                    related: 'https://aligent.oro-cloud.com/api/products/12/inventoryStatus',
                },
                data: { type: 'productinventorystatuses', id: 'in_stock' },
            },
            variantProducts: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/variantProducts',
                    related: 'https://aligent.oro-cloud.com/api/products/12/variantProducts',
                },
                data: [
                    { type: 'products', id: '9' },
                    { type: 'products', id: '7' },
                    { type: 'products', id: '6' },
                    { type: 'products', id: '10' },
                ],
            },
            parentProducts: {
                links: {
                    self: 'https://aligent.oro-cloud.com/api/products/12/relationships/parentProducts',
                    related: 'https://aligent.oro-cloud.com/api/products/12/parentProducts',
                },
                data: [],
            },
        },
        included: [
            {
                type: 'productimages',
                id: '23',
                links: { self: 'https://aligent.oro-cloud.com/api/productimages/23' },
                attributes: {
                    updatedAt: '2023-10-27T01:50:22Z',
                    mimeType: 'image/jpeg',
                    types: [],
                    files: [],
                },
                relationships: {
                    product: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/productimages/23/relationships/product',
                            related: 'https://aligent.oro-cloud.com/api/productimages/23/product',
                        },
                        data: { type: 'products', id: '12' },
                    },
                },
            },
            {
                type: 'productimages',
                id: '24',
                links: { self: 'https://aligent.oro-cloud.com/api/productimages/24' },
                attributes: {
                    updatedAt: '2023-10-27T01:50:22Z',
                    mimeType: 'image/jpeg',
                    types: [],
                    files: [],
                },
                relationships: {
                    product: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/productimages/24/relationships/product',
                            related: 'https://aligent.oro-cloud.com/api/productimages/24/product',
                        },
                        data: { type: 'products', id: '12' },
                    },
                },
            },
            {
                type: 'productimages',
                id: '22',
                links: { self: 'https://aligent.oro-cloud.com/api/productimages/22' },
                attributes: {
                    updatedAt: '2023-10-27T02:19:31Z',
                    mimeType: 'image/jpeg',
                    types: ['main'],
                    files: [
                        {
                            url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: null,
                            maxHeight: null,
                            dimension: 'product_original',
                            url_webp:
                                '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 610,
                            maxHeight: 610,
                            dimension: 'product_gallery_popup',
                            url_webp:
                                '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 378,
                            maxHeight: 'auto',
                            dimension: 'product_gallery_main',
                            url_webp:
                                '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 316,
                            maxHeight: 'auto',
                            dimension: 'product_large',
                            url_webp:
                                '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 378,
                            maxHeight: 378,
                            dimension: 'product_extra_large',
                            url_webp:
                                '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 262,
                            maxHeight: 'auto',
                            dimension: 'product_medium',
                            url_webp:
                                '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                        {
                            url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                            maxWidth: 82,
                            maxHeight: 82,
                            dimension: 'product_small',
                            url_webp:
                                '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                            types: ['main'],
                        },
                    ],
                },
                relationships: {
                    product: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/productimages/22/relationships/product',
                            related: 'https://aligent.oro-cloud.com/api/productimages/22/product',
                        },
                        data: { type: 'products', id: '12' },
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
                included: [
                    {
                        type: 'productimages',
                        id: '23',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/23' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/23/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/23/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '24',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/24' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/24/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/24/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '22',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/22' },
                        attributes: {
                            updatedAt: '2023-10-27T02:19:31Z',
                            mimeType: 'image/jpeg',
                            types: ['main'],
                            files: [
                                {
                                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: null,
                                    maxHeight: null,
                                    dimension: 'product_original',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 610,
                                    maxHeight: 610,
                                    dimension: 'product_gallery_popup',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 'auto',
                                    dimension: 'product_gallery_main',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 316,
                                    maxHeight: 'auto',
                                    dimension: 'product_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 378,
                                    dimension: 'product_extra_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 262,
                                    maxHeight: 'auto',
                                    dimension: 'product_medium',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 82,
                                    maxHeight: 82,
                                    dimension: 'product_small',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                            ],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/22/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/22/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                ],
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
                included: [
                    {
                        type: 'productimages',
                        id: '23',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/23' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/23/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/23/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '24',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/24' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/24/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/24/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '22',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/22' },
                        attributes: {
                            updatedAt: '2023-10-27T02:19:31Z',
                            mimeType: 'image/jpeg',
                            types: ['main'],
                            files: [
                                {
                                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: null,
                                    maxHeight: null,
                                    dimension: 'product_original',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 610,
                                    maxHeight: 610,
                                    dimension: 'product_gallery_popup',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 'auto',
                                    dimension: 'product_gallery_main',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 316,
                                    maxHeight: 'auto',
                                    dimension: 'product_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 378,
                                    dimension: 'product_extra_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 262,
                                    maxHeight: 'auto',
                                    dimension: 'product_medium',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 82,
                                    maxHeight: 82,
                                    dimension: 'product_small',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                            ],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/22/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/22/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                ],
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
                included: [
                    {
                        type: 'productimages',
                        id: '23',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/23' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/23/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/23/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '24',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/24' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/24/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/24/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '22',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/22' },
                        attributes: {
                            updatedAt: '2023-10-27T02:19:31Z',
                            mimeType: 'image/jpeg',
                            types: ['main'],
                            files: [
                                {
                                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: null,
                                    maxHeight: null,
                                    dimension: 'product_original',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 610,
                                    maxHeight: 610,
                                    dimension: 'product_gallery_popup',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 'auto',
                                    dimension: 'product_gallery_main',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 316,
                                    maxHeight: 'auto',
                                    dimension: 'product_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 378,
                                    dimension: 'product_extra_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 262,
                                    maxHeight: 'auto',
                                    dimension: 'product_medium',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 82,
                                    maxHeight: 82,
                                    dimension: 'product_small',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                            ],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/22/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/22/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                ],
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
                included: [
                    {
                        type: 'productimages',
                        id: '23',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/23' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/23/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/23/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '24',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/24' },
                        attributes: {
                            updatedAt: '2023-10-27T01:50:22Z',
                            mimeType: 'image/jpeg',
                            types: [],
                            files: [],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/24/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/24/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                    {
                        type: 'productimages',
                        id: '22',
                        links: { self: 'https://aligent.oro-cloud.com/api/productimages/22' },
                        attributes: {
                            updatedAt: '2023-10-27T02:19:31Z',
                            mimeType: 'image/jpeg',
                            types: ['main'],
                            files: [
                                {
                                    url: '/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: null,
                                    maxHeight: null,
                                    dimension: 'product_original',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_original/4dbc178c2ebed276168fb5a715adf9ec/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 610,
                                    maxHeight: 610,
                                    dimension: 'product_gallery_popup',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_popup/5e23e551f9c58b3ed2cbcdcaf72c28fc/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 'auto',
                                    dimension: 'product_gallery_main',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_gallery_main/9e256c59daf1c360fa2a692e1a4d8eeb/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 316,
                                    maxHeight: 'auto',
                                    dimension: 'product_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_large/ca048c1dad6aff04975c90c926869a37/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 378,
                                    maxHeight: 378,
                                    dimension: 'product_extra_large',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_extra_large/de49a9f899e6dc68356803fcbffb2688/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 262,
                                    maxHeight: 'auto',
                                    dimension: 'product_medium',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_medium/418ba2755486ce8918a39c6116251ef5/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                                {
                                    url: '/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                                    maxWidth: 82,
                                    maxHeight: 82,
                                    dimension: 'product_small',
                                    url_webp:
                                        '/media/cache/attachment/filter/product_small/0430df4fe419ef8f86126998d83a639e/56/653b166935ea7214964398-wh01-green_main.jpg.webp',
                                    types: ['main'],
                                },
                            ],
                        },
                        relationships: {
                            product: {
                                links: {
                                    self: 'https://aligent.oro-cloud.com/api/productimages/22/relationships/product',
                                    related:
                                        'https://aligent.oro-cloud.com/api/productimages/22/product',
                                },
                                data: { type: 'products', id: '12' },
                            },
                        },
                    },
                ],
            },
            {
                type: 'mastercatalogcategories',
                id: '1',
                links: { self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/1' },
                attributes: {
                    createdAt: '2022-08-26T10:34:23Z',
                    updatedAt: '2022-08-26T10:34:23Z',
                    title: 'All Products',
                    shortDescription: null,
                    description: null,
                    url: null,
                    urls: [],
                    images: [],
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    categoryPath: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/1/relationships/categoryPath',
                            related:
                                'https://aligent.oro-cloud.com/api/mastercatalogcategories/1/categoryPath',
                        },
                        data: [],
                    },
                },
            },
            {
                type: 'mastercatalogcategories',
                id: '5',
                links: { self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/5' },
                attributes: {
                    createdAt: '2023-10-27T01:41:03Z',
                    updatedAt: '2023-10-27T01:41:05Z',
                    title: 'Women',
                    shortDescription: null,
                    description: null,
                    url: '/women',
                    urls: [],
                    images: [],
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    categoryPath: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/5/relationships/categoryPath',
                            related:
                                'https://aligent.oro-cloud.com/api/mastercatalogcategories/5/categoryPath',
                        },
                        data: [{ type: 'mastercatalogcategories', id: '1' }],
                    },
                },
            },
            {
                type: 'mastercatalogcategories',
                id: '6',
                links: { self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/6' },
                attributes: {
                    createdAt: '2023-10-27T01:41:32Z',
                    updatedAt: '2023-10-27T01:41:33Z',
                    title: 'Tops',
                    shortDescription: null,
                    description: null,
                    url: '/tops',
                    urls: [],
                    images: [],
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    categoryPath: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/6/relationships/categoryPath',
                            related:
                                'https://aligent.oro-cloud.com/api/mastercatalogcategories/6/categoryPath',
                        },
                        data: [
                            { type: 'mastercatalogcategories', id: '1' },
                            { type: 'mastercatalogcategories', id: '5' },
                        ],
                    },
                },
            },
            {
                type: 'mastercatalogcategories',
                id: '7',
                links: { self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/7' },
                attributes: {
                    createdAt: '2023-10-27T01:41:50Z',
                    updatedAt: '2023-10-27T01:57:11Z',
                    title: 'Hoodies & Sweatshirts',
                    shortDescription: null,
                    description: null,
                    url: '/hoodies-sweatshirts',
                    urls: [],
                    images: [],
                    metaTitle: null,
                    metaDescription: null,
                    metaKeywords: null,
                },
                relationships: {
                    categoryPath: {
                        links: {
                            self: 'https://aligent.oro-cloud.com/api/mastercatalogcategories/7/relationships/categoryPath',
                            related:
                                'https://aligent.oro-cloud.com/api/mastercatalogcategories/7/categoryPath',
                        },
                        data: [
                            { type: 'mastercatalogcategories', id: '1' },
                            { type: 'mastercatalogcategories', id: '5' },
                            { type: 'mastercatalogcategories', id: '6' },
                        ],
                    },
                },
            },
        ],
    },
];

export const outputProducts = [
    {
        categories: [
            {
                type: 'CATEGORY',
                __typename: 'CategoryTree',
                created_at: '2022-08-26T10:34:23Z',
                id: 1,
                uid: 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjEifQ==',
                staged: true,
                name: 'All Products',
                level: 1,
                redirect_code: 0,
                description: null,
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                url_path: null,
                image: null,
            },
            {
                type: 'CATEGORY',
                __typename: 'CategoryTree',
                created_at: '2023-10-27T01:41:03Z',
                id: 5,
                uid: 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjUifQ==',
                staged: true,
                name: 'Women',
                level: 2,
                redirect_code: 0,
                description: null,
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                url_path: '/women',
                image: null,
            },
            {
                type: 'CATEGORY',
                __typename: 'CategoryTree',
                created_at: '2023-10-27T01:41:32Z',
                id: 6,
                uid: 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjYifQ==',
                staged: true,
                name: 'Tops',
                level: 3,
                redirect_code: 0,
                description: null,
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                url_path: '/tops',
                image: null,
            },
            {
                type: 'CATEGORY',
                __typename: 'CategoryTree',
                created_at: '2023-10-27T01:41:50Z',
                id: 7,
                uid: 'eyJ0eXBlIjoibWFzdGVyY2F0YWxvZ2NhdGVnb3JpZXMiLCJpZCI6IjcifQ==',
                staged: true,
                name: 'Hoodies & Sweatshirts',
                level: 4,
                redirect_code: 0,
                description: null,
                meta_title: null,
                meta_description: null,
                meta_keywords: null,
                url_path: '/hoodies-sweatshirts',
                image: null,
            },
        ],
        description: {
            __typename: 'ComplexTextValue',
            html: '<div id="isolation-scope-9g6aw0a9x3jbp8ftbuod16944" class="cms-wrapper"><div>Whether you&#039;re after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You&#039;ll stay warm and look fashionable, wherever you are.</div><br/><div> </div><br/><div> • Light green heathered hoodie. </div><br/><div> • Long-Sleeve, pullover.</div><br/><div> • Long elliptical hem for extra coverage.</div><br/><div> • Deep button placket for layering.</div><br/><div> • Double rib design.</div><br/><div> • Mid layer, mid weight.</div><br/><div> • 98% Merino Wool / 2% Spandex</div></div>',
        },
        staged: true,
        uid: 'MTI=',
        custom_attributes: [],
        id: 12,
        media_gallery_entries: [
            {
                id: 23,
                label: 'product_original',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 1,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
            },
            {
                id: 24,
                label: 'product_gallery_popup',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 2,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
            },
            {
                id: 25,
                label: 'product_gallery_main',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 3,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
            },
            {
                id: 26,
                label: 'product_large',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 4,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
            },
            {
                id: 27,
                label: 'product_extra_large',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 5,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
            },
            {
                id: 28,
                label: 'product_medium',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 6,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
            },
            {
                id: 29,
                label: 'product_small',
                disabled: false,
                file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                position: 7,
                uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
            },
        ],
        meta_title: null,
        meta_keyword: null,
        meta_description: null,
        name: 'Mona Pullover Hoodlie',
        price: null,
        price_range: {
            minimum_price: {
                regular_price: { currency: 'AUD', value: 57 },
                final_price: { currency: 'AUD', value: 57 },
                discount: { amount_off: 0 },
            },
            maximum_price: {
                regular_price: { currency: 'AUD', value: 57 },
                final_price: { currency: 'AUD', value: 57 },
            },
        },
        price_tiers: [],
        redirect_code: 0,
        rating_summary: 0,
        review_count: 0,
        related_products: null,
        sku: 'WH01',
        small_image: {
            url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
            label: 'product_small',
        },
        image: {
            url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
            label: 'product_original',
        },
        type: 'PRODUCT',
        stock_status: 'IN_STOCK',
        url_key: 'mona-pullover-hoodlie',
        url_suffix: '',
        reviews: {
            __typename: 'ProductReviews',
            items: [],
            page_info: { current_page: 0, page_size: 0, total_pages: 0 },
        },
        variants: [
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
                            id: 23,
                            label: 'product_original',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 1,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 24,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 2,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 25,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 3,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 26,
                            label: 'product_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 4,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 27,
                            label: 'product_extra_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 5,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 28,
                            label: 'product_medium',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 6,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 29,
                            label: 'product_small',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 7,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
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
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                        label: 'product_small',
                    },
                    staged: false,
                    stock_status: 'OUT_OF_STOCK',
                    uid: 'OQ==',
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
                            id: 23,
                            label: 'product_original',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 1,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 24,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 2,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 25,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 3,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 26,
                            label: 'product_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 4,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 27,
                            label: 'product_extra_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 5,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 28,
                            label: 'product_medium',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 6,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 29,
                            label: 'product_small',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 7,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
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
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                        label: 'product_small',
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
                            id: 23,
                            label: 'product_original',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 1,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 24,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 2,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 25,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 3,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 26,
                            label: 'product_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 4,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 27,
                            label: 'product_extra_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 5,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 28,
                            label: 'product_medium',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 6,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 29,
                            label: 'product_small',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 7,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
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
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                        label: 'product_small',
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
                            id: 23,
                            label: 'product_original',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_original/1ce6569ddaa67bc2162be5030a1ac716/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 1,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfb3JpZ2luYWw=',
                        },
                        {
                            id: 24,
                            label: 'product_gallery_popup',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_popup/098f408deb471e628613685fa97b1968/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 2,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9wb3B1cA==',
                        },
                        {
                            id: 25,
                            label: 'product_gallery_main',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_gallery_main/cfd646b508e8eaf0ad3fa52d426f48a6/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 3,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZ2FsbGVyeV9tYWlu',
                        },
                        {
                            id: 26,
                            label: 'product_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_large/484cb95e4abcb58ccab27f13d1a6188b/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 4,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbGFyZ2U=',
                        },
                        {
                            id: 27,
                            label: 'product_extra_large',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_extra_large/611b34cf36199f7491b40a557dad14a9/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 5,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfZXh0cmFfbGFyZ2U=',
                        },
                        {
                            id: 28,
                            label: 'product_medium',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_medium/c3f301e68dee27d69af5c17c4acfe7ea/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 6,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3RfbWVkaXVt',
                        },
                        {
                            id: 29,
                            label: 'product_small',
                            disabled: false,
                            file: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                            position: 7,
                            uid: 'aWQ6MjItZGltZW5zaW9uOnByb2R1Y3Rfc21hbGw=',
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
                        url: 'https://aligent.oro-cloud.com/media/cache/attachment/filter/product_small/5ffc023aed34cd80eccf6957058b520e/56/653b166935ea7214964398-wh01-green_main.jpg',
                        label: 'product_small',
                    },
                    staged: false,
                    stock_status: 'IN_STOCK',
                    uid: 'MTA=',
                },
                __typename: 'ConfigurableVariant',
            },
        ],
        configurable_options: [],
        __typename: 'ConfigurableProduct',
    },
];
