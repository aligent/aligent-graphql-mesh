import { BC_Money, BC_Prices, BC_VariantConnection } from '@mesh/external/BigCommerceGraphqlApi';
import { Maybe, PriceRange, ProductPrices } from '@mesh';
import { getTransformedPrice } from './transform-price';

const noPricesResponse = {
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

/**
 * Get if the products sale price has been applied as the final price.
 *
 * It's possible there's a sale price on a product but, it hasn't been applied as the
 * price.value (final price). This can happen when the sale price is declared directly on a variant
 * but the same hasn't been done for the default price.
 *
 * @param price
 * @param salePrice
 */
const hasSalesPriceTakenAffect = (price: BC_Money, basePrice: BC_Money) => {
    return price.value < basePrice.value;
};

const getAmountOff = (basePrice?: Maybe<BC_Money>, price?: Maybe<BC_Money>) => {
    if (!basePrice?.value || !price?.value) return 0;

    const isSalePriceTheFinalPrice = hasSalesPriceTakenAffect(price, basePrice);

    if (!isSalePriceTheFinalPrice) return 0;

    return basePrice.value - price.value;
};

const getPercentOff = (basePrice?: Maybe<BC_Money>, price?: Maybe<BC_Money>) => {
    if (!basePrice?.value || !price?.value) return 0;

    const isSalePriceTheFinalPrice = hasSalesPriceTakenAffect(price, basePrice);

    if (!isSalePriceTheFinalPrice) return 0;

    return ((basePrice.value - price.value) / basePrice.value) * 100;
};

const getMostExpensiveVariant = (
    variants?: Maybe<BC_VariantConnection>
): Maybe<BC_Prices> | undefined => {
    if (!variants?.edges) return null;

    return variants.edges.reduce(
        (lastVariant, nextVariant) => {
            if (!nextVariant?.node?.prices) return lastVariant;

            return nextVariant.node.prices.basePrice?.value > lastVariant?.basePrice?.value
                ? nextVariant.node.prices
                : lastVariant;
        },
        variants.edges?.[0]?.node.prices
    );
};

export const getTransformedPriceRange = (
    prices: Maybe<BC_Prices>,
    productType: 'SimpleProduct' | 'ConfigurableProduct',
    variants?: Maybe<BC_VariantConnection>
): PriceRange => {
    if (!prices) return noPricesResponse;

    const { basePrice, salePrice, price, priceRange } = prices;

    const mostExpensiveVariant = getMostExpensiveVariant(variants);
    const maxBasePrice =
        productType === 'ConfigurableProduct' && mostExpensiveVariant
            ? mostExpensiveVariant.basePrice
            : basePrice;

    const maxSalePrice =
        productType === 'ConfigurableProduct' && mostExpensiveVariant
            ? mostExpensiveVariant.price
            : priceRange.max;

    const result = {
        maximum_price: {
            discount: {
                amount_off: getAmountOff(maxBasePrice, maxSalePrice),
                percent_off: getPercentOff(maxBasePrice, maxSalePrice),
            },
            final_price: getTransformedPrice(prices.priceRange.max),
            regular_price: getTransformedPrice(maxBasePrice || prices.priceRange.max),
        },
        minimum_price: {
            discount: {
                amount_off: getAmountOff(basePrice, price),
                percent_off: getPercentOff(basePrice, price),
            },
            /* For a configurable parent product this is the price of the lowest costing variants
             * "default price" or "sales price" */
            final_price: getTransformedPrice(price),
            regular_price: getTransformedPrice(basePrice || prices.priceRange.min),
        },
    };

    return result;
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
