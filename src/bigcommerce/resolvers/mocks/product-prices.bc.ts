const pricesIncGst = {
    /* "saved" only works if a "MSRP" price is set on a product.
     * This will be the difference between the "MSRP" price and which ever is lower between the
     * "default price" and "sales price". */
    saved: {
        value: 49.0,
        currencyCode: 'AUD',
    },
    /* The "sales" price of the configurable parent or lowest "sales price" of a variant if declare*/
    salePrice: {
        value: 20.0,
        currencyCode: 'AUD',
    },
    /* The min and max "MSRP" price fluctuation on configurable products */
    retailPriceRange: {
        min: {
            value: 45.0,
            currencyCode: 'AUD',
        },
        max: {
            value: 69.0,
            currencyCode: 'AUD',
        },
    },
    /* The "MSRP" price. Null if doesn't exist */
    retailPrice: {
        currencyCode: 'AUD',
        value: 69.0,
    },
    /* The min and max "default price" or "sales price" fluctuation on configurable products.
     * NOTE: if a simple product has a "sales price" but not a strictly defined "default price" the
     * "sales price won't be applied"*/
    priceRange: {
        min: {
            value: 20.0,
            currencyCode: 'AUD',
        },
        max: {
            value: 55.0,
            currencyCode: 'AUD',
        },
    },
    price: {
        /* The "final price" the customer can buy the item for. This will be the price of which
         * ever costs less between the "default price" and "sales price"*/
        value: 20.0,
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
        value: 18.18,
    },
    salePrice: {
        currencyCode: 'AUD',
        value: 18.18,
    },
    basePrice: {
        currencyCode: 'AUD',
        value: 51.82,
    },
    retailPrice: {
        currencyCode: 'AUD',
        value: 62.73,
    },
    mapPrice: null,
    priceRange: {
        min: {
            currencyCode: 'AUD',
            value: 18.18,
        },
        max: {
            currencyCode: 'AUD',
            value: 50.0,
        },
    },
    retailPriceRange: {
        min: {
            currencyCode: 'AUD',
            value: 40.91,
        },
        max: {
            currencyCode: 'AUD',
            value: 62.73,
        },
    },
    saved: {
        currencyCode: 'AUD',
        value: 44.55,
    },
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
                        saved: {
                            value: 15.0,
                            currencyCode: 'AUD',
                        },
                        salePrice: null,
                        retailPriceRange: {
                            min: {
                                value: 45.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 45.0,
                                currencyCode: 'AUD',
                            },
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 45.0,
                        },
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
                            value: 30.0,
                            currencyCode: 'AUD',
                        },
                    },
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 27.27,
                        },
                        salePrice: null,
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 27.27,
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 40.91,
                        },
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
                        retailPriceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 40.91,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 40.91,
                            },
                        },
                        saved: {
                            currencyCode: 'AUD',
                            value: 13.64,
                        },
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
                        saved: {
                            value: 49.0,
                            currencyCode: 'AUD',
                        },
                        salePrice: {
                            value: 20.0,
                            currencyCode: 'AUD',
                        },
                        retailPriceRange: {
                            min: {
                                value: 69.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 69.0,
                                currencyCode: 'AUD',
                            },
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 69.0,
                        },
                        priceRange: {
                            min: {
                                value: 20.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 20.0,
                                currencyCode: 'AUD',
                            },
                        },
                        /* Is the lowest price between the "default price" and "sales" price.
                         * the parent products "sales price" will be applied over the simple products "sale price"*/
                        price: {
                            value: 20.0,
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
                            value: 18.18,
                        },
                        salePrice: {
                            currencyCode: 'AUD',
                            value: 18.18,
                        },
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 62.73,
                        },
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 18.18,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 18.18,
                            },
                        },
                        retailPriceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 62.73,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 62.73,
                            },
                        },
                        saved: {
                            currencyCode: 'AUD',
                            value: 44.55,
                        },
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
                        saved: {
                            value: 5.0,
                            currencyCode: 'AUD',
                        },
                        salePrice: null,
                        retailPriceRange: {
                            min: {
                                value: 60.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 60.0,
                                currencyCode: 'AUD',
                            },
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 60.0,
                        },
                        priceRange: {
                            min: {
                                value: 55.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 55.0,
                                currencyCode: 'AUD',
                            },
                        },
                        price: {
                            value: 55.0,
                            currencyCode: 'AUD',
                        },
                        mapPrice: null,
                        basePrice: {
                            value: 55.0,
                            currencyCode: 'AUD',
                        },
                    },
                    priceExGst: {
                        price: {
                            currencyCode: 'AUD',
                            value: 50.0,
                        },
                        salePrice: null,
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 50.0,
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 54.55,
                        },
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 50.0,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 50.0,
                            },
                        },
                        retailPriceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 54.55,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 54.55,
                            },
                        },
                        saved: {
                            currencyCode: 'AUD',
                            value: 4.55,
                        },
                    },
                },
            },
            {
                node: {
                    PricesIncGst: {
                        saved: {
                            value: 49.0,
                            currencyCode: 'AUD',
                        },
                        salePrice: {
                            value: 20.0,
                            currencyCode: 'AUD',
                        },
                        retailPriceRange: {
                            min: {
                                value: 69.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 69.0,
                                currencyCode: 'AUD',
                            },
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 69.0,
                        },
                        priceRange: {
                            min: {
                                value: 20.0,
                                currencyCode: 'AUD',
                            },
                            max: {
                                value: 20.0,
                                currencyCode: 'AUD',
                            },
                        },
                        price: {
                            value: 20.0,
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
                            value: 18.18,
                        },
                        salePrice: {
                            currencyCode: 'AUD',
                            value: 18.18,
                        },
                        basePrice: {
                            currencyCode: 'AUD',
                            value: 51.82,
                        },
                        retailPrice: {
                            currencyCode: 'AUD',
                            value: 62.73,
                        },
                        mapPrice: null,
                        priceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 18.18,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 18.18,
                            },
                        },
                        retailPriceRange: {
                            min: {
                                currencyCode: 'AUD',
                                value: 62.73,
                            },
                            max: {
                                currencyCode: 'AUD',
                                value: 62.73,
                            },
                        },
                        saved: {
                            currencyCode: 'AUD',
                            value: 44.55,
                        },
                    },
                },
            },
        ],
    },
};
