import { BC_Money, BC_TaxPriceDisplay } from '@mesh/external/BigCommerceGraphqlApi';

export const getIncludesTax = (priceDisplay?: BC_TaxPriceDisplay | null): boolean => {
    if (!priceDisplay) return true;
    return ['INC', 'BOTH'].includes(priceDisplay);
};

export const getGstPercentBetweenPrices = (listPrice: BC_Money, salePrice: BC_Money): number => {
    if (listPrice.value === salePrice.value) return 0;

    return Math.round(((listPrice.value - salePrice.value) / salePrice.value) * 100);
};
