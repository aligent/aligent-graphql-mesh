import { CurrencyEnum, CustomerOrder, Invoice } from '@mesh';
import { BCOrder } from '../../types';
import { btoa } from '../../../utils';

export const getTransformedOrders = (bcOrders: BCOrder[]): CustomerOrder[] => {
    return bcOrders.map((bcOrder) => {
        return {
            number: String(bcOrder.id),
            id: btoa(String(bcOrder.id)),
            order_date: bcOrder.date_created,
            status: bcOrder.status,
            total: {
                grand_total: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.total_inc_tax),
                },
                // Needed for TS
                base_grand_total: { currency: null, value: null },
                subtotal: { currency: null, value: null },
                total_shipping: { currency: null, value: null },
                total_tax: { currency: null, value: null },
            },
            // Needed for TS
            gift_receipt_included: false,
            /** @deprecated Use the `number` field instead. */
            order_number: String(bcOrder.id),
            printed_card_included: false,
            state: bcOrder.status,
            invoices: [] as unknown as Invoice[],
        };
    });
};
