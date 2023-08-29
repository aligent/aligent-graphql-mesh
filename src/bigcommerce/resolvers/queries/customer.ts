import { QueryResolvers } from '@mesh';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformBcCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { getSubscriberByEmail } from '../../apis/rest/subscriber';
import { getAllOrders } from '../../apis/rest/order';

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
