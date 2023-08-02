import {
    BC_CheckoutCoupon,
    BC_CheckoutTax,
    BC_Money,
    CartPrices,
    CurrencyEnum,
    Maybe,
} from '../../../meshrc/.mesh';
import { getTransformedPrice } from './transform-price';

type Prices = {
    coupons: Array<BC_CheckoutCoupon>;
    grandTotal?: Maybe<BC_Money>;
    subtotal?: Maybe<BC_Money>;
    taxes?: Maybe<Array<BC_CheckoutTax>>;
    taxTotal?: Maybe<BC_Money>;
};

export const getTransformedCartPrices = (prices: Prices): CartPrices => {
    const { coupons, grandTotal, subtotal, taxes, taxTotal } = prices;

    const applied_taxes =
        taxes?.map(tax => {
            const { name, amount } = tax;
            return {
                amount: getTransformedPrice(amount),
                label: name,
            };
        }) || null;

    const discounts = coupons.map(coupon => {
        const { code, discountedAmount } = coupon;

        return {
            label: code,
            amount: getTransformedPrice(discountedAmount),
        };
    });

    const discountedAmount = coupons.reduce(
        (carry, coupon) => {
            const { currencyCode, value } = coupon.discountedAmount;
            return { currency: currencyCode, value: carry.value + value };
        },
        { currency: '', value: 0 }
    );
    return {
        applied_taxes,
        discounts,
        grand_total: grandTotal?.value ? getTransformedPrice(grandTotal) : null,
        subtotal_excluding_tax: subtotal?.value ? getTransformedPrice(subtotal) : null,
        subtotal_including_tax: subtotal?.value ? getTransformedPrice(subtotal) : null,
        subtotal_with_discount_including_tax: {
            value: grandTotal?.value || 0 + discountedAmount.value || 0,
            currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
        },
        subtotal_with_discount_excluding_tax: {
            value: grandTotal?.value || 0 - taxTotal?.value || 0 + discountedAmount.value,
            currency: taxTotal?.currencyCode as Maybe<CurrencyEnum>,
        },
    };
};
