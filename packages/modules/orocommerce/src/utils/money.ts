import { CurrencyEnum, Money } from '@aligent/orocommerce-resolvers';

export const getMoneyData = (currency: string, price: string | number): Money => {
    return {
        currency: currency as CurrencyEnum,
        value: Number(price),
    };
};
