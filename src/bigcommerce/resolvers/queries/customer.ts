import { QueryResolvers } from '@mesh';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformBcCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../../utils/tokens';
import { getSubscriberByEmail } from '../../apis/rest/subscriber';
import { getAllOrders } from '../../apis/rest/order';
import { BCOrder } from '../../types';

export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const bcOrders: BCOrder[] = [];
        for await (const bcOrder of getAllOrders(bcCustomerId)) {
            bcOrders.push(bcOrder);
        }

        const [bcCustomer, bcAddresses] = await Promise.all([
            getBcCustomer(bcCustomerId, customerImpersonationToken),
            getAllCustomerAddresses(bcCustomerId),
        ]);

        const subscriber = await getSubscriberByEmail(encodeURIComponent(bcCustomer.email));
        const isSubscriber = !!subscriber;

        return transformBcCustomer(bcCustomer, bcAddresses, isSubscriber, bcOrders);
    },
};
