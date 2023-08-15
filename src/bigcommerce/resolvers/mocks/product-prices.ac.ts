export const mockProductPricesAc = {
    price: {
        regularPrice: {
            amount: {
                currency: 'AUD',
                value: 55,
            },
        },
    },
    price_range: {
        maximum_price: {
            discount: {
                amount_off: 39.9,
                percent_off: 70,
            },
            final_price: {
                currency: 'AUD',
                value: 17.1,
            },
            regular_price: {
                currency: 'AUD',
                value: 57,
            },
        },
        minimum_price: {
            discount: {
                amount_off: 38.5,
                percent_off: 70,
            },
            final_price: {
                currency: 'AUD',
                value: 16.5,
            },
            regular_price: {
                currency: 'AUD',
                value: 55,
            },
        },
    },
    variants: [
        {
            product: {
                id: 1034,
                sku: 'WH01-S-Green',
                price_range: {
                    minimum_price: {
                        discount: {
                            amount_off: 27,
                            percent_off: 47.37,
                        },
                        final_price: {
                            currency: 'AUD',
                            value: 30,
                        },
                        regular_price: {
                            currency: 'AUD',
                            value: 57,
                        },
                    },
                },
            },
        },
        {
            product: {
                id: 1036,
                sku: 'WH01-S-Purple',
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
                        },
                    },
                },
            },
        },
        {
            product: {
                id: 1037,
                sku: 'WH01-M-Green',
                price_range: {
                    minimum_price: {
                        discount: {
                            amount_off: 0,
                            percent_off: 0,
                        },
                        final_price: {
                            currency: 'AUD',
                            value: 57,
                        },
                        regular_price: {
                            currency: 'AUD',
                            value: 57,
                        },
                    },
                },
            },
        },
        {
            product: {
                id: 1039,
                sku: 'WH01-M-Purple',
                price_range: {
                    minimum_price: {
                        discount: {
                            amount_off: 0,
                            percent_off: 0,
                        },
                        final_price: {
                            currency: 'AUD',
                            value: 57,
                        },
                        regular_price: {
                            currency: 'AUD',
                            value: 57,
                        },
                    },
                },
            },
        },
    ],
};
