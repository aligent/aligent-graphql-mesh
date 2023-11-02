export const mockBcCart = {
    /* The "amount.value" can be the including or excluding gst price depending on admin configuration
     * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
     * [Display prices inclusive of tax, Display prices exclusive of tax]
     *
     * This amount also subtracts discounts
     * */
    amount: {
        currencyCode: 'AUD',
        value: 60.0,
    },
    /* The total amount of the cart items including GST*/
    baseAmount: {
        currencyCode: 'AUD',
        value: 60.0,
    },
    createdAt: {
        utc: '2023-07-28T00:53:59Z',
    },
    currencyCode: 'AUD',
    discountedAmount: {
        currencyCode: 'AUD',
        value: 0,
    },
    discounts: [
        {
            entityId: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
            discountedAmount: {
                currencyCode: 'AUD',
                value: 0,
            },
        },
    ],
    entityId: '98bf4b97-14a8-4860-ada3-44a780c24eb4',
    id: 'Q2FydDo5OGJmNGI5Ny0xNGE4LTQ4NjAtYWRhMy00NGE3ODBjMjRlYjQ=',
    isTaxIncluded: true,
    lineItems: {
        customItems: [],
        digitalItems: [],
        giftCertificates: [],
        physicalItems: [
            {
                name: 'Mona Pullover Hoodlie',
                brand: 'Weller',
                sku: 'WH01-S-Green',
                url: 'https://aligent.mybigcommerce.com/mona-pullover-hoodlie/',
                entityId: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
                variantEntityId: 513,
                parentEntityId: null,
                productEntityId: 492,
                discounts: [
                    {
                        entityId: 'df21b1d0-6178-454c-a159-699e80c7d8e0',
                        discountedAmount: {
                            currencyCode: 'AUD',
                            value: 0,
                        },
                    },
                ],
                couponAmount: {
                    currencyCode: 'AUD',
                    value: 0.0,
                },
                discountedAmount: {
                    currencyCode: 'AUD',
                    value: 0.0,
                },
                // "originalPrice" is the price of the item that hasn't changed due to having
                // a salePrice applied or discounts
                originalPrice: {
                    currencyCode: 'AUD',
                    value: 70.0,
                },
                // This is the item price including tax
                listPrice: {
                    currencyCode: 'AUD',
                    value: 30.0,
                },
                /*The "salesPrice" can be the including or excluding gst price depending on admin configuration
                 * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
                 * [Display prices inclusive of tax, Display prices exclusive of tax]
                 * */
                salePrice: {
                    currencyCode: 'AUD',
                    value: 30.0,
                },
                // This is the items "listPrice" including tax multiplied by the "quantity"
                extendedListPrice: {
                    currencyCode: 'AUD',
                    value: 60.0,
                },
                /*The "extendedSalePrice" can be the including or excluding gst price depending on admin configuration
                 * Admin > Settings > Tax > Tax Rules > Tax rates and zones > {zone} Edit settings >
                 * [Display prices inclusive of tax, Display prices exclusive of tax]
                 * */
                extendedSalePrice: {
                    currencyCode: 'AUD',
                    value: 60.0,
                },
                quantity: 2,
                selectedOptions: [
                    {
                        name: 'Color',
                        entityId: 148,
                        valueEntityId: 182,
                        value: 'Green',
                    },
                    {
                        name: 'Size',
                        entityId: 149,
                        valueEntityId: 184,
                        value: 'S',
                    },
                ],
                giftWrapping: null,
                imageUrl:
                    'https://cdn11.bigcommerce.com/s-xxazhvt7gd/product_images/attribute_rule_images/54_thumb_1690452039.jpg',
                isShippingRequired: true,
                isTaxable: true,
            },
        ],
        totalQuantity: 1,
    },
    locale: 'en',
    metafields: {
        edges: [],
        pageInfo: {
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'asb',
        },
    },
    updatedAt: {
        utc: '2023-07-28T01:17:18Z',
    },
};
