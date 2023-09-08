import { BCOrderLineItem } from '../types';
import { Money, CurrencyEnum, OrderItem } from '@aligent/bigcommerce-resolvers';

export const transformBcOrderLineItem = (
    lineItem: BCOrderLineItem,
    orderCurrencyCode: string
): OrderItem => {
    return {
        id: Buffer.from(String(lineItem.variant_id)).toString('base64'),
        product_sale_price: getSalePrice(lineItem, orderCurrencyCode),
        product_sale_price_incl_tax: getSalePriceIncTax(lineItem, orderCurrencyCode),
        product_sku: lineItem.sku, //is this parent or variant, parent sku not available, might need another api call
        quantity_ordered: lineItem.quantity,
        selected_options: getSelectedOptions(lineItem),
        product_name: lineItem.name,
        line_total: Number(lineItem.total_inc_tax), //This might need to get inc or ex tax based on config
        __typename: 'OrderItem', //needs to be defined, as the OrderItemInterface does not have a typename defined
    };
};

function getSalePrice(lineItem: BCOrderLineItem, currencyCode: string): Money {
    return {
        currency: currencyCode as CurrencyEnum,
        value: Number(lineItem.price_ex_tax),
    };
}

function getSalePriceIncTax(lineItem: BCOrderLineItem, currencyCode: string): Money {
    return {
        currency: currencyCode as CurrencyEnum,
        value: Number(lineItem.price_inc_tax),
    };
}

function getSelectedOptions(lineItem: BCOrderLineItem) {
    return lineItem.product_options.map((option) => {
        return {
            label: option.display_name,
            value: option.display_value,
        };
    });
}
