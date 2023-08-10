import { BC_Prices } from '@mesh/external/BigCommerceGraphqlApi';
import { Maybe, PriceRange, ProductPrices } from '@mesh';
import { getTransformedPrice } from './transform-price';

export const getTransformedPriceRange = (prices?: Maybe<BC_Prices>): PriceRange => {
    if (!prices)
        return {
            maximum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: { currency: null, value: null },
                regular_price: { currency: null, value: null },
            },
            minimum_price: {
                discount: {
                    amount_off: null,
                    percent_off: null,
                },
                final_price: { currency: null, value: null },
                regular_price: { currency: null, value: null },
            },
        };

    return {
        maximum_price: {
            discount: {
                amount_off: null,
                percent_off: null,
            },
            final_price: getTransformedPrice(prices.priceRange.max),
            regular_price: getTransformedPrice(prices.priceRange.max),
        },
        minimum_price: {
            discount: {
                amount_off: null,
                percent_off: null,
            },
            final_price: getTransformedPrice(prices.priceRange.min),
            regular_price: getTransformedPrice(prices.priceRange.min),
        },
    };
};

/**
 * This returns deprecated prices but being used in TF
 * @param prices
 */
export const getTransformedPrices = (prices: Maybe<BC_Prices>): Maybe<ProductPrices> => {
    if (!prices) return null;
    return {
        regularPrice: {
            amount: prices ? getTransformedPrice(prices.price) : null,
        },
    };
};
