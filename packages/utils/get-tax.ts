import { Money, TaxPriceDisplay } from '@aligent/bigcommerce-operations';

export const getIncludesTax = (priceDisplay?: TaxPriceDisplay | null): boolean => {
    if (!priceDisplay) return true;
    return ['INC', 'BOTH'].includes(priceDisplay);
};

/**
 * Gets the gst percents between two prices. The outcome of this depends on admin configuration
 * and if the cart should display including or excluding prices.
 * If the cart is configured to display gst than the return amount will be 0 as the list price and
 * sale price will be the same.
 * @param listPrice
 * @param salePrice
 */
export const getGstPercentBetweenPrices = (listPrice: Money, salePrice: Money): number => {
    if (listPrice.value === salePrice.value) return 0;

    return Math.round(((listPrice.value - salePrice.value) / salePrice.value) * 100);
};

/**
 * Depending on admin cart configuration via the admin, the original price will be
 * either the default item price with or without tax applied.
 * @param price
 * @param gstPercentage
 */
export const getCartItemOriginalPrice = (price: number, gstPercentage: number): number => {
    return price / (1 + gstPercentage / 100);
};
