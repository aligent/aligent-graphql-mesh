import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { BCOrder } from '../../../types';
import { getAllOrders, getOrder } from '../../../apis/rest/order';
import { getBcCustomerIdFromMeshToken } from '../../../utils';
import { getTransformedOrders } from '../../../factories/transform-customer-orders';

const EMPTY_ORDER_RESPONSE = {
    items: [],
    page_info: {
        total_pages: 0,
    },
};

/* "incomplete" orders are created when navigating to the checkout and attempting to place
 * an order without filling in the payment details. Without actually placing an order,
 * these orders can be seen in the customer order history"*/
const STATUS_ORDERS_TO_REMOVE = ['incomplete'];

/**
 * This is a sub-resolver it is executed after customerResolver when orders was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerOrdersResolver: CustomerResolvers['orders'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const orderNumber = args?.filter?.number?.eq;

        let bcOrders: BCOrder[] = [];
        if (orderNumber) {
            const bcOrder = await getOrder(orderNumber);
            bcOrders.push(bcOrder);
        }
        if (!orderNumber) {
            bcOrders = await getAllOrders(bcCustomerId);
        }

        const filteredOrders = bcOrders.filter(
            (order) => !STATUS_ORDERS_TO_REMOVE.includes(order.status?.toLowerCase())
        );

        if (filteredOrders.length === 0) {
            //no orders found
            return EMPTY_ORDER_RESPONSE;
        }

        const pageSize = args.pageSize ? args.pageSize : 20;

        return getTransformedOrders(filteredOrders, pageSize, args.currentPage);
        //sub-resolver customerOrderItemsResolver is called after this if items is specified in query
    },
};
