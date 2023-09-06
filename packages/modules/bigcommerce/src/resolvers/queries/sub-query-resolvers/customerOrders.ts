import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { BCOrder } from '../../../types';
import { getTransformedOrders } from '../../../factories/helpers/transform-customer-orders';
import { getAllOrders, getOrder } from '../../../apis/rest/order';
import { getBcCustomerIdFromMeshToken } from '../../../utils';

export const customerOrdersResolver: QueryResolvers['customerOrders'] = {
    resolve: async (_root, args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        console.log('Inside Customers.orders sub resolver');
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
            return null;
        }

        return getTransformedOrders(bcOrders);
    },
};
