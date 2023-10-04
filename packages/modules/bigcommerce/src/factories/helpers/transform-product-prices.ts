import { Money, Prices, VariantConnection } from '@aligent/bigcommerce-operations';
import { Maybe, PriceRange, ProductPrices, TierPrice } from '@aligent/bigcommerce-resolvers';
import { CurrencyEnum, Money as AcMoney } from '@aligent/bigcommerce-resolvers';
import { getTransformedPrice } from './transform-price';
import { SupportedProductTypes } from '../../types';

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
const hasSalesPriceTakenAffect = (price: Money, basePrice: Money) => {
    /* IMPORTANT: Don't rely on the "salePrice" to work this out as products can have a sales price but
     * it's not the final price displayed to the user and what gets added to the cart*/
    return price.value < basePrice.value;
};

export const getAmountOff = (basePrice?: Maybe<Money>, price?: Maybe<Money>) => {
    if (!basePrice?.value || !price?.value) return 0;

    const isSalePriceTheFinalPrice = hasSalesPriceTakenAffect(price, basePrice);

    if (!isSalePriceTheFinalPrice) return 0;

    return basePrice.value - price.value;
};

export const getPercentOff = (basePrice?: Maybe<Money>, price?: Maybe<Money>) => {
    if (!basePrice?.value || !price?.value) return 0;

    const isSalePriceTheFinalPrice = hasSalesPriceTakenAffect(price, basePrice);

    if (!isSalePriceTheFinalPrice) return 0;

    return ((basePrice.value - price.value) / basePrice.value) * 100;
};

export const getMostExpensiveVariant = (
    variants?: Maybe<VariantConnection>
): Maybe<Prices> | undefined => {
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
    prices: Maybe<Prices>,
    productType: SupportedProductTypes,
    variants?: Maybe<VariantConnection>
): PriceRange => {
    if (!prices) return noPricesResponse;

    const { basePrice, price, priceRange } = prices;

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
             * "default price" or "sales price".
             * IMPORTANT: Don't rely on the "salePrice" being the final price for a product. */
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
export const getTransformedPrices = (prices: Maybe<Prices>): Maybe<ProductPrices> => {
    if (!prices) return null;
    return {
        regularPrice: {
            amount: prices ? getTransformedPrice(prices.price) : null,
        },
    };
};

type PricesForTieredPricing = Pick<Prices, 'bulkPricing' | 'basePrice' | 'price'>;

export const getTransformedPriceTiers = (
    prices: Maybe<PricesForTieredPricing>
): Maybe<Array<Maybe<TierPrice>>> => {
    if (!prices || !prices.price || !prices.basePrice || !prices.bulkPricing?.length) return [];

    const { basePrice, bulkPricing, price } = prices;

    let hasBulkPricingForOneQuantity = false;

    const tierPrices = bulkPricing.map((bulkPrice) => {
        const { minimumQuantity } = bulkPrice;

        /* Flag if bulk pricing has a case for a minimum of one quantity */
        if (minimumQuantity === 1) hasBulkPricingForOneQuantity = true;

        const currencyCode = price?.currencyCode || '';

        const finalPrice = {
            currency: currencyCode,
            value: null,
        } as AcMoney;

        /* Discounts are calculated on a products "sale_price" if applied or otherwise fallbacks to "base_price". This
         * is reflected in the "price" property */
        let discount = {
            amount_off: 0,
            percent_off: 0,
        };

        /* For fixed bulk pricing "BulkPricingFixedPriceDiscount"*/
        if ('price' in bulkPrice) {
            const fixedPrice = {
                value: bulkPrice.price,
                currencyCode: currencyCode,
            };

            discount = {
                amount_off: getAmountOff(basePrice, fixedPrice),
                percent_off: getPercentOff(basePrice, fixedPrice),
            };

            finalPrice.value = fixedPrice.value;
        }

        /* For amount off per-unit pricing "BulkPricingRelativePriceDiscount"*/
        if ('priceAdjustment' in bulkPrice) {
            const adjustedPrice = {
                value: price.value - bulkPrice.priceAdjustment,
                currencyCode: currencyCode,
            };

            discount = {
                amount_off: getAmountOff(basePrice, adjustedPrice),
                percent_off: getPercentOff(basePrice, adjustedPrice),
            };

            finalPrice.value = adjustedPrice.value;
        }

        /* For percentage off bul pricing "BulkPricingPercentageDiscount"*/
        if ('percentOff' in bulkPrice) {
            const priceWithPercentageOff = {
                value: price.value * (1 - bulkPrice.percentOff / 100),
                currencyCode,
            };

            const amountOff = getAmountOff(basePrice, priceWithPercentageOff);

            discount = {
                amount_off: amountOff,
                percent_off: bulkPrice.percentOff,
            };

            finalPrice.value = priceWithPercentageOff.value;
        }

        return {
            discount,
            final_price: finalPrice,
            quantity: minimumQuantity,
        };
    });

    /* Create bulk pricing data for a minimum quantity of "1" if there is none in the "bulkPricing" array */
    const bulkPriceForOneQty = !hasBulkPricingForOneQuantity
        ? [
              {
                  discount: {
                      amount_off: getAmountOff(basePrice, price),
                      percent_off: getPercentOff(basePrice, price),
                  },
                  final_price: {
                      value: price.value,
                      currency: price.currencyCode as CurrencyEnum,
                  },
                  quantity: 1,
              },
          ]
        : [];

    return [...bulkPriceForOneQty, ...tierPrices];
};
