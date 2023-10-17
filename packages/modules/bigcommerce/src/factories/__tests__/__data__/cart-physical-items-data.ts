import { CartLineItemInput } from '@aligent/bigcommerce-operations';
import { ConfigurableCartItem, SelectedConfigurableOption } from '@aligent/bigcommerce-resolvers';

export const cartPhysicalItemsData: ConfigurableCartItem[] = [
    {
        id: 'c711bf0e-da96-46c9-b29c-77f5e041baa7',
        uid: 'YzcxMWJmMGUtZGE5Ni00NmM5LWIyOWMtNzdmNWUwNDFiYWE3LzQ5Mi81MTY=',
        errors: [
            {
                code: 'ITEM_QTY',
                message: 'The requested qty is not available',
                __typename: 'CartItemError',
            },
        ],
        prices: {
            price: {
                currency: 'AUD',
                value: 10,
            },
            price_including_tax: {
                currency: 'AUD',
                value: 10,
            },
            row_total: {
                currency: 'AUD',
                value: 10,
            },
            row_total_including_tax: {
                currency: 'AUD',
                value: 10,
            },
            total_item_discount: {
                currency: 'AUD',
                value: 0,
            },
        },
        product: {
            custom_attributes: [],
            id: 516,
            media_gallery_entries: [
                {
                    disabled: false,
                    file: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/56_source_1690452040.jpg',
                    id: 9437676,
                    label: '',
                    position: 0,
                    uid: '',
                },
            ],
            only_x_left_in_stock: 0,
            price_range: {
                maximum_price: {
                    discount: {
                        amount_off: 47,
                        percent_off: 82.45614035087719,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 10,
                    },
                    regular_price: {
                        currency: 'AUD',
                        value: 57,
                    },
                },
                minimum_price: {
                    discount: {
                        amount_off: 47,
                        percent_off: 82.45614035087719,
                    },
                    final_price: {
                        currency: 'AUD',
                        value: 10,
                    },
                    regular_price: {
                        currency: 'AUD',
                        value: 57,
                    },
                },
            },
            price_tiers: [],
            rating_summary: 0,
            reviews: {
                items: [],
                page_info: {
                    current_page: 0,
                    page_size: 0,
                    total_pages: 0,
                },
            },
            review_count: 0,
            sku: 'WH01-M-Purple',
            small_image: {
                label: '',
                url: 'https://cdn11.bigcommerce.com/s-xxazhvt7gd/images/stencil/500x245/attribute_rule_images/56_source_1690452040.jpg',
            },
            staged: false,
            stock_status: 'IN_STOCK',
            uid: 'VmFyaWFudDo1MTY=',
            // @ts-expect-error: General productInterface doesn't have typename but Simple prod interface does
            __typename: 'SimpleProduct',
        },
        quantity: 1,
        configurable_options: [
            {
                id: 148,
                option_label: 'Color',
                value_id: 183,
                value_label: 'Purple',
            },
            {
                id: 149,
                option_label: 'Size',
                value_id: 185,
                value_label: 'M',
            },
        ] as SelectedConfigurableOption[],
        __typename: 'ConfigurableCartItem',
    },
];

export const bcCartLineItemsData: CartLineItemInput[] = [
    {
        quantity: 1,
        productEntityId: 492,
        selectedOptions: {
            multipleChoices: [
                {
                    optionEntityId: 148,
                    optionValueEntityId: 183,
                },
                {
                    optionEntityId: 149,
                    optionValueEntityId: 185,
                },
            ],
        },
    },
];
