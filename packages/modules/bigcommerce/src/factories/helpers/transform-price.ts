import { CurrencyEnum, Maybe, Money } from '@aligent/bigcommerce-resolvers';
import { Money as BC_Money } from '@aligent/bigcommerce-operations';

export const getTransformedPrice = (priceObject: BC_Money): Money => {
    const { currencyCode, value } = priceObject;
    return { currency: currencyCode as Maybe<CurrencyEnum>, value };
};
