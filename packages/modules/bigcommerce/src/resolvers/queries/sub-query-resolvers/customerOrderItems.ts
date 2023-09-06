import { OrderItemInterface, QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { BCOrderLineItem } from '../../../types';
import { getLineItems } from '../../../apis/rest/order';
import { transformRestCartLineItems } from '../../../factories/transform-rest-cart-line-items';

export const customerOrderItemsResolver: QueryResolvers['customerOrderItems'] = {
    resolve: async (root, _args, context, _info) => {
        //root.id contains the orderId which is base64 encoded by the previously executed customerOrders resolver
        const orderId = Buffer.from(root.id, 'base64').toString();
        //move this to order.ts
        const bcOrderLineItems: Array<BCOrderLineItem> = [];
        for await (const lineItem of getLineItems(orderId.toString())) {
            bcOrderLineItems.push(lineItem);
        }
        //do transform
        return [];
    },
};
