import { CustomerOrderResolvers, OrderItem } from '@aligent/bigcommerce-resolvers';
import { getLineItems } from '../../../apis/rest/order';
import { transformBcOrderLineItem } from '../../../factories/tranform-rest-order-line-item';
import { atob } from '@aligent/utils';

/**
 * This is a sub-resolver it is executed after customerOrdersResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerOrderItemsResolver: CustomerOrderResolvers['items'] = {
    resolve: async (root, _args, _context, _info) => {
        //root.id contains the orderId which is base64 encoded by the previously executed customerOrders resolver
        const orderId = atob(root.id);
        const orderCurrencyCode = root.currency_code;

        const orderItems: Array<OrderItem> = [];
        for await (const lineItem of getLineItems(orderId.toString())) {
            orderItems.push(transformBcOrderLineItem(lineItem, orderCurrencyCode));
        }
        return orderItems;
    },
};
