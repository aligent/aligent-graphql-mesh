import { FilterTypeEnum } from '@mesh';

export const productsMock = {
    items: [
        {
            __typename: 'ConfigurableProduct',
            categories: [
                {
                    uid: 'OA==',
                    breadcrumbs: null,
                    name: 'New Luma Yoga Collection',
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
                {
                    uid: 'MjU=',
                    breadcrumbs: [
                        {
                            category_uid: 'MjE=',
                            category_name: 'Women',
                            __typename: 'Breadcrumb',
                        },
                        {
                            category_uid: 'MjI=',
                            category_name: 'Tops',
                            __typename: 'Breadcrumb',
                        },
                    ],
                    name: 'Hoodies & Sweatshirts',
                    level: 4,
                    __typename: 'CategoryTree',
                },
                {
                    uid: 'MzU=',
                    breadcrumbs: null,
                    name: 'Erin Recommends',
                    level: 3,
                    __typename: 'CategoryTree',
                },
            ],
            description: {
                html: "Whether you're after energizing activity or eye-catching apparel, the Mona Pullover is what you want. You'll stay warm and look fashionable, wherever you are.<br /> <br /> &bull; Light green heathered hoodie. <br /> &bull; Long-Sleeve, pullover.<br /> &bull; Long elliptical hem for extra coverage.<br /> &bull; Deep button placket for layering.<br /> &bull; Double rib design.<br /> &bull; Mid layer, mid weight.<br /> &bull; 98% Merino Wool / 2% Spandex",
                __typename: 'ComplexTextValue',
            },
            id: 1046,
            media_gallery_entries: [
                {
                    id: 1762,
                    label: '',
                    position: 1,
                    disabled: false,
                    file: '/w/h/wh01-green_main.jpg',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 1763,
                    label: '',
                    position: 2,
                    disabled: false,
                    file: '/w/h/wh01-green_alt1.jpg',
                    __typename: 'MediaGalleryEntry',
                },
                {
                    id: 1764,
                    label: '',
                    position: 3,
                    disabled: false,
                    file: '/w/h/wh01-green_back.jpg',
                    __typename: 'MediaGalleryEntry',
                },
            ],
            meta_title: null,
            meta_keyword: null,
            meta_description: null,
            name: 'Mona Pullover Hoodlie',
            price: {
                regularPrice: {
                    amount: {
                        currency: 'AUD',
                        value: 55,
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
                minimum_price: {
                    discount: {
                        amount_off: 25,
                        percent_off: 45.45,
                        __typename: 'ProductDiscount',
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 30,
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
            price_tiers: [],
            rating_summary: 87,
            review_count: 3,
            related_products: [
                {
                    categories: [],
                    name: 'Affirm Water Bottle ',
                    id: 15,
                    sku: '24-UG06',
                    url_key: 'affirm-water-bottle',
                    url_suffix: '.html',
                    small_image: {
                        url: 'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/u/g/ug06-lb-0.jpg',
                        __typename: 'ProductImage',
                    },
                    price: {
                        regularPrice: {
                            amount: {
                                currency: 'AUD',
                                value: 7,
                                __typename: 'Money',
                            },
                            __typename: 'Price',
                        },
                        __typename: 'ProductPrices',
                    },
                    price_range: {
                        minimum_price: {
                            discount: {
                                amount_off: 0,
                                __typename: 'ProductDiscount',
                            },
                            final_price: {
                                currency: 'AUD',
                                value: 7,
                                __typename: 'Money',
                            },
                            regular_price: {
                                currency: 'AUD',
                                value: 7,
                                __typename: 'Money',
                            },
                            __typename: 'ProductPrice',
                        },
                        __typename: 'PriceRange',
                    },
                    __typename: 'SimpleProduct',
                },
            ],
            sku: 'WH01',
            small_image: {
                url: 'https://take-flight-ew3k5nq-ekxw7lyelhava.ap-4.magentosite.cloud/media/catalog/product/cache/8f3d2e129ba9bc6369f4f94872c5b9a2/w/h/wh01-green_main.jpg',
                __typename: 'ProductImage',
            },
            stock_status: 'IN_STOCK',
            url_key: 'mona-pullover-hoodlie',
            url_suffix: '.html',
            configurable_options: [
                {
                    attribute_code: 'color',
                    attribute_id: '93',
                    id: 147,
                    label: 'Color',
                    position: 1,
                    values: [
                        {
                            default_label: 'Green',
                            label: 'Green',
                            store_label: 'Green',
                            use_default_value: true,
                            value_index: 62,
                            swatch_data: {
                                value: '#53a828',
                                __typename: 'ColorSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzkzLzYy',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                        {
                            default_label: 'Purple',
                            label: 'Purple',
                            store_label: 'Purple',
                            use_default_value: true,
                            value_index: 66,
                            swatch_data: {
                                value: '#ef3dff',
                                __typename: 'ColorSwatchData',
                            },
                            uid: 'Y29uZmlndXJhYmxlLzkzLzY2',
                            __typename: 'ConfigurableProductOptionsValues',
                        },
                    ],
                    __typename: 'ConfigurableProductOptions',
                },
                {
                    attribute_code: 'size',
                    attribute_id: '187',
                    id: 146,
                    label: 'Size',
                    position: 0,
                    values: [
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
                    ],
                    __typename: 'ConfigurableProductOptions',
                },
            ],
            variants: [
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 62,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 180,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 1034,
                        media_gallery_entries: [
                            {
                                id: 1742,
                                disabled: false,
                                file: '/w/h/wh01-green_main.jpg',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                            {
                                id: 1743,
                                disabled: false,
                                file: '/w/h/wh01-green_alt1.jpg',
                                label: '',
                                position: 2,
                                __typename: 'MediaGalleryEntry',
                            },
                            {
                                id: 1744,
                                disabled: false,
                                file: '/w/h/wh01-green_back.jpg',
                                label: '',
                                position: 3,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'WH01-S-Green',
                        stock_status: 'IN_STOCK',
                        price_range: {
                            minimum_price: {
                                discount: {
                                    amount_off: 27,
                                    percent_off: 47.37,
                                    __typename: 'ProductDiscount',
                                },
                                final_price: {
                                    currency: 'AUD',
                                    value: 30,
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
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 66,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 180,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 1036,
                        media_gallery_entries: [
                            {
                                id: 1746,
                                disabled: false,
                                file: '/w/h/wh01-purple_main.jpg',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'WH01-S-Purple',
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
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 62,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 181,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 1037,
                        media_gallery_entries: [
                            {
                                id: 1747,
                                disabled: false,
                                file: '/w/h/wh01-green_main.jpg',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                            {
                                id: 1748,
                                disabled: false,
                                file: '/w/h/wh01-green_alt1.jpg',
                                label: '',
                                position: 2,
                                __typename: 'MediaGalleryEntry',
                            },
                            {
                                id: 1749,
                                disabled: false,
                                file: '/w/h/wh01-green_back.jpg',
                                label: '',
                                position: 3,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'WH01-M-Green',
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
                {
                    attributes: [
                        {
                            code: 'color',
                            value_index: 66,
                            __typename: 'ConfigurableAttributeOption',
                        },
                        {
                            code: 'size',
                            value_index: 181,
                            __typename: 'ConfigurableAttributeOption',
                        },
                    ],
                    product: {
                        id: 1039,
                        media_gallery_entries: [
                            {
                                id: 1751,
                                disabled: false,
                                file: '/w/h/wh01-purple_main.jpg',
                                label: '',
                                position: 1,
                                __typename: 'MediaGalleryEntry',
                            },
                        ],
                        sku: 'WH01-M-Purple',
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
            filterType: 'FilterRangeTypeInput' as FilterTypeEnum,
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
            filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
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
            filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
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
            filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
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
            filterType: 'FilterEqualTypeInput' as FilterTypeEnum,
            options: [
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
