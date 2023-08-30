import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformBcCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '@aligent/utils';
import { getSubscriberByEmail } from '../../apis/rest/subscriber';
import { getOrders } from '../../apis/rest/order';
import { BCOrder } from '../../types';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const [bcCustomer, bcAddresses, bcOrders] = await Promise.all([
            getBcCustomer(bcCustomerId, customerImpersonationToken),
            getAllCustomerAddresses(bcCustomerId),
            getAllOrders(bcCustomerId),
        ]);

        const subscriber = await getSubscriberByEmail(encodeURIComponent(bcCustomer.email));
        const isSubscriber = !!subscriber;

        return transformBcCustomer(bcCustomer, bcAddresses, isSubscriber, bcOrders);
    },
};

const getAllOrders = async (bcCustomerId: number): Promise<BCOrder[]> => {
    const bcOrders: BCOrder[] = [];
    for await (const bcOrder of getOrders(bcCustomerId)) {
        bcOrders.push(bcOrder);
    }

    return bcOrders;
};
