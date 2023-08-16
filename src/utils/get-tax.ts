import { BC_TaxPriceDisplay } from '@mesh/external/BigCommerceGraphqlApi';

export const getIncludesTax = (priceDisplay?: BC_TaxPriceDisplay | null): boolean => {
    if (!priceDisplay) return true;
    return ['INC', 'BOTH'].includes(priceDisplay);
};
