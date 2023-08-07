import { BC_Money, CurrencyEnum, Maybe, Money } from '../../../meshrc/.mesh';

export const getTransformedPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value };
};
