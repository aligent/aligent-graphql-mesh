import { CustomerResolvers } from '@aligent/bigcommerce-resolvers';
import { BCOrder } from '../../../types';
import { getTransformedOrders } from '../../../factories/helpers/transform-customer-orders';
import { getAllOrders, getOrder } from '../../../apis/rest/order';
import { getBcCustomerIdFromMeshToken } from '../../../utils';

const EMPTY_ORDER_RESPONSE = {
    items: [],
    page_info: {
        total_pages: 0,
    },
};

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
        if (bcOrders.length === 0) {
            //no orders found
            return EMPTY_ORDER_RESPONSE;
        }

        const pageSize = args.pageSize ? args.pageSize : 20;

        return getTransformedOrders(bcOrders, pageSize, args.currentPage);
        //sub-resolver customerOrderItemsResolver is called after this if items is specified in query
    },
};
