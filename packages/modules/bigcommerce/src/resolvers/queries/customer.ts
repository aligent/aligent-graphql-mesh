import { QueryResolvers } from '@aligent/bigcommerce-resolvers';
import { getBcCustomer } from '../../apis/graphql/customer';
import { transformBcCustomer } from '../../factories/transform-customer-data';
import { getAllCustomerAddresses } from '../../apis/rest/customer';
import { getBcCustomerIdFromMeshToken } from '../../utils';
import { getSubscriberByEmail } from '../../apis/rest/subscriber';

/**
 * CustomerOrders are fetched via the sub-resolver: customerOrdersResolver
 * The sub-resolvers is configured here in the scr/resolves/index.ts
 */
export const customerResolver: QueryResolvers['customer'] = {
    resolve: async (_root, _args, context, _info) => {
        const bcCustomerId = getBcCustomerIdFromMeshToken(context.headers.authorization);
        const customerImpersonationToken = (await context.cache.get(
            'customerImpersonationToken'
        )) as string;

        const [bcCustomer, bcAddresses] = await Promise.all([
            getBcCustomer(bcCustomerId, customerImpersonationToken),
            getAllCustomerAddresses(bcCustomerId),
        ]);

        const subscriber = await getSubscriberByEmail(bcCustomer.email);
        const isSubscriber = !!subscriber;

        return transformBcCustomer(bcCustomer, bcAddresses, isSubscriber);
        //sub-resolver customerOrdersResolver is called after this if orders is specified in query
    },
};
