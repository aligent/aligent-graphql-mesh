import { OrderItem } from '@aligent/bigcommerce-resolvers';
import { BCOrderLineItem } from '../../../../types';

export const bcOrderLineItem: BCOrderLineItem = {
    id: 60,
    order_id: 134,
    product_id: 492,
    variant_id: 515,
    order_pickup_method_id: 0,
    order_address_id: 36,
    name: 'Mona Pullover Hoodlie',
    name_customer: 'Mona Pullover Hoodlie',
    name_merchant: 'Mona Pullover Hoodlie',
    sku: 'WH01-S-Purple',
    upc: '',
    type: 'physical',
    base_price: '57.0',
    price_ex_tax: '51.82',
    price_inc_tax: '57.0',
    price_tax: '5.1800',
    base_total: '57.0',
    total_ex_tax: '51.82',
    total_inc_tax: '57.0',
    total_tax: '5.1800',
    weight: '1.0000',
    width: '21.0000',
    height: '21.0000',
    depth: '21.0000',
    quantity: 1,
    base_cost_price: '0.0000',
    cost_price_inc_tax: '0.0000',
    cost_price_ex_tax: '0.0000',
    cost_price_tax: '0.0000',
    is_refunded: false,
    quantity_refunded: 0,
    refund_amount: '0.0000',
    return_id: 0,
    wrapping_id: 0,
    wrapping_name: '',
    base_wrapping_cost: '0.0000',
    wrapping_cost_ex_tax: '0.0000',
    wrapping_cost_inc_tax: '0.0000',
    wrapping_cost_tax: '0.0000',
    wrapping_message: '',
    quantity_shipped: 0,
    event_date: '',
    fixed_shipping_cost: '0.0000',
    ebay_item_id: '',
    ebay_transaction_id: '',
    is_bundled_product: false,
    bin_picking_number: '',
    fulfillment_source: '',
    brand: 'Weller',
    applied_discounts: [],
    product_options: [
        {
            id: 48,
            option_id: 70,
            order_product_id: 60,
            product_option_id: 148,
            display_name: 'Color',
            display_name_customer: 'Color',
            display_name_merchant: 'Color',
            display_value: 'Purple',
            display_value_customer: 'Purple',
            display_value_merchant: 'Purple',
            value: '183',
            type: 'Swatch',
            name: 'Color1690452034-492',
            display_style: '',
        },
        {
            id: 49,
            option_id: 71,
            order_product_id: 60,
            product_option_id: 149,
            display_name: 'Size',
            display_name_customer: 'Size',
            display_name_merchant: 'Size',
            display_value: 'S',
            display_value_customer: 'S',
            display_value_merchant: 'S',
            value: '184',
            type: 'Multiple choice',
            name: 'Size1690452449-492',
            display_style: 'Radio Buttons',
        },
    ],
};

export const acOrderItemInterface: OrderItem = {
    id: 'NTE1',
    product_sale_price: {
        currency: 'AUD',
        value: 51.82,
    },
    product_sale_price_incl_tax: {
        currency: 'AUD',
        value: 57.0,
    },
    product_sku: 'WH01-S-Purple',
    quantity_ordered: 1,
    selected_options: [
        {
            label: 'Color',
            value: 'Purple',
        },
        {
            label: 'Size',
            value: 'S',
        },
    ],
    product_name: 'Mona Pullover Hoodlie',
    line_total: 57.0,
    __typename: 'OrderItem',
};

/**
 * AC Takeflight production data
 * {
 *   selected_options: [
 *     {
 *       label: "Color",
 *       value: "Purple",
 *       __typename: "OrderItemOption"
 *     },
 *     {
 *       label: "Size",
 *       value: "M",
 *       __typename: "OrderItemOption"
 *     }
 *   ],
 *   id: "NDUzMA==",
 *   product_sale_price: {
 *     currency: "AUD",
 *     value: 51.82,
 *     __typename: "Money"
 *   },
 *   product_sale_price_incl_tax: {
 *     currency: "AUD",
 *     value: 57,
 *     __typename: "Money"
 *   },
 *   quantity_ordered: 1,
 *   product_sku: "WH01-M-Purple",
 *   product_name: "Mona Pullover Hoodlie",
 *   line_total: 57,
 *   __typename: "OrderItem"
 * }
 */
