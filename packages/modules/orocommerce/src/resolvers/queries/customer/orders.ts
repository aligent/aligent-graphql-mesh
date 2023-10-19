import { CustomerResolvers } from '@aligent/orocommerce-resolvers';
import { OrdersClient } from '../../../apis/rest/orders';
import { CustomerOrdersTransformerChain } from '../../../transformers/orders/order-transformer';

export const customerOrdersResolver: CustomerResolvers['orders'] = {
    resolve: async (_root, _args, _context, _info) => {
        const client: OrdersClient = _context.injector.get(OrdersClient);
        const customerOrdersTransfomerChain: CustomerOrdersTransformerChain = _context.injector.get(
            CustomerOrdersTransformerChain
        );

        const orders = await client.getOrders();

        return customerOrdersTransfomerChain.transform({
            data: orders
        })
    },
};
