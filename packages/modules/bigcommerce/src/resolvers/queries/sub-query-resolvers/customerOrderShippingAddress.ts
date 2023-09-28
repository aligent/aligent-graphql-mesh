import { CustomerOrderResolvers } from '@aligent/bigcommerce-resolvers';
import { atob } from '@aligent/utils';
import { getConsignments } from '../../../apis/rest/order';
import { getTransformedShippingAddress } from '../../../factories/transform-order-consignment';

/**
 * This is a sub-resolver it is executed after customerOrdersResolver when items was specified in the query
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerOrderShippingAddressResolver: CustomerOrderResolvers['shipping_address'] = {
    resolve: async (root, _args, _context, _info) => {
        //root.id contains the orderId which is base64 encoded by the previously executed customerOrders resolver
        const orderId = atob(root.id);

        const bcConsignment = await getConsignments(orderId);

        return getTransformedShippingAddress(bcConsignment);
    },
};
