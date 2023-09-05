import { QueryResolvers } from '@aligent/bigcommerce-resolvers';

export const customerOrdersResolver: QueryResolvers['customerOrders'] = {
    resolve: async (_root, _args, context, _info) => {
        console.log('Inside Customers.orders sub resolver');
        console.log(_root, _args);
        return null;
    },
};
