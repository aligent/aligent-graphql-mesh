const pricesIncGst = {
    /* "saved" only works if a "MSRP" price is set on a product.
     * This will be the difference between the "MSRP" price and which ever is lower between the
     * "default price" and "sales price". */
    saved: null,
    /* IMPORTANT: don't use this.
     * The "sales" price of the configurable parent or lowest "sales price" of a variant if declare.
     * Depending on the configuration of product prices it's possible
     * for a product to have a salePrice but it's not the final price of the product.*/
    salePrice: {
        value: 10.0,
        currencyCode: 'AUD',
    },
    /* The min and max "MSRP" price fluctuation on configurable products */
    retailPriceRange: null,
    /* The "MSRP" price (RRP price). Null if doesn't exist */
    retailPrice: null,
    /* The min and max "default price" or "sales price" fluctuation on configurable products.
     * NOTE: if a simple product has a "sales price" but not a strictly defined "default price" the
     * "sales price won't be applied"*/
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
    /* The "final price" is the display price and the price the customer can buy the item for. This will be the price of which
     * costs less between the "default price" and "sales price"*/
    price: {
        value: 10.0,
        currencyCode: 'AUD',
    },
    mapPrice: null,
    /* The "default price" not the "MSRP" price*/
    basePrice: {
        value: 57.0,
        currencyCode: 'AUD',
    },
};

const pricesExGst = {
    price: {
        currencyCode: 'AUD',
        value: 9.09,
    },
    salePrice: {
        currencyCode: 'AUD',
        value: 9.09,
    },
    basePrice: {
        currencyCode: 'AUD',
        value: 51.82,
    },
    retailPrice: null,
    mapPrice: null,
    priceRange: {
        min: {
            currencyCode: 'AUD',
            value: 9.09,
        },
        max: {
            currencyCode: 'AUD',
            value: 51.82,
        },
    },
    retailPriceRange: null,
    saved: null,
};

export const mockProductPrices = {
    pricesIncGst,
    pricesExGst,
    name: 'Mona Pullover Hoodlie',
    variants: {
        edges: [
            {
                node: {
                    PricesIncGst: {
                        // Only works out the difference between the "MSRP" price and the "default price" not "sales price"
                        saved: null,
                        salePrice: {
                            value: 30.0,
                            currencyCode: 'AUD',
                        },
                        retailPriceRange: null,
                        retailPrice: null,
                        priceRange: {
                            min: {
                                value: 30.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 30.0,
                                currencyCode: 'AUD',
                            },
                        },
                        /* Which ever is lowest out of the "sales price" and "default price" if there's a "sales price"
                         * on the simple product but not a "default price" strictly on the simple as well the "sales price" won't
                         * apply here  */
                        price: {
                            value: 30.0,
                            currencyCode: 'AUD',
                        },
                        mapPrice: null,
                        basePrice: {
                            value: 70.0,
                            currencyCode: 'AUD',
                        },
                    },
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 27.27,
                        },
                        salePrice: {
                            currencyCode: 'AUD',
                            value: 27.27,
                        },
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 63.64,
                        },
                        retailPrice: null,
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 27.27,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 27.27,
                            },
                        },
                        retailPriceRange: null,
                        saved: null,
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
                        saved: null,
                        salePrice: {
                            value: 40.0,
                            currencyCode: 'AUD',
                        },
                        retailPriceRange: null,
                        retailPrice: null,
                        priceRange: {
                            min: {
                                value: 40.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 40.0,
                                currencyCode: 'AUD',
                            },
                        },
                        price: {
                            value: 40.0,
                            currencyCode: 'AUD',
                        },
                        mapPrice: null,
                        basePrice: {
                            value: 57.0,
                            currencyCode: 'AUD',
                        },
                    },
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 36.36,
                        },
                        salePrice: {
                            currencyCode: 'AUD',
                            value: 36.36,
                        },
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        retailPrice: null,
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 36.36,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 36.36,
                            },
                        },
                        retailPriceRange: null,
                        saved: null,
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
                        saved: null,
                        salePrice: null,
                        retailPriceRange: null,
                        retailPrice: null,
                        priceRange: {
                            min: {
                                value: 57.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 57.0,
                                currencyCode: 'AUD',
                            },
                        },
                        price: {
                            value: 57.0,
                            currencyCode: 'AUD',
                        },
                        mapPrice: null,
                        basePrice: {
                            value: 57.0,
                            currencyCode: 'AUD',
                        },
                    },
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        salePrice: null,
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        retailPrice: null,
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 51.82,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 51.82,
                            },
                        },
                        retailPriceRange: null,
                        saved: null,
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
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
                                value: 10.0,
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
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 9.09,
                        },
                        salePrice: {
                            currencyCode: 'AUD',
                            value: 9.09,
                        },
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        retailPrice: null,
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 9.09,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 9.09,
                            },
                        },
                        retailPriceRange: null,
                        saved: null,
                    },
                },
            },
        ],
    },
};
