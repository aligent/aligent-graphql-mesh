import { MetafieldConnection } from '@aligent/bigcommerce-operations';

export const mockBcProducts = [
    {
        __typename: 'Product',
        brand: null,
        id: 'UHJvZHVjdDo0OTI=',
        entityId: 492,
        sku: 'WH01',
        name: 'Mona Pullover Hoodlie',
        addToCartUrl: 'https://aligent.mybigcommerce.com/cart.php?action=add&product_id=492',
        description:
            "<p>Whether you're after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You'll stay warm and look fashionable, wherever you are.&lt;br /&gt; &lt;br /&gt; &amp;bull; Light green heathered hoodie. &lt;br /&gt; &amp;bull; Long-Sleeve, pullover.&lt;br /&gt; &amp;bull; Long elliptical hem for extra coverage.&lt;br /&gt; &amp;bull; Deep button placket for layering.&lt;br /&gt; &amp;bull; Double rib design.&lt;br /&gt; &amp;bull; Mid layer, mid weight.&lt;br /&gt; &amp;bull; 98% Merino Wool / 2% Spandex</p>",
        defaultImage: {
            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
            urlOriginal:
                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/401/wh01-green_main__96543.1690452070.jpg',
            altText: '',
            isDefault: true,
            urlTemplate: '',
        },
        seo: {
            pageTitle: 'Mona Pullover Hoodlie',
            metaDescription: 'This is the "Mona Pullover Hoodlie" meta_description',
            metaKeywords: '',
        },
        images: {
            edges: [
                {
                    node: {
                        url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/401/wh01-green_main__96543.1690452070.jpg',
                        urlOriginal:
                            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/401/wh01-green_main__96543.1690452070.jpg',
                        altText: '',
                        isDefault: true,
                        urlTemplate: '',
                    },
                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                },
                {
                    node: {
                        url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                        urlOriginal:
                            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/492/402/wh01-purple_main__43854.1690452461.jpg',
                        altText: '',
                        isDefault: false,
                        urlTemplate: '',
                    },
                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                },
            ],
        },
        categories: {
            edges: [
                {
                    node: {
                        id: 'Q2F0ZWdvcnk6NjA=',
                        entityId: 60,
                        name: 'Hoodies & Sweatshirts',
                        path: '/women/tops-women/hoodies-and-sweatshirts-women/',
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
                                        path: '/women/tops-women/',
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
        availabilityV2: {
            status: 'Available',
        },
        reviewSummary: {
            numberOfReviews: 2,
            summationOfRatings: 10,
        },
        reviews: {
            edges: [
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                    node: {
                        entityId: 4,
                        author: {
                            name: 'John',
                        },
                        title: 'Great product',
                        text: 'I want more of this',
                        rating: 5,
                        createdAt: {
                            utc: '2019-08-24T14:15:22Z',
                        },
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
        path: '/mona-pullover-hoodlie/',
        prices: {
            bulkPricing: [],
            saved: null,
            salePrice: {
                value: 10.0,
                currencyCode: 'AUD',
            },
            retailPriceRange: null,
            retailPrice: null,
            priceRange: {
                min: {
                    value: 10.0,
                    currencyCode: 'AUD',
                },
                max: {
                    value: 57.0,
                    currencyCode: 'AUD',
                },
            },
            price: {
                value: 10.0,
                currencyCode: 'AUD',
            },
            mapPrice: null,
            basePrice: {
                value: 57.0,
                currencyCode: 'AUD',
            },
        },
        productOptions: {
            edges: [
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                    node: {
                        entityId: 148,
                        displayName: 'Color',
                        isRequired: true,
                        isVariantOption: true,
                        displayStyle: 'Swatch',
                        values: {
                            edges: [
                                {
                                    node: {
                                        entityId: 182,
                                        label: 'Green',
                                        isDefault: false,
                                        hexColors: ['#334B28'],
                                    },
                                },
                                {
                                    node: {
                                        entityId: 183,
                                        label: 'Purple',
                                        isDefault: false,
                                        hexColors: ['#EF3DFF'],
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                    node: {
                        entityId: 149,
                        displayName: 'Size',
                        isRequired: true,
                        isVariantOption: true,
                        displayStyle: 'RadioButtons',
                        values: {
                            edges: [
                                {
                                    node: {
                                        entityId: 184,
                                        label: 'S',
                                        isDefault: false,
                                    },
                                },
                                {
                                    node: {
                                        entityId: 185,
                                        label: 'M',
                                        isDefault: false,
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
            pageInfo: {
                hasNextPage: false,
                hasPreviousPage: false,
                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                endCursor: 'YXJyYXljb25uZWN0aW9uOjI=',
            },
        },
        relatedProducts: {
            edges: [
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                    node: {
                        brand: {
                            id: 'well',
                            name: 'Weller',
                        },
                        entityId: 491,
                        id: '10',
                        name: 'Rennsteig Individual Parallel Pin Punches - Multiple Sizes',
                        sku: '45002-45C',
                        addToCartUrl:
                            'https://aligent.mybigcommerce.com/cart.php?action=add&product_id=491',
                        prices: {
                            basePrice: {
                                currencyCode: 'AUD',
                                value: 10.82,
                            },
                            bulkPricing: [],
                            mapPrice: null,
                            price: {
                                currencyCode: 'AUD',
                                value: 10.82,
                            },
                            priceRange: {
                                min: {
                                    currencyCode: 'AUD',
                                    value: 10.82,
                                },
                                max: {
                                    currencyCode: 'AUD',
                                    value: 13.55,
                                },
                            },
                            retailPrice: null,
                            retailPriceRange: null,
                            salePrice: null,
                            saved: null,
                        },
                        defaultImage: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/491/400/45002-45c_001__86939.1690326868.jpg',
                            urlOriginal:
                                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/491/400/45002-45c_001__86939.1690326868.jpg',
                            altText: '',
                            isDefault: true,
                        },
                        images: {
                            edges: [
                                {
                                    node: {
                                        url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/products/491/400/45002-45c_001__86939.1690326868.jpg',
                                        urlOriginal:
                                            'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/products/491/400/45002-45c_001__86939.1690326868.jpg',
                                        altText: '',
                                        isDefault: true,
                                    },
                                },
                            ],
                        },
                        categories: {
                            edges: [
                                {
                                    node: {
                                        id: 'Q2F0ZWdvcnk6NTQ=',
                                        entityId: 54,
                                        name: 'Hand Tools',
                                        path: '/hand-tools/',
                                        defaultImage: null,
                                        description: '',
                                        breadcrumbs: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: 'Hand Tools',
                                                        entityId: 54,
                                                        path: '/hand-tools/',
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
                                        seo: {
                                            pageTitle: '',
                                            metaDescription: '',
                                            metaKeywords: '',
                                        },
                                        defaultProductSort: 'FEATURED',
                                    },
                                },
                                {
                                    node: {
                                        id: 'Q2F0ZWdvcnk6NTU=',
                                        entityId: 55,
                                        name: 'Striking Tools',
                                        path: '/hand-tools/striking-tools/',
                                        defaultImage: null,
                                        description: '',
                                        breadcrumbs: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: 'Hand Tools',
                                                        entityId: 54,
                                                        path: '/hand-tools/',
                                                    },
                                                },
                                                {
                                                    node: {
                                                        name: 'Striking Tools',
                                                        entityId: 55,
                                                        path: '/hand-tools/striking-tools/',
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
                                        seo: {
                                            pageTitle: '',
                                            metaDescription: '',
                                            metaKeywords: '',
                                        },
                                        defaultProductSort: 'FEATURED',
                                    },
                                },
                                {
                                    node: {
                                        id: 'Q2F0ZWdvcnk6NTY=',
                                        entityId: 56,
                                        name: 'Cold Chisels and Sets',
                                        path: '/hand-tools/striking-tools/cold-chisels-and-sets/',
                                        defaultImage: null,
                                        description: '',
                                        breadcrumbs: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: 'Hand Tools',
                                                        entityId: 54,
                                                        path: '/hand-tools/',
                                                    },
                                                },
                                                {
                                                    node: {
                                                        name: 'Striking Tools',
                                                        entityId: 55,
                                                        path: '/hand-tools/striking-tools/',
                                                    },
                                                },
                                                {
                                                    node: {
                                                        name: 'Cold Chisels and Sets',
                                                        entityId: 56,
                                                        path: '/hand-tools/striking-tools/cold-chisels-and-sets/',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                                            },
                                        },
                                        seo: {
                                            pageTitle: '',
                                            metaDescription: '',
                                            metaKeywords: '',
                                        },
                                        defaultProductSort: 'FEATURED',
                                    },
                                },
                            ],
                        },
                        path: '/rennsteig-individual-parallel-pin-punches-multiple-sizes/',
                        related_products: { edges: null },
                    },
                },
            ],
        },
        variants: {
            edges: [
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                    node: {
                        brand: 'Weller',
                        id: 'VmFyaWFudDo1MTM=',
                        entityId: 513,
                        sku: 'WH01-S-Green',
                        defaultImage: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/54_source_1690452039.jpg',
                            urlOriginal:
                                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/attribute_rule_images/54_source_1690452039.jpg',
                            altText: '',
                            isDefault: true,
                        },
                        prices: {
                            basePrice: {
                                currencyCode: 'AUD',
                                value: 70.0,
                            },
                            bulkPricing: [],
                            mapPrice: null,
                            price: {
                                currencyCode: 'AUD',
                                value: 30.0,
                            },
                            priceRange: {
                                min: {
                                    currencyCode: 'AUD',
                                    value: 30.0,
                                },
                                max: {
                                    currencyCode: 'AUD',
                                    value: 30.0,
                                },
                            },
                            retailPrice: null,
                            retailPriceRange: null,
                            salePrice: {
                                currencyCode: 'AUD',
                                value: 30.0,
                            },
                            saved: null,
                        },
                        options: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        isRequired: true,
                                        entityId: 148,
                                        displayName: 'Color',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 182,
                                                        label: 'Green',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        isRequired: true,
                                        entityId: 149,
                                        displayName: 'Size',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 184,
                                                        label: 'S',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        productOptions: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        entityId: 148,
                                        displayName: 'Color',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'Swatch',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 182,
                                                        label: 'Green',
                                                        isDefault: false,
                                                        hexColors: ['#334B28'],
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        entityId: 149,
                                        displayName: 'Size',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'RadioButtons',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 184,
                                                        label: 'S',
                                                        isDefault: false,
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        inventory: {
                            isInStock: true,
                        },
                        isPurchasable: true,
                        metafields: {} as MetafieldConnection,
                    },
                },
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                    node: {
                        brand: 'Weller',
                        id: 'VmFyaWFudDo1MTQ=',
                        entityId: 514,
                        sku: 'WH01-M-Green',
                        defaultImage: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/57_source_1690452040.jpg',
                            urlOriginal:
                                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/attribute_rule_images/57_source_1690452040.jpg',
                            altText: '',
                            isDefault: true,
                        },
                        prices: {
                            basePrice: {
                                currencyCode: 'AUD',
                                value: 57.0,
                            },
                            bulkPricing: [],
                            mapPrice: null,
                            price: {
                                currencyCode: 'AUD',
                                value: 40.0,
                            },
                            priceRange: {
                                min: {
                                    currencyCode: 'AUD',
                                    value: 40.0,
                                },
                                max: {
                                    currencyCode: 'AUD',
                                    value: 40.0,
                                },
                            },
                            retailPrice: null,
                            retailPriceRange: null,
                            salePrice: {
                                currencyCode: 'AUD',
                                value: 40.0,
                            },
                            saved: null,
                        },
                        options: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        isRequired: true,
                                        entityId: 148,
                                        displayName: 'Color',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 182,
                                                        label: 'Green',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        isRequired: true,
                                        entityId: 149,
                                        displayName: 'Size',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 185,
                                                        label: 'M',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        productOptions: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        entityId: 148,
                                        displayName: 'Color',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'Swatch',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 182,
                                                        label: 'Green',
                                                        isDefault: false,
                                                        hexColors: ['#334B28'],
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        entityId: 149,
                                        displayName: 'Size',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'RadioButtons',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 185,
                                                        label: 'M',
                                                        isDefault: false,
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        inventory: {
                            isInStock: true,
                        },
                        isPurchasable: true,
                        metafields: {} as MetafieldConnection,
                    },
                },
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                    node: {
                        brand: 'Weller',
                        id: 'VmFyaWFudDo1MTU=',
                        entityId: 515,
                        sku: 'WH01-S-Purple',
                        defaultImage: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/58_source_1690452040.jpg',
                            urlOriginal:
                                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/attribute_rule_images/58_source_1690452040.jpg',
                            altText: '',
                            isDefault: true,
                        },
                        prices: {
                            basePrice: {
                                currencyCode: 'AUD',
                                value: 57.0,
                            },
                            bulkPricing: [],
                            mapPrice: null,
                            price: {
                                currencyCode: 'AUD',
                                value: 57.0,
                            },
                            priceRange: {
                                min: {
                                    currencyCode: 'AUD',
                                    value: 57.0,
                                },
                                max: {
                                    currencyCode: 'AUD',
                                    value: 57.0,
                                },
                            },
                            retailPrice: null,
                            retailPriceRange: null,
                            salePrice: null,
                            saved: null,
                        },
                        options: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        isRequired: true,
                                        entityId: 148,
                                        displayName: 'Color',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 183,
                                                        label: 'Purple',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        isRequired: true,
                                        entityId: 149,
                                        displayName: 'Size',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 184,
                                                        label: 'S',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        productOptions: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        entityId: 148,
                                        displayName: 'Color',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'Swatch',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 183,
                                                        label: 'Purple',
                                                        isDefault: false,
                                                        hexColors: ['#EF3DFF'],
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        entityId: 149,
                                        displayName: 'Size',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'RadioButtons',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 184,
                                                        label: 'S',
                                                        isDefault: false,
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        inventory: {
                            isInStock: true,
                        },
                        isPurchasable: true,
                        metafields: {} as MetafieldConnection,
                    },
                },
                {
                    cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
                    node: {
                        brand: 'Weller',
                        id: 'VmFyaWFudDo1MTY=',
                        entityId: 516,
                        sku: 'WH01-M-Purple',
                        defaultImage: {
                            url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/56_source_1690452040.jpg',
                            urlOriginal:
                                'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/original/attribute_rule_images/56_source_1690452040.jpg',
                            altText: '',
                            isDefault: true,
                        },
                        prices: {
                            basePrice: {
                                currencyCode: 'AUD',
                                value: 57.0,
                            },
                            bulkPricing: [],
                            mapPrice: null,
                            price: {
                                currencyCode: 'AUD',
                                value: 10.0,
                            },
                            priceRange: {
                                min: {
                                    currencyCode: 'AUD',
                                    value: 10.0,
                                },
                                max: {
                                    currencyCode: 'AUD',
                                    value: 10.0,
                                },
                            },
                            retailPrice: null,
                            retailPriceRange: null,
                            salePrice: {
                                currencyCode: 'AUD',
                                value: 10.0,
                            },
                            saved: null,
                        },
                        options: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        isRequired: true,
                                        entityId: 148,
                                        displayName: 'Color',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 183,
                                                        label: 'Purple',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        isRequired: true,
                                        entityId: 149,
                                        displayName: 'Size',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 185,
                                                        label: 'M',
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        productOptions: {
                            edges: [
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                    node: {
                                        entityId: 148,
                                        displayName: 'Color',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'Swatch',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 183,
                                                        label: 'Purple',
                                                        isDefault: false,
                                                        hexColors: ['#EF3DFF'],
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                                {
                                    cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                    node: {
                                        entityId: 149,
                                        displayName: 'Size',
                                        isRequired: true,
                                        isVariantOption: true,
                                        displayStyle: 'RadioButtons',
                                        values: {
                                            edges: [
                                                {
                                                    cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                    node: {
                                                        entityId: 185,
                                                        label: 'M',
                                                        isDefault: false,
                                                    },
                                                },
                                            ],
                                            pageInfo: {
                                                endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                                hasNextPage: false,
                                                hasPreviousPage: false,
                                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                                            },
                                        },
                                    },
                                },
                            ],
                            pageInfo: {
                                endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                                hasNextPage: false,
                                hasPreviousPage: false,
                                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                            },
                        },
                        inventory: {
                            isInStock: true,
                        },
                        isPurchasable: true,
                        metafields: {} as MetafieldConnection,
                    },
                },
            ],
            pageInfo: {
                endCursor: 'YXJyYXljb25uZWN0aW9uOjM=',
                hasNextPage: false,
                hasPreviousPage: false,
                startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            },
        },
    },
];
