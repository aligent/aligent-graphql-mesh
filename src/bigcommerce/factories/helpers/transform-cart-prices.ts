import {
    BC_Cart,
    BC_CheckoutCoupon,
    BC_CheckoutTax,
    BC_Money,
} from '@mesh/external/BigCommerceGraphqlApi';
import { CartPrices, CurrencyEnum, Maybe } from '@mesh';
import { getTransformedPrice } from './transform-price';

type Prices = {
    coupons: Array<BC_CheckoutCoupon>;
    grandTotal?: Maybe<BC_Money>;
    subtotal?: Maybe<BC_Money>;
    taxes?: Maybe<Array<BC_CheckoutTax>>;
    taxTotal?: Maybe<BC_Money>;
};

export const getTransformedCartPrices = (prices: Prices, cart?: Maybe<BC_Cart>): CartPrices => {
    const { coupons, grandTotal, subtotal, taxes, taxTotal } = prices;

    const applied_taxes =
        taxes?.map((tax) => {
            const { name, amount } = tax;
            return {
                amount: getTransformedPrice(amount),
                label: name,
            };
        }) || null;

    const discounts = coupons.map((coupon) => {
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

    const subtotal_excluding_tax = cart?.baseAmount
        ? getTransformedPrice({
              value: cart.baseAmount.value - taxTotal?.value || 0,
              currencyCode: cart.baseAmount.currencyCode,
          })
        : null;

    const subtotal_including_tax = cart?.baseAmount ? getTransformedPrice(cart?.baseAmount) : null;

    const subtotal_with_discount_including_tax = cart?.baseAmount.value
        ? {
              value: cart.baseAmount.value || 0 + discountedAmount.value || 0,
              currency: cart.baseAmount.currencyCode as Maybe<CurrencyEnum>,
          }
        : null;

    const subtotal_with_discount_excluding_tax = cart?.baseAmount.value
        ? {
              value: cart.baseAmount.value || 0 - taxTotal?.value || 0 + discountedAmount.value,
              currency: cart.baseAmount.currencyCode as Maybe<CurrencyEnum>,
          }
        : null;

    return {
        applied_taxes,
        discounts,
        grand_total: grandTotal?.value ? getTransformedPrice(grandTotal) : null,
        subtotal_excluding_tax,
        subtotal_including_tax,
        subtotal_with_discount_including_tax,
        subtotal_with_discount_excluding_tax,
    };
};
