import {
    CountryCodeEnum,
    CurrencyEnum,
    CustomerOrder,
    CustomerOrders,
    Discount,
    Invoice,
} from '@aligent/bigcommerce-resolvers';
import { SearchResultPageInfo } from '@aligent/bigcommerce-resolvers';
import { btoa, convertDateFormat } from '@aligent/utils';
import { BCOrder } from '../types';

function transformOrderDiscount(bcOrder: BCOrder): Discount[] {
    if (bcOrder.discount_amount === '0.0000') {
        return [];
    }
    //TODO: get order coupon code and label from https://api.bigcommerce.com/stores/{{store_hash}}/v2/orders/133/coupons
    //check with FE if coupons are implemented in PWA
    return [
        {
            amount: {
                currency: bcOrder.currency_code as CurrencyEnum,
                value: Number(bcOrder.discount_amount),
            },
            code: 'Not available',
            label: 'Not available',
        },
    ];
}

export const getTransformedOrders = (
    bcOrders: BCOrder[],
    page_size: number,
    current_page: SearchResultPageInfo['current_page']
): CustomerOrders => {
    const customerOrderItems = bcOrders.map((bcOrder) => {
        const orderItem: CustomerOrder = {
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
                subtotal_incl_tax: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.subtotal_inc_tax),
                },
                shipping_handling: {
                    amount_including_tax: {
                        currency: bcOrder.currency_code as CurrencyEnum,
                        value: Number(bcOrder.shipping_cost_inc_tax),
                    },
                    total_amount: {
                        currency: bcOrder.currency_code as CurrencyEnum,
                        value: Number(bcOrder.shipping_cost_inc_tax),
                    },
                },
                taxes: [
                    {
                        amount: {
                            currency: bcOrder.currency_code as CurrencyEnum,
                            value: Number(bcOrder.total_tax),
                        },
                        //TODO: pass in tax rate and title from somewhere in BC
                        //Check with FE if this value is actually used at this point
                        rate: 10,
                        title: 'GST',
                    },
                ],
                total_giftcard: {
                    currency: bcOrder.currency_code as CurrencyEnum,
                    value: Number(bcOrder.gift_certificate_amount),
                },
                discounts: transformOrderDiscount(bcOrder),
            },
            payment_methods: [
                {
                    additional_data: null,
                    name: bcOrder.payment_method,
                    type: bcOrder.payment_method,
                },
            ],
            billing_address: {
                city: bcOrder.billing_address.city,
                company: bcOrder.billing_address.company,
                country_code: bcOrder.billing_address.country_iso2 as CountryCodeEnum,
                firstname: bcOrder.billing_address.first_name,
                lastname: bcOrder.billing_address.last_name,
                postcode: bcOrder.billing_address.zip,
                street: [bcOrder.billing_address.street_1 + ' ' + bcOrder.billing_address.street_2],
                telephone: bcOrder.billing_address.phone,
                region: bcOrder.billing_address.state,
            },
            // Needed for TS
            gift_receipt_included: false,
            printed_card_included: false,
            invoices: [] as unknown as Invoice[],
            currency_code: bcOrder.currency_code,
            //Added by sub-resolvers: shipping_address, shipping_method, items
            //Sub resolvers see: src/resolvers/index.ts CustomerOrder
        };

        return orderItem;
    });
    const total_count = customerOrderItems.length;
    const total_pages = Math.ceil(total_count / page_size);
    return {
        items: customerOrderItems,
        total_count,
        page_info: { total_pages, current_page, page_size },
    };
};
