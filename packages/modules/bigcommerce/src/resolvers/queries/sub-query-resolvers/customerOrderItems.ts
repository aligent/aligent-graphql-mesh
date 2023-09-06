import { OrderItemInterface, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getLineItems } from '../../../apis/rest/order';
import { transformBcOrderLineItem } from '../../../factories/tranform-rest-order-line-item';

export const customerOrderItemsResolver: QueryResolvers['customerOrderItems'] = {
    resolve: async (root, _args, _context, _info) => {
        //root.id contains the orderId which is base64 encoded by the previously executed customerOrders resolver
        const orderId = Buffer.from(root.id, 'base64').toString();
        const orderCurrencyCode = root.currency_code;

        const orderItems: Array<OrderItemInterface> = [];
        for await (const lineItem of getLineItems(orderId.toString())) {
            orderItems.push(transformBcOrderLineItem(lineItem, orderCurrencyCode));
        }
        return orderItems;
    },
};
