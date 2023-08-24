import { CurrencyEnum, Maybe, Money } from '@mesh';
import { BC_Money } from '@mesh/external/BigCommerceGraphqlApi';

export const getTransformedPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value };
};
