export const productsMock = {
    items: [
        {
            __typename: 'ConfigurableProduct',
            categories: [
                {
                    uid: 'MTI=',
                    breadcrumbs: null,
                    name: 'Men',
                    level: 2,
                    __typename: 'CategoryTree',
                },
                {
                    uid: 'MTM=',
                    breadcrumbs: [
                        {
                            category_uid: 'MTI=',
                            category_name: 'Men',
                            __typename: 'Breadcrumb',
                        },
                    ],
                    name: 'Tops',
                    level: 3,
                    __typename: 'CategoryTree',
                },
                {
                    uid: 'MjE=',
                    breadcrumbs: null,
                    name: 'Women',
                    level: 2,
                    __typename: 'CategoryTree',
                },
                {
                    uid: 'MjI=',
                    breadcrumbs: [
                        {
                            category_uid: 'MjE=',
                            category_name: 'Women',
                            __typename: 'Breadcrumb',
                        },
                    ],
                    name: 'Tops',
                    level: 3,
                    __typename: 'CategoryTree',
                },
            ],
            description: {
                html:
                    '<style>#html-body [data-pb-style=Y4JPADI]{display:flex;flex-direction:column}</style><div data-content-type="row" data-appearance="contained" data-element="main"><div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-background-type="image" data-video-loop="true" data-video-play-only-visible="true" data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="Y4JPADI"><div data-content-type="text" data-appearance="default" data-element="main"><p>This hoodie has been specifically set up to be able to test the feature of configuration variations.</p>\r\n<p>For this contrived example of a product:</p>\r\n<ul>\r\n<li>When the Lavendar colour is selected, only sizes XS, M and XL should be available.</li>\r\n<li>When the White colour is selected, only sizes S and L should be available.</li>\r\n<li>When the Yellow colour is selected, all sizes should be available.</li>\r\n</ul>\r\n<p>This isn\'t to do with stock levels, but rather the variation just not existing, and not being one that can be purchased.</p></div></div></div>',
                __typename: 'ComplexTextValue',
            },
            id: 2767,
            media_gallery_entries: [
                {
                    id: 3619,
                    label: ',,',
                    position: 1,
                    disabled: false,
                    file: '/d/o/download_1_4.png',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 3620,
                    label: null,
                    position: 2,
                    disabled: false,
                    file: '/d/o/download_1__1_4.png',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 3621,
                    label: null,
                    position: 3,
                    disabled: false,
                    file: '/d/o/download_5__1_4.png',
                    __typename: 'MediaGalleryEntry',
                },
            ],
            meta_title: 'Aligent Hoodie',
            meta_keyword: 'Aligent Hoodie',
            meta_description: 'Aligent Hoodie ',
            name: 'Makita 40V Max Brushless 6 Piece Combo Kit',
            price: {
                regularPrice: {
                    amount: {
                        currency: 'AUD',
                        value: 51,
                        __typename: 'Money',
                    },
                    __typename: 'Price',
                },
                __typename: 'ProductPrices',
            },
            price_range: {
                maximum_price: {
                    discount: {
                        amount_off: 0,
                        percent_off: 0,
                        __typename: 'ProductDiscount',
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 59,
                        __typename: 'Money',
                    },
                    regular_price: {
                        currency: 'AUD',
                        value: 59,
                        __typename: 'Money',
                    },
                    __typename: 'ProductPrice',
                },
                minimum_price: {
                    discount: {
                        amount_off: 0,
                        percent_off: 0,
                        __typename: 'ProductDiscount',
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 51,
                        __typename: 'Money',
                    },
                    regular_price: {
                        currency: 'AUD',
                        value: 51,
                        __typename: 'Money',
                    },
                    __typename: 'ProductPrice',
                },
                __typename: 'PriceRange',
            },
            price_tiers: [],
            rating_summary: 0,
            review_count: 0,
            related_products: [],
            sku: 'DK0115G601',
            small_image: {
                url:
                    'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/d/o/download_1_4.png',
                __typename: 'ProductImage',
            },
            stock_status: 'IN_STOCK',
            url_key: 'makita-40v-max-brushless-6-piece-combo-kit',
            url_suffix: '',
            configurable_options: [
                {
                    attribute_code: 'color',
                    attribute_id: '93',
                    id: 305,
                    label: 'Color',
                    position: 0,
                    values: [
                        {
                            default_label: 'Lavender',
                            label: 'Lavender',
                            store_label: 'Lavender',
                            use_default_value: true,
                            value_index: 63,
                            swatch_data: {
                                value: '#ce64d4',
                                __typename: 'ColorSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzkzLzYz',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'White',
                            label: 'White',
                            store_label: 'White',
                            use_default_value: true,
                            value_index: 68,
                            swatch_data: {
                                value: '#ffffff',
                                __typename: 'ColorSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzkzLzY4',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'Yellow',
                            label: 'Yellow',
                            store_label: 'Yellow',
                            use_default_value: true,
                            value_index: 69,
                            swatch_data: {
                                value: '#ffd500',
                                __typename: 'ColorSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzkzLzY5',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                    ],
                    __typename: 'ConfigurableProductOptions',
                },
                {
                    attribute_code: 'size',
                    attribute_id: '187',
                    id: 306,
                    label: 'Size',
                    position: 1,
                    values: [
                        {
                            default_label: 'XS',
                            label: 'XS',
                            store_label: 'XS',
                            use_default_value: true,
                            value_index: 179,
                            swatch_data: {
                                value: 'XS',
                                __typename: 'TextSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzE4Ny8xNzk=',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'S',
                            label: 'S',
                            store_label: 'S',
                            use_default_value: true,
                            value_index: 180,
                            swatch_data: {
                                value: 'S',
                                __typename: 'TextSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzE4Ny8xODA=',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'M',
                            label: 'M',
                            store_label: 'M',
                            use_default_value: true,
                            value_index: 181,
                            swatch_data: {
                                value: 'M',
                                __typename: 'TextSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzE4Ny8xODE=',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'L',
                            label: 'L',
                            store_label: 'L',
                            use_default_value: true,
                            value_index: 182,
                            swatch_data: {
                                value: 'L',
                                __typename: 'TextSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzE4Ny8xODI=',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'XL',
                            label: 'XL',
                            store_label: 'XL',
                            use_default_value: true,
                            value_index: 183,
                            swatch_data: {
                                value: 'XL',
                                __typename: 'TextSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzE4Ny8xODM=',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                    ],
                    __typename: 'ConfigurableProductOptions',
                },
            ],
            variants: [
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 63,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 183,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2777,
                        media_gallery_entries: [
                            {
                                id: 3631,
                                disabled: false,
                                file: '/d/o/download_4__3_5.png',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Lavender-XL',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 56,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 56,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 63,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 181,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2776,
                        media_gallery_entries: [
                            {
                                id: 3630,
                                disabled: false,
                                file: '/d/o/download_4__3_3.png',
                                label: null,
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Lavender-M',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 51,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 51,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 63,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 179,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2775,
                        media_gallery_entries: [
                            {
                                id: 3629,
                                disabled: false,
                                file: '/d/o/download_4__3_1_1.png',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Lavender-XS',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 53,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 53,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 68,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 182,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2769,
                        media_gallery_entries: [
                            {
                                id: 3623,
                                disabled: false,
                                file: '/d/o/download_3__2_4.png',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-White-L',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 59,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 59,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 68,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 180,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2768,
                        media_gallery_entries: [
                            {
                                id: 3622,
                                disabled: false,
                                file: '/d/o/download_3__2_2_1.png',
                                label: null,
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-White-S',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 58,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 58,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 69,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 181,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2772,
                        media_gallery_entries: [
                            {
                                id: 3626,
                                disabled: false,
                                file: '/d/o/download_6__2_3.png',
                                label: null,
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Yellow-M',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 55,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 55,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 69,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 180,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2771,
                        media_gallery_entries: [
                            {
                                id: 3625,
                                disabled: false,
                                file: '/d/o/download_6__2_2.png',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Yellow-S',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 53,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 53,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 69,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 179,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2770,
                        media_gallery_entries: [
                            {
                                id: 3624,
                                disabled: false,
                                file: '/d/o/download_6__2_1_1.png',
                                label: null,
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Yellow-XS',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 52,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 52,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 69,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 183,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2774,
                        media_gallery_entries: [
                            {
                                id: 3628,
                                disabled: false,
                                file: '/d/o/download_6__2_5.png',
                                label: null,
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Yellow-XL',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 58,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 58,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 69,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 182,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 2773,
                        media_gallery_entries: [
                            {
                                id: 3627,
                                disabled: false,
                                file: '/d/o/download_6__2_4.png',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'aligent-hoodie-Yellow-L',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 0,
                                    percent_off: 0,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 57,
                                    __typename: 'Money',
                                },
                                regular_price: {
                                    currency: 'AUD',
                                    value: 57,
                                    __typename: 'Money',
                                },
                                __typename: 'ProductPrice',
                            },
                            __typename: 'PriceRange',
                        },
                        __typename: 'SimpleProduct',
                    },
                    __typename: 'ConfigurableVariant',
                },
            ],
        },
    ],
    aggregations: [
        {
            attribute_code: 'price',
            count: 3,
            label: 'Price',
            filterType: 'FilterRangeTypeInput',
            options: [
                {
                    count: 1,
                    label: '20-30',
                    swatch_data: null,
                    value: '20_30',
                },
                {
                    count: 1,
                    label: '30-40',
                    swatch_data: null,
                    value: '30_40',
                },
                {
                    count: 1,
                    label: '50-60',
                    swatch_data: null,
                    value: '50_60',
                },
            ],
        },
        {
            attribute_code: 'category_uid',
            count: 4,
            label: 'Category',
            filterType: 'FilterEqualTypeInput',
            options: [
                {
                    count: 3,
                    label: 'Men',
                    swatch_data: null,
                    value: 'MTI=',
                },
                {
                    count: 3,
                    label: 'Women',
                    swatch_data: null,
                    value: 'MjE=',
                },
                {
                    count: 2,
                    label: 'Tops',
                    swatch_data: null,
                    value: 'MTM=',
                },
                {
                    count: 2,
                    label: 'Tops',
                    swatch_data: null,
                    value: 'MjI=',
                },
            ],
        },
        {
            attribute_code: 'color',
            count: 3,
            label: 'Color',
            filterType: 'FilterEqualTypeInput',
            options: [
                {
                    count: 2,
                    label: 'Lavender',
                    swatch_data: {
                        type: 'ColorSwatchData',
                        value: '#ce64d4',
                    },
                    value: '63',
                },
                {
                    count: 3,
                    label: 'White',
                    swatch_data: {
                        type: 'ColorSwatchData',
                        value: '#ffffff',
                    },
                    value: '68',
                },
                {
                    count: 2,
                    label: 'Yellow',
                    swatch_data: {
                        type: 'ColorSwatchData',
                        value: '#ffd500',
                    },
                    value: '69',
                },
            ],
        },
        {
            attribute_code: 'sale',
            count: 1,
            label: 'Sale',
            filterType: 'FilterEqualTypeInput',
            options: [
                {
                    count: 3,
                    label: '0',
                    swatch_data: null,
                    value: '0',
                },
            ],
        },
        {
            attribute_code: 'size',
            count: 6,
            label: 'Size',
            filterType: 'FilterEqualTypeInput',
            options: [
                {
                    count: 1,
                    label: '55 cm',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: '55 cm',
                    },
                    value: '100',
                },
                {
                    count: 2,
                    label: 'XS',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: 'XS',
                    },
                    value: '179',
                },
                {
                    count: 2,
                    label: 'S',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: 'S',
                    },
                    value: '180',
                },
                {
                    count: 2,
                    label: 'M',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: 'M',
                    },
                    value: '181',
                },
                {
                    count: 2,
                    label: 'L',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: 'L',
                    },
                    value: '182',
                },
                {
                    count: 2,
                    label: 'XL',
                    swatch_data: {
                        type: 'TextSwatchData',
                        value: 'XL',
                    },
                    value: '183',
                },
            ],
        },
    ],
    page_info: {
        total_pages: 1,
        current_page: 1,
        __typename: 'SearchResultPageInfo',
    },
    total_count: 1,
};
