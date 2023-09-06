import { CurrencyEnum, CustomerOrders, Invoice } from '@aligent/bigcommerce-resolvers';
import { BCOrder } from '../../types';
import { btoa, convertDateFormat } from '@aligent/utils';

export const getTransformedOrders = (bcOrders: BCOrder[]): CustomerOrders => {
    const customerOrderItems = bcOrders.map((bcOrder) => {
        return {
            number: String(bcOrder.id),
            id: btoa(String(bcOrder.id)),
            order_date: convertDateFormat(bcOrder.date_created),
            status: bcOrder.status,
            state: String(bcOrder.status_id),
            /** @deprecated Use the `number` field instead. */
            order_number: String(bcOrder.id),
            total: {
                grand_total: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.total_inc_tax),
                },
                // Needed for TS
                base_grand_total: { currency: bcOrder.currency_code as CurrencyEnum, value: null },
                subtotal: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.subtotal_inc_tax),
                },
                total_shipping: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.shipping_cost_inc_tax),
                },
                total_tax: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.total_tax),
                },
            },
            // Needed for TS
            gift_receipt_included: false,
            printed_card_included: false,
            invoices: [] as unknown as Invoice[],
            currency_code: bcOrder.currency_code,
        };
    });
    const customerOrders: CustomerOrders = { items: customerOrderItems };
    return customerOrders;
};
