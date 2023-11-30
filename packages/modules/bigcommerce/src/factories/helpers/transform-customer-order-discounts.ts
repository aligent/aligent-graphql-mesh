import { BCDiscount } from '../../types';
import { CurrencyEnum, Discount } from '@aligent/bigcommerce-resolvers';

export const getTransformedOrderDiscounts = (
    discounts: BCDiscount[] | '',
    currencyCode: string
): Discount[] | never[] => {
    if (!discounts || !discounts?.length) return [];

    const transformedDiscounts = discounts.reduce((carry, item) => {
        const { code, discount } = item;
        return [
            ...carry,
            {
                amount: {
                    currency: currencyCode as CurrencyEnum,
                    value: Number(discount),
                },
                code: code,
                label: code,
            },
        ];
    }, [] as Discount[]);

    return transformedDiscounts;
};
